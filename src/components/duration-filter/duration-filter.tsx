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

import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
	NumberBasedFilterSetModel,
} from "../../utility/filters/number-based-filter";
import { AgGridFilterProps } from "../../types/ag-grid-filter-props";

import "./duration-filter.css";
import {
	Duration,
	mapNumberToDurationDisplayName,
} from "../../enums/durations";

const filterDisabledArray = createDisabledFilterArray(15);

export default forwardRef(function LevelFilter(
	props: AgGridFilterProps,
	ref,
): ReactElement {
	const [selectedDurations, setSelectedDurations] =
		useState<number[]>(filterDisabledArray);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedDurations]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: NumberBasedFilterProps) {
				return numberBasedFilterDoesFilterPass(
					props?.data?.duration,
					selectedDurations,
				);
			},

			isFilterActive() {
				return numberBasedFilterIsFilterActive(
					selectedDurations.length,
					filterDisabledArray.length,
				);
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return { value: selectedDurations };
			},

			setModel(model: NumberBasedFilterSetModel) {
				setSelectedDurations(model?.value ?? []);
			},
		};
	});

	const handleCheck = (x: number): void =>
		numberBasedFilterHandleCheck(
			selectedDurations,
			setSelectedDurations,
			x,
		);

	const isChecked = (x: number): boolean | undefined =>
		numberBasedFilterIsChecked(selectedDurations, x);

	return (
		<div className="level-filter">
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.Instantaneous)}
				label={mapNumberToDurationDisplayName(Duration.Instantaneous)}
				checked={isChecked(Duration.Instantaneous)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.OneRound)}
				label={mapNumberToDurationDisplayName(Duration.OneRound)}
				checked={isChecked(Duration.OneRound)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.OneMinute)}
				label={mapNumberToDurationDisplayName(Duration.OneMinute)}
				checked={isChecked(Duration.OneMinute)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.SixRounds)}
				label={mapNumberToDurationDisplayName(Duration.SixRounds)}
				checked={isChecked(Duration.SixRounds)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.TenMinutes)}
				label={mapNumberToDurationDisplayName(Duration.TenMinutes)}
				checked={isChecked(Duration.TenMinutes)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.OneHour)}
				label={mapNumberToDurationDisplayName(Duration.OneHour)}
				checked={isChecked(Duration.OneHour)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.TwoHours)}
				label={mapNumberToDurationDisplayName(Duration.TwoHours)}
				checked={isChecked(Duration.TwoHours)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.EightHours)}
				label={mapNumberToDurationDisplayName(Duration.EightHours)}
				checked={isChecked(Duration.EightHours)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.OneDay)}
				label={mapNumberToDurationDisplayName(Duration.OneDay)}
				checked={isChecked(Duration.OneDay)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.SevenDays)}
				label={mapNumberToDurationDisplayName(Duration.SevenDays)}
				checked={isChecked(Duration.SevenDays)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.TenDays)}
				label={mapNumberToDurationDisplayName(Duration.TenDays)}
				checked={isChecked(Duration.TenDays)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.ThirtyDays)}
				label={mapNumberToDurationDisplayName(Duration.ThirtyDays)}
				checked={isChecked(Duration.ThirtyDays)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.Special)}
				label={mapNumberToDurationDisplayName(Duration.Special)}
				checked={isChecked(Duration.Special)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.UntilDispelled)}
				label={mapNumberToDurationDisplayName(Duration.UntilDispelled)}
				checked={isChecked(Duration.UntilDispelled)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Duration.UntilDispelledOrTriggered)}
				label={mapNumberToDurationDisplayName(
					Duration.UntilDispelledOrTriggered,
				)}
				checked={isChecked(Duration.UntilDispelledOrTriggered)}
			/>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedDurations(filterDisabledArray)}
			>
				All
			</Button>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedDurations([])}
			>
				None
			</Button>
		</div>
	);
});
