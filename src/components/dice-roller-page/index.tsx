/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense, useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const Heading = React.lazy(() => import("../heading"));
const LoadingSpinner = React.lazy(() => import("../loading-spinner"));
const Footer = React.lazy(() => import("../footer"));

import { DndDiceSelector } from "../dnd-dice-selector";
import { NumberDiceResults } from "../number-dice-results";

import NumberDie from "../../classes/number-die";
import {
	DiceType,
	mapNumberToDiceTypeDisplayName,
} from "../../enums/dice-type";

import { AppSettingsContext } from "../app-settings-provider";
import { EdgeOfTheEmpireDiceSelector } from "../edge-of-the-empire-dice-selector";
import EdgeOfTheEmpireDiceCollection from "../../types/edge-of-the-empire-dice-collection";
import { EdgeOfTheEmpireDiceResults } from "../edge-of-the-empire-dice-results";
import { getCookie, setCookie } from "../../utility/cookies";

import "./page.scss";

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

			if (cookie) return parseInt(cookie);
		}

		return DiceType.Numbered;
	});

	const handleResultsClear = () => {
		setNumberDiceRollResults(null);
		setEdgeOfTheEmpireDiceRollResult(null);
	};

	const handleDiceTypeChange = (type: DiceType): void => {
		if (useCookies) setCookie(cookieName, type.toString(), false);

		setDiceType(type);
	};

	return (
		<div className="gutter-container">
			<div className="page">
				<Suspense fallback={<LoadingSpinner />}>
					<Heading />
					<h2>Dice Roller</h2>
					<DropdownButton title="Dice Type">
						<Dropdown.Item
							eventKey={DiceType.Numbered}
							onClick={() =>
								handleDiceTypeChange(DiceType.Numbered)
							}
						>
							{mapNumberToDiceTypeDisplayName(DiceType.Numbered)}
						</Dropdown.Item>
						<Dropdown.Item
							eventKey={DiceType.EdgeOfTheEmpire}
							onClick={() =>
								handleDiceTypeChange(DiceType.EdgeOfTheEmpire)
							}
						>
							{mapNumberToDiceTypeDisplayName(
								DiceType.EdgeOfTheEmpire,
							)}
						</Dropdown.Item>
					</DropdownButton>
					<div className="dice-container">
						{diceType === DiceType.Numbered && (
							<>
								<DndDiceSelector
									onRollClicked={(results: NumberDie[]) =>
										setNumberDiceRollResults(results)
									}
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
									onRollClicked={(
										result: EdgeOfTheEmpireDiceCollection,
									) =>
										setEdgeOfTheEmpireDiceRollResult(result)
									}
								/>
								<EdgeOfTheEmpireDiceResults
									results={edgeOfTheEmpireDiceRollResult}
									onClearClicked={handleResultsClear}
								/>
							</>
						)}
					</div>
					<Footer />
				</Suspense>
			</div>
		</div>
	);
};
