/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, {
	forwardRef,
	ReactElement,
	useCallback,
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

		const selectAllSchools = useCallback(
			() => setSelectedSchools(filterDisabledArray),
			[],
		);

		const selectNoSchools = useCallback(() => setSelectedSchools([]), []);

		const handleCheck = useCallback(
			(e: React.BaseSyntheticEvent): void => {
				const school = e.target.getAttribute("data-school");
				numberBasedFilterHandleCheck(
					selectedSchools,
					setSelectedSchools,
					school,
				);
			},
			[selectedSchools],
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
				<Button variant="outline-primary" onClick={selectAllSchools}>
					All
				</Button>
				<Button variant="outline-primary" onClick={selectNoSchools}>
					None
				</Button>
			</div>
		);
	},
);

SchoolFilter.displayName = "SchoolFilter";

export default SchoolFilter;
