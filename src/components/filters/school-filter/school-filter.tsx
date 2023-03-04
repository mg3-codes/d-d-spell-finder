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

import { mapNumberToSchoolDisplayName, School } from "../../../enums/schools";
import { AgGridFilterProps } from "../../../types/ag-grid-filter-props";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
	NumberBasedFilterSetModel,
} from "../../../utility/filters/number-based-filter";

import "./school-filter.scss";

const filterDisabledArray = createDisabledFilterArray(8);

const SchoolFilter = forwardRef(
	(props: AgGridFilterProps, ref): ReactElement => {
		const [selectedSchools, setSelectedSchools] =
			useState<number[]>(filterDisabledArray);

		useEffect(() => {
			props.filterChangedCallback();
		}, [selectedSchools]);

		useImperativeHandle(ref, () => {
			const doesFilterPass = (props: NumberBasedFilterProps) => {
				return numberBasedFilterDoesFilterPass(
					props?.data?.school,
					selectedSchools,
				);
			};

			const isFilterActive = () => {
				return numberBasedFilterIsFilterActive(
					selectedSchools.length,
					filterDisabledArray.length,
				);
			};

			const getModel = () => {
				if (!isFilterActive()) {
					return null;
				}

				return { value: selectedSchools };
			};

			const setModel = (model: NumberBasedFilterSetModel) => {
				setSelectedSchools(model?.value ?? []);
			};

			return {
				doesFilterPass,
				isFilterActive,
				getModel,
				setModel,
			};
		});

		const handleCheck = (x: School): void =>
			numberBasedFilterHandleCheck(
				selectedSchools,
				setSelectedSchools,
				x,
			);

		const isChecked = (x: number): boolean | undefined =>
			numberBasedFilterIsChecked(selectedSchools, x);

		return (
			<div className="school-filter">
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(School.Abjuration)}
					label={mapNumberToSchoolDisplayName(School.Abjuration)}
					checked={isChecked(School.Abjuration)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(School.Conjuration)}
					label={mapNumberToSchoolDisplayName(School.Conjuration)}
					checked={isChecked(School.Conjuration)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(School.Divination)}
					label={mapNumberToSchoolDisplayName(School.Divination)}
					checked={isChecked(School.Divination)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(School.Enchantment)}
					label={mapNumberToSchoolDisplayName(School.Enchantment)}
					checked={isChecked(School.Enchantment)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(School.Evocation)}
					label={mapNumberToSchoolDisplayName(School.Evocation)}
					checked={isChecked(School.Evocation)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(School.Illusion)}
					label={mapNumberToSchoolDisplayName(School.Illusion)}
					checked={isChecked(School.Illusion)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(School.Necromancy)}
					label={mapNumberToSchoolDisplayName(School.Necromancy)}
					checked={isChecked(School.Necromancy)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(School.Transmutation)}
					label={mapNumberToSchoolDisplayName(School.Transmutation)}
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
	},
);

SchoolFilter.displayName = "SchoolFilter";

export default SchoolFilter;
