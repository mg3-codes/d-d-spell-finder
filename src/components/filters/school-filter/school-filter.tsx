/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import {
	type CustomFilterProps,
	useGridFilter,
} from "ag-grid-react";
import { useRollbar } from "@rollbar/react";
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

import { School, mapNumberToSchoolDisplayName } from "../../../enums/schools";
import {
	type NumberBasedFilterProps,
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
} from "../../../utility/filters/number-based-filter";

import "./styles.css";

const filterDisabledArray = createDisabledFilterArray(8);

const SchoolFilter = ({ onModelChange }: CustomFilterProps): ReactElement => {
	const [selectedSchools, setSelectedSchools] =
		useState<number[]>(filterDisabledArray);
	const rollbar = useRollbar();

	useEffect(() => {
		if (selectedSchools.length === filterDisabledArray.length)
			onModelChange(null);
		else onModelChange(selectedSchools);
	}, [selectedSchools, onModelChange]);

	const doesFilterPass = (props: NumberBasedFilterProps) => {
		return numberBasedFilterDoesFilterPass(
			props?.data?.school,
			selectedSchools,
		);
	};

	useGridFilter({ doesFilterPass });

	const selectAllSchools = useCallback(
		() => setSelectedSchools(filterDisabledArray),
		[],
	);

	const selectNoSchools = useCallback(() => setSelectedSchools([]), []);

	const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
		(e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>): void => {
			const school = e.target.getAttribute("data-school");

			if (!school) {
				rollbar.warning("school was null", e);
				return;
			}

			numberBasedFilterHandleCheck(selectedSchools, setSelectedSchools, school);
		},
		[selectedSchools, rollbar],
	);

	const isChecked = (x: number): boolean | undefined =>
		numberBasedFilterIsChecked(selectedSchools, x);

	return (
		<div className="school-filter">
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSchoolDisplayName(School.Abjuration)}
				checked={isChecked(School.Abjuration)}
				data-school={School.Abjuration}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSchoolDisplayName(School.Conjuration)}
				checked={isChecked(School.Conjuration)}
				data-school={School.Conjuration}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSchoolDisplayName(School.Divination)}
				checked={isChecked(School.Divination)}
				data-school={School.Divination}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSchoolDisplayName(School.Enchantment)}
				checked={isChecked(School.Enchantment)}
				data-school={School.Enchantment}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSchoolDisplayName(School.Evocation)}
				checked={isChecked(School.Evocation)}
				data-school={School.Evocation}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSchoolDisplayName(School.Illusion)}
				checked={isChecked(School.Illusion)}
				data-school={School.Illusion}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSchoolDisplayName(School.Necromancy)}
				checked={isChecked(School.Necromancy)}
				data-school={School.Necromancy}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSchoolDisplayName(School.Transmutation)}
				checked={isChecked(School.Transmutation)}
				data-school={School.Transmutation}
			/>
			<Button
				className="all-button"
				variant="outline-primary"
				onClick={selectAllSchools}
			>
				All
			</Button>
			<Button variant="outline-primary" onClick={selectNoSchools}>
				None
			</Button>
		</div>
	);
};

SchoolFilter.displayName = "SchoolFilter";

export default SchoolFilter;
