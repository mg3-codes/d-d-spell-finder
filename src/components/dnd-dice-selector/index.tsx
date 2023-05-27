/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import NumberDie from "../../classes/number-die";

import "./dnd-dice-selector.scss";

export interface IDndDiceSelectorProps {
	onRollClicked: (dice: NumberDie[]) => void;
}

export const DndDiceSelector = ({
	onRollClicked,
}: IDndDiceSelectorProps): JSX.Element => {
	const [validated, setValidated] = useState<boolean>(false);
	const twoSidedInput = useRef<HTMLInputElement>(null);
	const fourSidedInput = useRef<HTMLInputElement>(null);
	const sixSidedInput = useRef<HTMLInputElement>(null);
	const eightSidedInput = useRef<HTMLInputElement>(null);
	const tenSidedInput = useRef<HTMLInputElement>(null);
	const twelveSidedInput = useRef<HTMLInputElement>(null);
	const twentySidedInput = useRef<HTMLInputElement>(null);
	const oneHundredSidedInput = useRef<HTMLInputElement>(null);

	const rollAllDice = (): void => {
		const dice: NumberDie[] = [];

		const twoSided = twoSidedInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < twoSided; rolls++) {
			dice.push(new NumberDie(2));
		}
		const fourSided = fourSidedInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < fourSided; rolls++) {
			dice.push(new NumberDie(4));
		}
		const sixSided = sixSidedInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < sixSided; rolls++) {
			dice.push(new NumberDie(6));
		}
		const eightSided = eightSidedInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < eightSided; rolls++) {
			dice.push(new NumberDie(8));
		}
		const tenSided = tenSidedInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < tenSided; rolls++) {
			dice.push(new NumberDie(10));
		}
		const twelveSided = twelveSidedInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < twelveSided; rolls++) {
			dice.push(new NumberDie(12));
		}
		const twentySided = twentySidedInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < twentySided; rolls++) {
			dice.push(new NumberDie(20));
		}
		const oneHundredSided =
			oneHundredSidedInput.current?.valueAsNumber ?? 0;
		for (let rolls = 0; rolls < oneHundredSided; rolls++) {
			dice.push(new NumberDie(100));
		}

		onRollClicked(dice);
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		const form = e?.currentTarget;

		setValidated(false);
		e.preventDefault();
		e.stopPropagation();

		if (form.checkValidity() === false) {
			setValidated(true);
		}

		rollAllDice();
	};

	const handleClearSelection = () => {
		if (twoSidedInput?.current) twoSidedInput.current.value = "0";
		if (fourSidedInput?.current) fourSidedInput.current.value = "0";
		if (sixSidedInput?.current) sixSidedInput.current.value = "0";
		if (eightSidedInput?.current) eightSidedInput.current.value = "0";
		if (tenSidedInput?.current) tenSidedInput.current.value = "0";
		if (twelveSidedInput?.current) twelveSidedInput.current.value = "0";
		if (twentySidedInput?.current) twentySidedInput.current.value = "0";
		if (oneHundredSidedInput?.current)
			oneHundredSidedInput.current.value = "0";
	};

	return (
		<Form
			noValidate
			validated={validated}
			onSubmit={onSubmit}
			className="dnd-dice-selector"
		>
			<div className="dice-options-container">
				<div className="dice-option-column">
					<Form.Group className="dice-option">
						<Form.Label>2 Sides</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={twoSidedInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>4 Sides</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={fourSidedInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>6 Sides</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={sixSidedInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>8 Sides</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={eightSidedInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
				</div>
				<div className="dice-option-column">
					<Form.Group className="dice-option">
						<Form.Label>10 Sides</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={tenSidedInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>12 Sides</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={twelveSidedInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>20 Sides</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={twentySidedInput}
						/>
						<Form.Control.Feedback type="invalid">
							Please enter a non-negative number
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>100 Sides</Form.Label>
						<Form.Control
							type="number"
							min={0}
							defaultValue={0}
							ref={oneHundredSidedInput}
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
