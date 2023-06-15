/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { DiceNumberInput } from "../dice-number-input";

import EdgeOfTheEmpireDiceCollection from "../../types/edge-of-the-empire-dice-collection";
import BoostDie from "../../classes/edge-of-the-empire-dice/boost-die";
import SetbackDie from "../../classes/edge-of-the-empire-dice/setback-die";
import AbilityDie from "../../classes/edge-of-the-empire-dice/ability-die";
import DifficultyDie from "../../classes/edge-of-the-empire-dice/difficulty-die";
import ProficiencyDie from "../../classes/edge-of-the-empire-dice/proficiency-die";
import ChallengeDie from "../../classes/edge-of-the-empire-dice/challenge-die";
import ForceDie from "../../classes/edge-of-the-empire-dice/force-die";

import "./edge-dice-selector.scss";

export interface IEdgeOfTheEmpireDiceSelectorProps {
	onRollClicked: (dice: EdgeOfTheEmpireDiceCollection) => void;
}

export const EdgeOfTheEmpireDiceSelector = ({
	onRollClicked,
}: IEdgeOfTheEmpireDiceSelectorProps) => {
	const [boostInputValue, setBoostInputValue] = useState<string>("0");
	const [setbackInputValue, setSetbackInputValue] = useState<string>("0");
	const [abilityInputValue, setAbilityInputValue] = useState<string>("0");
	const [difficultyInputValue, setDifficultyInputValue] =
		useState<string>("0");
	const [proficiencyInputValue, setProficiencyInputValue] =
		useState<string>("0");
	const [challengeInputValue, setChallengeInputValue] = useState<string>("0");
	const [forceInputValue, setForceInputValue] = useState<string>("0");

	const rollAllDice = (): void => {
		const dice: EdgeOfTheEmpireDiceCollection = {
			boost: [],
			setback: [],
			ability: [],
			difficulty: [],
			proficiency: [],
			challenge: [],
			force: [],
		};

		const boost = parseInt(boostInputValue);
		for (let rolls = 0; rolls < boost; rolls++) {
			dice.boost.push(new BoostDie());
		}
		const setback = parseInt(setbackInputValue);
		for (let rolls = 0; rolls < setback; rolls++) {
			dice.setback.push(new SetbackDie());
		}
		const ability = parseInt(abilityInputValue);
		for (let rolls = 0; rolls < ability; rolls++) {
			dice.ability.push(new AbilityDie());
		}
		const difficulty = parseInt(difficultyInputValue);
		for (let rolls = 0; rolls < difficulty; rolls++) {
			dice.difficulty.push(new DifficultyDie());
		}
		const proficiency = parseInt(proficiencyInputValue);
		for (let rolls = 0; rolls < proficiency; rolls++) {
			dice.proficiency.push(new ProficiencyDie());
		}
		const challenge = parseInt(challengeInputValue);
		for (let rolls = 0; rolls < challenge; rolls++) {
			dice.challenge.push(new ChallengeDie());
		}
		const force = parseInt(forceInputValue);
		for (let rolls = 0; rolls < force; rolls++) {
			dice.force.push(new ForceDie());
		}

		onRollClicked(dice);
	};

	const handleClearSelection = useCallback(() => {
		setBoostInputValue("0");
		setSetbackInputValue("0");
		setAbilityInputValue("0");
		setDifficultyInputValue("0");
		setProficiencyInputValue("0");
		setChallengeInputValue("0");
		setForceInputValue("0");
	}, [
		boostInputValue,
		setbackInputValue,
		abilityInputValue,
		difficultyInputValue,
		proficiencyInputValue,
		challengeInputValue,
		forceInputValue,
	]);

	const handleIncrease = (
		currentValue: string,
		updateFunction: React.Dispatch<React.SetStateAction<string>>,
	) => updateFunction((parseInt(currentValue) + 1).toString());

	const handleDecrease = (
		currentValue: string,
		updateFunction: React.Dispatch<React.SetStateAction<string>>,
	) => updateFunction(Math.max(parseInt(currentValue) - 1, 0).toString());

	return (
		<Form noValidate className="edge-of-the-empire-dice-selector">
			<div className="dice-options-container">
				<div className="dice-pair">
					<Form.Group className="dice-option">
						<Form.Label>🟦 Boost</Form.Label>
						<DiceNumberInput
							value={boostInputValue}
							updateValue={(x) => setBoostInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									boostInputValue,
									setBoostInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									boostInputValue,
									setBoostInputValue,
								)
							}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>⬛️ Setback</Form.Label>
						<DiceNumberInput
							value={setbackInputValue}
							updateValue={(x) => setSetbackInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									setbackInputValue,
									setSetbackInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									setbackInputValue,
									setSetbackInputValue,
								)
							}
						/>
					</Form.Group>
				</div>
				<div className="dice-pair">
					<Form.Group className="dice-option">
						<Form.Label>🟩 Ability</Form.Label>
						<DiceNumberInput
							value={abilityInputValue}
							updateValue={(x) => setAbilityInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									abilityInputValue,
									setAbilityInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									abilityInputValue,
									setAbilityInputValue,
								)
							}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>🟪 Difficulty</Form.Label>
						<DiceNumberInput
							value={difficultyInputValue}
							updateValue={(x) => setDifficultyInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									difficultyInputValue,
									setDifficultyInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									difficultyInputValue,
									setDifficultyInputValue,
								)
							}
						/>
					</Form.Group>
				</div>
				<div className="dice-pair">
					<Form.Group className="dice-option">
						<Form.Label>🟨 Proficiency</Form.Label>
						<DiceNumberInput
							value={proficiencyInputValue}
							updateValue={(x) => setProficiencyInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									proficiencyInputValue,
									setProficiencyInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									proficiencyInputValue,
									setProficiencyInputValue,
								)
							}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>🟥 Challenge</Form.Label>
						<DiceNumberInput
							value={challengeInputValue}
							updateValue={(x) => setChallengeInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									challengeInputValue,
									setChallengeInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									challengeInputValue,
									setChallengeInputValue,
								)
							}
						/>
					</Form.Group>
				</div>
				<div className="dice-pair force-dice">
					<Form.Group className="dice-option">
						<Form.Label>⬜️ Force</Form.Label>
						<DiceNumberInput
							value={forceInputValue}
							updateValue={(x) => setForceInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									forceInputValue,
									setForceInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									forceInputValue,
									setForceInputValue,
								)
							}
						/>
					</Form.Group>
				</div>
			</div>
			<div className="button-container">
				<Button onClick={rollAllDice}>Roll</Button>
				<Button variant="outline-danger" onClick={handleClearSelection}>
					Clear
				</Button>
			</div>
		</Form>
	);
};
