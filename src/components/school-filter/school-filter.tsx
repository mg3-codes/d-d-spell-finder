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

import "./school-filter.css";
import { Button } from "react-bootstrap";
import { mapNumberToSchoolName, School } from "../../enums/schools";

type FilterProps = {
	data: Spell;
	node: RowNode;
};

export default forwardRef(function SchoolFilter(props: any, ref): ReactElement {
	const filterDisabledArray = [0, 1, 2, 3, 4, 5, 6, 7];

	const [selectedSchools, setSelectedSchools] =
		useState<number[]>(filterDisabledArray);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedSchools]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: FilterProps) {
				return (
					selectedSchools.find(
						(value) =>
							mapNumberToSchoolName(value) ===
							props?.data?.school,
					) !== undefined
				);
			},

			isFilterActive() {
				return selectedSchools.length !== 10;
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return { value: selectedSchools };
			},

			setModel(model: any) {
				setSelectedSchools(model?.value ?? []);
			},
		};
	});

	const handleCheck = (x: School): void => {
		if (selectedSchools.find((value) => x === value) === undefined)
			setSelectedSchools([...selectedSchools, x]);
		else setSelectedSchools(selectedSchools.filter((value) => value !== x));
	};

	const isChecked = (x: number): boolean | undefined => {
		if (selectedSchools.find((value) => value === x) !== undefined)
			return true;

		return false;
	};

	return (
		<div className="school-filter">
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(School.Abjuration)}
				label={mapNumberToSchoolName(School.Abjuration)}
				checked={isChecked(School.Abjuration)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(School.Conjuration)}
				label={mapNumberToSchoolName(School.Conjuration)}
				checked={isChecked(School.Conjuration)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(School.Divination)}
				label={mapNumberToSchoolName(School.Divination)}
				checked={isChecked(School.Divination)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(School.Enchantment)}
				label={mapNumberToSchoolName(School.Enchantment)}
				checked={isChecked(School.Enchantment)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(School.Evocation)}
				label={mapNumberToSchoolName(School.Evocation)}
				checked={isChecked(School.Evocation)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(School.Illusion)}
				label={mapNumberToSchoolName(School.Illusion)}
				checked={isChecked(School.Illusion)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(School.Necromancy)}
				label={mapNumberToSchoolName(School.Necromancy)}
				checked={isChecked(School.Necromancy)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(School.Transmutation)}
				label={mapNumberToSchoolName(School.Transmutation)}
				checked={isChecked(School.Transmutation)}
			/>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedSchools(filterDisabledArray)}
			>
				All
			</Button>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedSchools([])}
			>
				None
			</Button>
		</div>
	);
});
