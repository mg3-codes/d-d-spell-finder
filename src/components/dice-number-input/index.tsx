/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./dice-number-input.scss";

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

	const inputIsValid = (): boolean => {
		const valueAsNumber = parseInt(value);

		if (Number.isNaN(valueAsNumber)) return false;
		if (valueAsNumber < 0) return false;

		return true;
	};

	useEffect(() => {
		if (!inputIsValid()) setShowError(true);
		else setShowError(false);
	}, [value]);

	const decreaseButtonIsDisabled = useCallback((): boolean => {
		if (showError) return true;

		const valueAsNumber = parseInt(value);
		if (Number.isNaN(valueAsNumber) || valueAsNumber <= 0) return true;

		return false;
	}, [value]);

	const handleBlur = useCallback(() => {
		if (value === "") updateValue("0");
	}, [value]);

	return (
		<InputGroup className="dice-number-input">
			<Button
				variant="outline-primary"
				onClick={handleDecreaseClick}
				disabled={decreaseButtonIsDisabled()}
			>
				-
			</Button>
			<Form.Control
				value={value}
				onChange={(e) => updateValue(e.target.value)}
				onBlur={handleBlur}
				isInvalid={showError}
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