/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type React from "react";
import { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { DiceNumberInput } from "../dice-number-input";

import AbilityDie from "../../classes/edge-of-the-empire-dice/ability-die";
import BoostDie from "../../classes/edge-of-the-empire-dice/boost-die";
import ChallengeDie from "../../classes/edge-of-the-empire-dice/challenge-die";
import DifficultyDie from "../../classes/edge-of-the-empire-dice/difficulty-die";
import ForceDie from "../../classes/edge-of-the-empire-dice/force-die";
import ProficiencyDie from "../../classes/edge-of-the-empire-dice/proficiency-die";
import SetbackDie from "../../classes/edge-of-the-empire-dice/setback-die";
import type EdgeOfTheEmpireDiceCollection from "../../types/edge-of-the-empire-dice-collection";

import "./styles.css";

export interface IEdgeOfTheEmpireDiceSelectorProps {
	onRollClicked: (dice: EdgeOfTheEmpireDiceCollection) => void;
}

export const EdgeOfTheEmpireDiceSelector = ({
	onRollClicked,
}: IEdgeOfTheEmpireDiceSelectorProps) => {
	const [boostInputValue, setBoostInputValue] = useState<string>("0");
	const [setbackInputValue, setSetbackInputValue] = useState<string>("0");
	const [abilityInputValue, setAbilityInputValue] = useState<string>("0");
	const [difficultyInputValue, setDifficultyInputValue] = useState<string>("0");
	const [proficiencyInputValue, setProficiencyInputValue] =
		useState<string>("0");
	const [challengeInputValue, setChallengeInputValue] = useState<string>("0");
	const [forceInputValue, setForceInputValue] = useState<string>("0");
	const [rollIsDisabled, setRollIsDisabled] = useState<boolean>(false);

	const rollAllDice = useCallback((): void => {
		const dice: EdgeOfTheEmpireDiceCollection = {
			boost: [],
			setback: [],
			ability: [],
			difficulty: [],
			proficiency: [],
			challenge: [],
			force: [],
		};

		const boost = Number.parseInt(boostInputValue);
		for (let rolls = 0; rolls < boost; rolls++) {
			dice.boost.push(new BoostDie());
		}
		const setback = Number.parseInt(setbackInputValue);
		for (let rolls = 0; rolls < setback; rolls++) {
			dice.setback.push(new SetbackDie());
		}
		const ability = Number.parseInt(abilityInputValue);
		for (let rolls = 0; rolls < ability; rolls++) {
			dice.ability.push(new AbilityDie());
		}
		const difficulty = Number.parseInt(difficultyInputValue);
		for (let rolls = 0; rolls < difficulty; rolls++) {
			dice.difficulty.push(new DifficultyDie());
		}
		const proficiency = Number.parseInt(proficiencyInputValue);
		for (let rolls = 0; rolls < proficiency; rolls++) {
			dice.proficiency.push(new ProficiencyDie());
		}
		const challenge = Number.parseInt(challengeInputValue);
		for (let rolls = 0; rolls < challenge; rolls++) {
			dice.challenge.push(new ChallengeDie());
		}
		const force = Number.parseInt(forceInputValue);
		for (let rolls = 0; rolls < force; rolls++) {
			dice.force.push(new ForceDie());
		}

		onRollClicked(dice);
	}, [
		boostInputValue,
		setbackInputValue,
		abilityInputValue,
		difficultyInputValue,
		proficiencyInputValue,
		challengeInputValue,
		forceInputValue,
	]);

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

	useEffect(() => {
		if (Number.parseInt(boostInputValue) > 0) setRollIsDisabled(false);
		else if (Number.parseInt(setbackInputValue) > 0) setRollIsDisabled(false);
		else if (Number.parseInt(abilityInputValue) > 0) setRollIsDisabled(false);
		else if (Number.parseInt(difficultyInputValue) > 0)
			setRollIsDisabled(false);
		else if (Number.parseInt(proficiencyInputValue) > 0)
			setRollIsDisabled(false);
		else if (Number.parseInt(challengeInputValue) > 0) setRollIsDisabled(false);
		else if (Number.parseInt(forceInputValue) > 0) setRollIsDisabled(false);
		else setRollIsDisabled(true);
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
	) => updateFunction((Number.parseInt(currentValue) + 1).toString());

	const handleDecrease = (
		currentValue: string,
		updateFunction: React.Dispatch<React.SetStateAction<string>>,
	) =>
		updateFunction(Math.max(Number.parseInt(currentValue) - 1, 0).toString());

	const handleBoostIncreaseClick = useCallback(
		() => handleIncrease(boostInputValue, setBoostInputValue),
		[boostInputValue],
	);

	const handleBoostDecreaseClick = useCallback(
		() => handleDecrease(boostInputValue, setBoostInputValue),
		[boostInputValue],
	);

	const handleSetbackIncreaseClick = useCallback(
		() => handleIncrease(setbackInputValue, setSetbackInputValue),
		[setbackInputValue],
	);

	const handleSetbackDecreaseClick = useCallback(
		() => handleDecrease(setbackInputValue, setSetbackInputValue),
		[setbackInputValue],
	);

	const handleAbilityIncreaseClick = useCallback(
		() => handleIncrease(abilityInputValue, setAbilityInputValue),
		[abilityInputValue],
	);

	const handleAbilityDecreaseClick = useCallback(
		() => handleDecrease(abilityInputValue, setAbilityInputValue),
		[abilityInputValue],
	);

	const handleDifficultyIncreaseClick = useCallback(
		() => handleIncrease(difficultyInputValue, setDifficultyInputValue),
		[difficultyInputValue],
	);

	const handleDifficultyDecreaseClick = useCallback(
		() => handleDecrease(difficultyInputValue, setDifficultyInputValue),
		[difficultyInputValue],
	);

	const handleProficiencyIncreaseClick = useCallback(
		() => handleIncrease(proficiencyInputValue, setProficiencyInputValue),
		[proficiencyInputValue],
	);

	const handleProficiencyDecreaseClick = useCallback(
		() => handleDecrease(proficiencyInputValue, setProficiencyInputValue),
		[proficiencyInputValue],
	);

	const handleChallengeIncreaseClick = useCallback(
		() => handleIncrease(challengeInputValue, setChallengeInputValue),
		[challengeInputValue],
	);

	const handleChallengeDecreaseClick = useCallback(
		() => handleDecrease(challengeInputValue, setChallengeInputValue),
		[challengeInputValue],
	);

	const handleForceIncreaseClick = useCallback(
		() => handleIncrease(forceInputValue, setForceInputValue),
		[forceInputValue],
	);

	const handleForceDecreaseClick = useCallback(
		() => handleDecrease(forceInputValue, setForceInputValue),
		[forceInputValue],
	);

	return (
		<Form noValidate className="edge-of-the-empire-dice-selector">
			<div className="dice-options-container">
				<div className="dice-pair">
					<Form.Group className="dice-option">
						<Form.Label>🟦 Boost</Form.Label>
						<DiceNumberInput
							value={boostInputValue}
							updateValue={setBoostInputValue}
							handleIncreaseClick={handleBoostIncreaseClick}
							handleDecreaseClick={handleBoostDecreaseClick}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>⬛️ Setback</Form.Label>
						<DiceNumberInput
							value={setbackInputValue}
							updateValue={setSetbackInputValue}
							handleIncreaseClick={handleSetbackIncreaseClick}
							handleDecreaseClick={handleSetbackDecreaseClick}
						/>
					</Form.Group>
				</div>
				<div className="dice-pair">
					<Form.Group className="dice-option">
						<Form.Label>🟩 Ability</Form.Label>
						<DiceNumberInput
							value={abilityInputValue}
							updateValue={setAbilityInputValue}
							handleIncreaseClick={handleAbilityIncreaseClick}
							handleDecreaseClick={handleAbilityDecreaseClick}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>🟪 Difficulty</Form.Label>
						<DiceNumberInput
							value={difficultyInputValue}
							updateValue={setDifficultyInputValue}
							handleIncreaseClick={handleDifficultyIncreaseClick}
							handleDecreaseClick={handleDifficultyDecreaseClick}
						/>
					</Form.Group>
				</div>
				<div className="dice-pair">
					<Form.Group className="dice-option">
						<Form.Label>🟨 Proficiency</Form.Label>
						<DiceNumberInput
							value={proficiencyInputValue}
							updateValue={setProficiencyInputValue}
							handleIncreaseClick={handleProficiencyIncreaseClick}
							handleDecreaseClick={handleProficiencyDecreaseClick}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>🟥 Challenge</Form.Label>
						<DiceNumberInput
							value={challengeInputValue}
							updateValue={setChallengeInputValue}
							handleIncreaseClick={handleChallengeIncreaseClick}
							handleDecreaseClick={handleChallengeDecreaseClick}
						/>
					</Form.Group>
				</div>
				<div className="dice-pair force-dice">
					<Form.Group className="dice-option">
						<Form.Label>⬜️ Force</Form.Label>
						<DiceNumberInput
							value={forceInputValue}
							updateValue={setForceInputValue}
							handleIncreaseClick={handleForceIncreaseClick}
							handleDecreaseClick={handleForceDecreaseClick}
						/>
					</Form.Group>
				</div>
			</div>
			<div className="button-container">
				<Button onClick={rollAllDice} disabled={rollIsDisabled}>
					Roll
				</Button>
				<Button variant="outline-danger" onClick={handleClearSelection}>
					Clear
				</Button>
			</div>
		</Form>
	);
};
