/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { type CustomFilterProps, useGridFilter } from "ag-grid-react";
import type React from "react";
import {
	type ChangeEventHandler,
	type ReactElement,
	useCallback,
	useEffect,
	useState,
} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	type NumberBasedFilterProps,
} from "../../../utility/filters/number-based-filter";

import "./styles.css";

const filterDisabledArray = createDisabledFilterArray(10);

const LevelFilter = ({ onModelChange }: CustomFilterProps): ReactElement => {
	const [selectedLevels, setSelectedLevels] =
		useState<number[]>(filterDisabledArray);

	useEffect(() => {
		if (selectedLevels.length === filterDisabledArray.length)
			onModelChange(null);
		else onModelChange(selectedLevels);
	}, [selectedLevels, onModelChange]);

	const doesFilterPass = (props: NumberBasedFilterProps) => {
		return numberBasedFilterDoesFilterPass(props?.data?.level, selectedLevels);
	};

	useGridFilter({ doesFilterPass });

	const selectAllLevels = useCallback(
		() => setSelectedLevels(filterDisabledArray),
		[],
	);

	const selectNoLevels = useCallback(() => setSelectedLevels([]), []);

	const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
		(e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>): void => {
			const numberAsString = e.target.getAttribute("data-level");

			if (!numberAsString) {
				return;
			}

			const level = Number.parseInt(numberAsString, 10);
			numberBasedFilterHandleCheck(
				selectedLevels,
				setSelectedLevels,
				level.toString(),
			);
		},
		[selectedLevels],
	);

	const isChecked = (x: number): boolean | undefined =>
		numberBasedFilterIsChecked(selectedLevels, x);

	return (
		<div className="level-filter">
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={"0"}
				checked={isChecked(0)}
				data-level={0}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={"1"}
				checked={isChecked(1)}
				data-level={1}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={"2"}
				checked={isChecked(2)}
				data-level={2}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={"3"}
				checked={isChecked(3)}
				data-level={3}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={"4"}
				checked={isChecked(4)}
				data-level={4}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={"5"}
				checked={isChecked(5)}
				data-level={5}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={"6"}
				checked={isChecked(6)}
				data-level={6}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={"7"}
				checked={isChecked(7)}
				data-level={7}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={"8"}
				checked={isChecked(8)}
				data-level={8}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={"9"}
				checked={isChecked(9)}
				data-level={9}
			/>
			<Button
				className="all-button"
				variant="outline-primary"
				onClick={selectAllLevels}
			>
				All
			</Button>
			<Button variant="outline-primary" onClick={selectNoLevels}>
				None
			</Button>
		</div>
	);
};

LevelFilter.displayName = "LevelFilter";

export default LevelFilter;
