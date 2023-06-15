/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { DiceNumberInput } from "../dice-number-input";

import NumberDie from "../../classes/number-die";

import "./dnd-dice-selector.scss";

export interface IDndDiceSelectorProps {
	onRollClicked: (dice: NumberDie[]) => void;
}

export const DndDiceSelector = ({
	onRollClicked,
}: IDndDiceSelectorProps): JSX.Element => {
	const [twoSidedInputValue, setTwoSidedInputValue] = useState<string>("0");
	const [fourSidedInputValue, setFourSidedInputValue] = useState<string>("0");
	const [sixSidedInputValue, setSixSidedInputValue] = useState<string>("0");
	const [eightSidedInputValue, setEightSidedInputValue] =
		useState<string>("0");
	const [tenSidedInputValue, setTenSidedInputValue] = useState<string>("0");
	const [twelveSidedInputValue, setTwelveSidedInputValue] =
		useState<string>("0");
	const [twentySidedInputValue, setTwentySidedInputValue] =
		useState<string>("0");
	const [oneHundredSidedInputValue, setOneHundredSidedInputValue] =
		useState<string>("0");

	const rollAllDice = (): void => {
		const dice: NumberDie[] = [];

		const twoSided = parseInt(twoSidedInputValue);
		for (let rolls = 0; rolls < twoSided; rolls++) {
			dice.push(new NumberDie(2));
		}
		const fourSided = parseInt(fourSidedInputValue);
		for (let rolls = 0; rolls < fourSided; rolls++) {
			dice.push(new NumberDie(4));
		}
		const sixSided = parseInt(sixSidedInputValue);
		for (let rolls = 0; rolls < sixSided; rolls++) {
			dice.push(new NumberDie(6));
		}
		const eightSided = parseInt(eightSidedInputValue);
		for (let rolls = 0; rolls < eightSided; rolls++) {
			dice.push(new NumberDie(8));
		}
		const tenSided = parseInt(tenSidedInputValue);
		for (let rolls = 0; rolls < tenSided; rolls++) {
			dice.push(new NumberDie(10));
		}
		const twelveSided = parseInt(twelveSidedInputValue);
		for (let rolls = 0; rolls < twelveSided; rolls++) {
			dice.push(new NumberDie(12));
		}
		const twentySided = parseInt(twentySidedInputValue);
		for (let rolls = 0; rolls < twentySided; rolls++) {
			dice.push(new NumberDie(20));
		}
		const oneHundredSided = parseInt(oneHundredSidedInputValue);
		for (let rolls = 0; rolls < oneHundredSided; rolls++) {
			dice.push(new NumberDie(100));
		}

		onRollClicked(dice);
	};

	const handleClearSelection = useCallback(() => {
		setTwoSidedInputValue("0");
		setFourSidedInputValue("0");
		setSixSidedInputValue("0");
		setEightSidedInputValue("0");
		setTenSidedInputValue("0");
		setTwelveSidedInputValue("0");
		setTwentySidedInputValue("0");
		setOneHundredSidedInputValue("0");
	}, [
		twoSidedInputValue,
		fourSidedInputValue,
		sixSidedInputValue,
		eightSidedInputValue,
		tenSidedInputValue,
		twelveSidedInputValue,
		twentySidedInputValue,
		oneHundredSidedInputValue,
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
		<Form noValidate className="dnd-dice-selector">
			<div className="dice-options-container">
				<div className="dice-option-column">
					<Form.Group className="dice-option">
						<Form.Label>2 Sides</Form.Label>
						<DiceNumberInput
							value={twoSidedInputValue}
							updateValue={(x) => setTwoSidedInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									twoSidedInputValue,
									setTwoSidedInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									twoSidedInputValue,
									setTwoSidedInputValue,
								)
							}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>4 Sides</Form.Label>
						<DiceNumberInput
							value={fourSidedInputValue}
							updateValue={(x) => setFourSidedInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									fourSidedInputValue,
									setFourSidedInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									fourSidedInputValue,
									setFourSidedInputValue,
								)
							}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>6 Sides</Form.Label>
						<DiceNumberInput
							value={sixSidedInputValue}
							updateValue={(x) => setSixSidedInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									sixSidedInputValue,
									setSixSidedInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									sixSidedInputValue,
									setSixSidedInputValue,
								)
							}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>8 Sides</Form.Label>
						<DiceNumberInput
							value={eightSidedInputValue}
							updateValue={(x) => setEightSidedInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									eightSidedInputValue,
									setEightSidedInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									eightSidedInputValue,
									setEightSidedInputValue,
								)
							}
						/>
					</Form.Group>
				</div>
				<div className="dice-option-column">
					<Form.Group className="dice-option">
						<Form.Label>10 Sides</Form.Label>
						<DiceNumberInput
							value={tenSidedInputValue}
							updateValue={(x) => setTenSidedInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									tenSidedInputValue,
									setTenSidedInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									tenSidedInputValue,
									setTenSidedInputValue,
								)
							}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>12 Sides</Form.Label>
						<DiceNumberInput
							value={twelveSidedInputValue}
							updateValue={(x) => setTwelveSidedInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									twelveSidedInputValue,
									setTwelveSidedInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									twelveSidedInputValue,
									setTwelveSidedInputValue,
								)
							}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>20 Sides</Form.Label>
						<DiceNumberInput
							value={twentySidedInputValue}
							updateValue={(x) => setTwentySidedInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									twentySidedInputValue,
									setTwentySidedInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									twentySidedInputValue,
									setTwentySidedInputValue,
								)
							}
						/>
					</Form.Group>
					<Form.Group className="dice-option">
						<Form.Label>100 Sides</Form.Label>
						<DiceNumberInput
							value={oneHundredSidedInputValue}
							updateValue={(x) => setOneHundredSidedInputValue(x)}
							handleIncreaseClick={() =>
								handleIncrease(
									oneHundredSidedInputValue,
									setOneHundredSidedInputValue,
								)
							}
							handleDecreaseClick={() =>
								handleDecrease(
									oneHundredSidedInputValue,
									setOneHundredSidedInputValue,
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
