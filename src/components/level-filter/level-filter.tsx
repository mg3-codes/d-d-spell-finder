/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, {
	forwardRef,
	ReactElement,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import { RowNode } from "ag-grid-community";
import Form from "react-bootstrap/Form";
import Spell from "../../types/spell";

import "./level-filter.css";
import { Button } from "react-bootstrap";

type FilterProps = {
	data: Spell;
	node: RowNode;
};

export default forwardRef(function LevelFilter(props: any, ref): ReactElement {
	const filterDisabledArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	const [selectedLevels, setSelectedLevels] =
		useState<number[]>(filterDisabledArray);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedLevels]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: FilterProps) {
				return (
					selectedLevels.find(
						(value) => value === props?.data?.level,
					) !== undefined
				);
			},

			isFilterActive() {
				return selectedLevels.length !== filterDisabledArray.length;
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return { value: selectedLevels };
			},

			setModel(model: any) {
				setSelectedLevels(model?.value ?? []);
			},
		};
	});

	const handleCheck = (x: number): void => {
		if (selectedLevels.find((value) => x === value) === undefined)
			setSelectedLevels([...selectedLevels, x]);
		else setSelectedLevels(selectedLevels.filter((value) => value !== x));
	};

	const isChecked = (x: number): boolean | undefined => {
		if (selectedLevels.find((value) => value === x) !== undefined)
			return true;

		return false;
	};

	return (
		<div className="level-filter">
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(0)}
				label={"0"}
				checked={isChecked(0)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(1)}
				label={"1"}
				checked={isChecked(1)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(2)}
				label={"2"}
				checked={isChecked(2)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(3)}
				label={"3"}
				checked={isChecked(3)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(4)}
				label={"4"}
				checked={isChecked(4)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(5)}
				label={"5"}
				checked={isChecked(5)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(6)}
				label={"6"}
				checked={isChecked(6)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(7)}
				label={"7"}
				checked={isChecked(7)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(8)}
				label={"8"}
				checked={isChecked(8)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(9)}
				label={"9"}
				checked={isChecked(9)}
			/>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedLevels(filterDisabledArray)}
			>
				All
			</Button>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedLevels([])}
			>
				None
			</Button>
		</div>
	);
});
