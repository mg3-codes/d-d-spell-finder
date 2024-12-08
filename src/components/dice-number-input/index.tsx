/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type React from "react";
import { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./styles.css";

export interface IDiceNumberInputProps {
	value: string;
	updateValue: (value: string) => void;
	handleIncreaseClick: () => void;
	handleDecreaseClick: () => void;
}

export const DiceNumberInput = ({
	value,
	updateValue,
	handleIncreaseClick,
	handleDecreaseClick,
}: IDiceNumberInputProps) => {
	const [showError, setShowError] = useState<boolean>(false);
	const [decreaseIsDisabled, setDecreaseIsDisabled] = useState<boolean>(true);

	const inputIsValid = useCallback((): boolean => {
		const valueAsNumber = Number.parseInt(value);

		if (valueAsNumber < 0) return false;

		return !Number.isNaN(valueAsNumber);
	}, [value]);

	useEffect(() => {
		if (!inputIsValid()) setShowError(true);
		else setShowError(false);

		const valueAsNumber = Number.parseInt(value);
		setDecreaseIsDisabled(Number.isNaN(valueAsNumber) || valueAsNumber <= 0);
	}, [value, inputIsValid]);

	// biome-ignore lint/correctness/useExhaustiveDependencies(value): function needs to update on value change
	const handleUpdateValue = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			updateValue(e.target.value);
		},
		[value, updateValue],
	);

	const handleBlur = useCallback(() => {
		if (value === "") updateValue("0");
	}, [value, updateValue]);

	return (
		<InputGroup className="dice-number-input">
			<Button
				variant="outline-primary"
				onClick={handleDecreaseClick}
				disabled={showError || decreaseIsDisabled}
			>
				-
			</Button>
			<Form.Control
				value={value}
				onChange={handleUpdateValue}
				onBlur={handleBlur}
				isInvalid={showError}
				inputMode="numeric"
				min={0}
			/>
			<Button
				variant="outline-primary"
				onClick={handleIncreaseClick}
				disabled={showError}
			>
				+
			</Button>
		</InputGroup>
	);
};
