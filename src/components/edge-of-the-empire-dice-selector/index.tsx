/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import BoostDie from "../../classes/edge-of-the-empire-dice/boost-die";
import SetbackDie from "../../classes/edge-of-the-empire-dice/setback-die";
import EdgeOfTheEmpireDiceCollection from "../../types/edge-of-the-empire-dice-collection";
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
	const [validated, setValidated] = useState<boolean>(false);
	const boostInput = useRef<HTMLInputElement>(null);
	const setbackInput = useRef<HTMLInputElement>(null);
	const abilityInput = useRef<HTMLInputElement>(null);
	const difficultyInput = useRef<HTMLInputElement>(null);
	const proficiencyInput = useRef<HTMLInputElement>(null);
	const challengeInput = useRef<HTMLInputElement>(null);
	const forceInput = useRef<HTMLInputElement>(null);

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

		const boost = boostInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < boost; rolls++) {
			dice.boost.push(new BoostDie());
		}
		const setback = setbackInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < setback; rolls++) {
			dice.setback.push(new SetbackDie());
		}
		const ability = abilityInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < ability; rolls++) {
			dice.ability.push(new AbilityDie());
		}
		const difficulty = difficultyInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < difficulty; rolls++) {
			dice.difficulty.push(new DifficultyDie());
		}
		const proficiency = proficiencyInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < proficiency; rolls++) {
			dice.proficiency.push(new ProficiencyDie());
		}
		const challenge = challengeInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < challenge; rolls++) {
			dice.challenge.push(new ChallengeDie());
		}
		const force = forceInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < force; rolls++) {
			dice.force.push(new ForceDie());
		}

		onRollClicked(dice);
	};

	const onSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>): void => {
			const form = e?.currentTarget;

			setValidated(false);
			e.preventDefault();
			e.stopPropagation();

			if (form.checkValidity() === false) {
				setValidated(true);
			}

			rollAllDice();
		},
		[],
	);

	const handleClearSelection = useCallback(() => {
		if (boostInput?.current) boostInput.current.value = "0";
		if (setbackInput?.current) setbackInput.current.value = "0";
		if (abilityInput?.current) abilityInput.current.value = "0";
		if (difficultyInput?.current) difficultyInput.current.value = "0";
		if (proficiencyInput?.current) proficiencyInput.current.value = "0";
		if (challengeInput?.current) challengeInput.current.value = "0";
		if (forceInput?.current) forceInput.current.value = "0";
	}, [
		boostInput,
		setbackInput,
		abilityInput,
		difficultyInput,
		proficiencyInput,
		challengeInput,
		forceInput,
	]);

	return (
		<Form
			noValidate
			validated={validated}
			onSubmit={onSubmit}
			className="edge-of-the-empire-dice-selector"
		>
			<div className="dice-options-container">
				<div className="dice-pair">
					<Form.Group className="dice-option">
						<Form.Label>🟦 Boost</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={boostInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>⬛️ Setback</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={setbackInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
				</div>
				<div className="dice-pair">
					<Form.Group className="dice-option">
						<Form.Label>🟩 Ability</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={abilityInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>🟪 Difficulty</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={difficultyInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
				</div>
				<div className="dice-pair">
					<Form.Group className="dice-option">
						<Form.Label>🟨 Proficiency</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={proficiencyInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>🟥 Challenge</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={challengeInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
				</div>
				<div className="dice-pair force-dice">
					<Form.Group className="dice-option">
						<Form.Label>⬜️ Force</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={forceInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
				</div>
			</div>
			<div className="button-container">
				<Button type="submit">Roll</Button>
				<Button variant="outline-danger" onClick={handleClearSelection}>
					Clear
				</Button>
			</div>
		</Form>
	);
};
