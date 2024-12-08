/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type React from "react";
import { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";

import type NumberDie from "../../classes/number-die";
import { DiceType } from "../../enums/dice-type";
import type EdgeOfTheEmpireDiceCollection from "../../types/edge-of-the-empire-dice-collection";
import { EdgeOfTheEmpireDiceResults } from "../edge-of-the-empire-dice-results";
import { NumberDiceResults } from "../number-dice-results";

import "./styles.css";

export interface IRollHistoryModal {
	show: boolean;
	onClose: () => void;
	onClear: () => void;
	selectedType: DiceType;
	numberedDiceHistory: NumberDie[][];
	edgeDiceHistory: EdgeOfTheEmpireDiceCollection[];
}

export const RollHistoryModal = ({
	show,
	onClose,
	onClear,
	selectedType,
	numberedDiceHistory,
	edgeDiceHistory,
}: IRollHistoryModal) => {
	const [currentRoll, setCurrentRoll] = useState<number>(0);
	const [currentHistory, setCurrentHistory] = useState<
		NumberDie[][] | EdgeOfTheEmpireDiceCollection[]
	>(() => {
		if (selectedType === DiceType.Numbered) return numberedDiceHistory;
		return edgeDiceHistory;
	});

	useEffect(() => {
		if (selectedType === DiceType.Numbered)
			setCurrentHistory(numberedDiceHistory);
		else setCurrentHistory(edgeDiceHistory);
	}, [numberedDiceHistory, edgeDiceHistory]);

	const handlePaginationClick = useCallback(
		(e: React.MouseEvent) =>
			setCurrentRoll(
				Number.parseInt(e.currentTarget.getAttribute("data-roll") ?? "0"),
			),
		[],
	);

	const getPages = (): JSX.Element[] => {
		const pages = [];

		for (let i = 0; i < currentHistory.length; i++) {
			pages.push(
				<Pagination.Item
					active={currentRoll === i}
					data-roll={i}
					onClick={handlePaginationClick}
				>
					{i + 1}
				</Pagination.Item>,
			);
		}

		if (currentRoll === 0) return pages.slice(0, 3);
		else if (currentRoll === currentHistory.length - 1)
			return pages.slice(currentRoll - 2, currentRoll + 1);

		return pages.slice(Math.max(0, currentRoll - 1), currentRoll + 2);
	};

	const onNextClick = useCallback(
		() => setCurrentRoll(currentRoll + 1),
		[currentRoll],
	);

	const onPrevClick = useCallback(
		() => setCurrentRoll(currentRoll - 1),
		[currentRoll],
	);

	const onFirstClick = useCallback(() => setCurrentRoll(0), []);

	const onLastClick = useCallback(
		() => setCurrentRoll(currentHistory.length - 1),
		[currentHistory],
	);

	return (
		<Modal show={show} onHide={onClose}>
			<Modal.Header closeButton>
				<Modal.Title>Roll History</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className="d-flex flex-column justify-content-center align-items-center w-100">
					{selectedType === DiceType.Numbered ? (
						<NumberDiceResults
							results={numberedDiceHistory[currentRoll]}
							hideClear
						/>
					) : (
						<EdgeOfTheEmpireDiceResults
							results={edgeDiceHistory[currentRoll]}
							hideClear
						/>
					)}
					<Pagination>
						<Pagination.First
							disabled={currentHistory.length === 0 || currentRoll === 0}
							onClick={onFirstClick}
						/>
						<Pagination.Prev
							disabled={currentHistory.length === 0 || currentRoll === 0}
							onClick={onPrevClick}
						/>
						{getPages()}
						<Pagination.Next
							disabled={
								currentHistory.length === 0 ||
								currentRoll === currentHistory.length - 1
							}
							onClick={onNextClick}
						/>
						<Pagination.Last
							disabled={
								currentHistory.length === 0 ||
								currentRoll === currentHistory.length - 1
							}
							onClick={onLastClick}
						/>
					</Pagination>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={onClear}>
					Clear
				</Button>
				<Button variant="outline-secondary" onClick={onClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
