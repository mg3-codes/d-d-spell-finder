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

		return !Number.isNaN(valueAsNumber) || valueAsNumber < 0;
	};

	useEffect(() => {
		if (!inputIsValid()) setShowError(true);
		else setShowError(false);
	}, [value]);

	const handleUpdateValue = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			updateValue(e.target.value);
		},
		[],
	);

	const decreaseButtonIsDisabled = useCallback((): boolean => {
		if (showError) return true;

		const valueAsNumber = parseInt(value);

		return Number.isNaN(valueAsNumber) || valueAsNumber <= 0;
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
				onChange={handleUpdateValue}
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
