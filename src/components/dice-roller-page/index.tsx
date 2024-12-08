/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, {
	Suspense,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Heading = React.lazy(() => import("../heading"));
const LoadingSpinner = React.lazy(() => import("../loading-spinner"));
const Footer = React.lazy(() => import("../footer"));

import { NumberDiceResults } from "../number-dice-results";
import { NumberedDiceSelector } from "../numbered-dice-selector";

import type NumberDie from "../../classes/number-die";
import {
	DiceType,
	mapNumberToDiceTypeDisplayName,
} from "../../enums/dice-type";

import type EdgeOfTheEmpireDiceCollection from "../../types/edge-of-the-empire-dice-collection";
import { getCookie, setCookie } from "../../utility/cookies";
import { AppSettingsContext } from "../app-settings-provider";
import { EdgeOfTheEmpireDiceResults } from "../edge-of-the-empire-dice-results";
import { EdgeOfTheEmpireDiceSelector } from "../edge-of-the-empire-dice-selector";

import { Button } from "react-bootstrap";
import { RollHistoryModal } from "../roll-history-modal";

import "./styles.css";

const cookieName = "diceRollerType";

export const DiceRollerPage = () => {
	const [numberDiceRollResults, setNumberDiceRollResults] = useState<
		NumberDie[] | null
	>(null);
	const [edgeOfTheEmpireDiceRollResult, setEdgeOfTheEmpireDiceRollResult] =
		useState<EdgeOfTheEmpireDiceCollection | null>(null);
	const { useCookies } = useContext(AppSettingsContext);
	const [diceType, setDiceType] = useState<DiceType>(() => {
		if (useCookies) {
			const cookie = getCookie(cookieName);

			if (cookie) return Number.parseInt(cookie);
		}

		return DiceType.Numbered;
	});
	const [historyModalIsOpen, setHistoryModalIsOpen] = useState<boolean>(false);
	const [numberedDiceRollHistory, setNumberedDiceRollHistory] = useState<
		NumberDie[][]
	>([]);
	const [edgeRollHistory, setEdgeRollHistory] = useState<
		EdgeOfTheEmpireDiceCollection[]
	>([]);

	// biome-ignore lint/correctness/useExhaustiveDependencies(numberedDiceRollHistory): update should not occur on dice roll history change to avoid loop
	useEffect(() => {
		if (!numberDiceRollResults) return;

		setNumberedDiceRollHistory([
			...numberedDiceRollHistory,
			numberDiceRollResults,
		]);
	}, [numberDiceRollResults]);

	// biome-ignore lint/correctness/useExhaustiveDependencies(edgeRollHistory): update should not occur on dice roll history change to avoid loop
	useEffect(() => {
		if (!edgeOfTheEmpireDiceRollResult) return;

		setEdgeRollHistory([...edgeRollHistory, edgeOfTheEmpireDiceRollResult]);
	}, [edgeOfTheEmpireDiceRollResult]);

	const handleResultsClear = useCallback(() => {
		setNumberDiceRollResults(null);
		setEdgeOfTheEmpireDiceRollResult(null);
	}, []);

	const handleHistoryClear = useCallback(() => {
		setNumberedDiceRollHistory([]);
		setEdgeRollHistory([]);
	}, []);

	const openHistoryModal = useCallback(() => setHistoryModalIsOpen(true), []);

	const closeHistoryModal = useCallback(() => setHistoryModalIsOpen(false), []);

	const handleDiceTypeChange = useCallback(
		(type: DiceType): void => {
			if (useCookies) setCookie(cookieName, type.toString(), false);

			setDiceType(type);
		},
		[useCookies],
	);

	const selectNumberedDiceType = useCallback(
		() => handleDiceTypeChange(DiceType.Numbered),
		[handleDiceTypeChange],
	);

	const selectEdgeDiceType = useCallback(
		() => handleDiceTypeChange(DiceType.EdgeOfTheEmpire),
		[handleDiceTypeChange],
	);

	return (
		<div className="gutter-container">
			<div className="page">
				<Suspense fallback={<LoadingSpinner />}>
					<Heading />
					<h2>Dice Roller</h2>
					<div className="buttons">
						<DropdownButton className="dropdown" title="Dice Type">
							<Dropdown.Item
								eventKey={DiceType.Numbered}
								onClick={selectNumberedDiceType}
							>
								{mapNumberToDiceTypeDisplayName(DiceType.Numbered)}
							</Dropdown.Item>
							<Dropdown.Item
								eventKey={DiceType.EdgeOfTheEmpire}
								onClick={selectEdgeDiceType}
							>
								{mapNumberToDiceTypeDisplayName(DiceType.EdgeOfTheEmpire)}
							</Dropdown.Item>
						</DropdownButton>
						<Button variant="outline-primary" onClick={openHistoryModal}>
							Roll History
						</Button>
					</div>
					<div className="dice-container">
						{diceType === DiceType.Numbered && (
							<>
								<NumberedDiceSelector
									onRollClicked={setNumberDiceRollResults}
								/>
								<NumberDiceResults
									results={numberDiceRollResults}
									onClearClicked={handleResultsClear}
								/>
							</>
						)}
						{diceType === DiceType.EdgeOfTheEmpire && (
							<>
								<EdgeOfTheEmpireDiceSelector
									onRollClicked={setEdgeOfTheEmpireDiceRollResult}
								/>
								<EdgeOfTheEmpireDiceResults
									results={edgeOfTheEmpireDiceRollResult}
									onClearClicked={handleResultsClear}
								/>
							</>
						)}
					</div>
					<RollHistoryModal
						show={historyModalIsOpen}
						onClose={closeHistoryModal}
						onClear={handleHistoryClear}
						selectedType={diceType}
						numberedDiceHistory={numberedDiceRollHistory}
						edgeDiceHistory={edgeRollHistory}
					/>
					<Footer />
				</Suspense>
			</div>
		</div>
	);
};
