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
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { mapNumberToSchoolName, School } from "../../enums/schools";
import { AgGridFilterProps } from "../../types/ag-grid-filter-props";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
	NumberBasedFilterSetModel,
} from "../shared/number-based-filter/number-based-filter";

import "./school-filter.css";

const filterDisabledArray = createDisabledFilterArray(8);

export default forwardRef(function SchoolFilter(
	props: AgGridFilterProps,
	ref,
): ReactElement {
	const [selectedSchools, setSelectedSchools] =
		useState<number[]>(filterDisabledArray);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedSchools]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: NumberBasedFilterProps) {
				return numberBasedFilterDoesFilterPass(
					props?.data?.school,
					selectedSchools,
					mapNumberToSchoolName,
				);
			},

			isFilterActive() {
				return numberBasedFilterIsFilterActive(
					selectedSchools.length,
					filterDisabledArray.length,
				);
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return { value: selectedSchools };
			},

			setModel(model: NumberBasedFilterSetModel) {
				setSelectedSchools(model?.value ?? []);
			},
		};
	});

	const handleCheck = (x: School): void =>
		numberBasedFilterHandleCheck(selectedSchools, setSelectedSchools, x);

	const isChecked = (x: number): boolean | undefined =>
		numberBasedFilterIsChecked(selectedSchools, x);

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
