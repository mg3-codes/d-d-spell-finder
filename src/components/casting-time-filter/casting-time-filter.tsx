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
	CastingTime,
	mapNumberToCastingTimeDisplayName,
} from "../../enums/casting-times";
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

import "./casting-time-filter.css";

const filterDisabledArray = createDisabledFilterArray(10);

export default forwardRef(function CastingTimeFilter(
	props: AgGridFilterProps,
	ref,
): ReactElement {
	const [selectedCastingTimes, setSelectedCastingTimes] =
		useState<number[]>(filterDisabledArray);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedCastingTimes]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: NumberBasedFilterProps) {
				return numberBasedFilterDoesFilterPass(
					props?.data?.castingTime,
					selectedCastingTimes,
				);
			},

			isFilterActive() {
				return numberBasedFilterIsFilterActive(
					selectedCastingTimes.length,
					filterDisabledArray.length,
				);
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return { value: selectedCastingTimes };
			},

			setModel(model: NumberBasedFilterSetModel) {
				setSelectedCastingTimes(model?.value ?? []);
			},
		};
	});

	const handleCheck = (x: CastingTime): void =>
		numberBasedFilterHandleCheck(
			selectedCastingTimes,
			setSelectedCastingTimes,
			x,
		);

	const isChecked = (x: number): boolean | undefined =>
		numberBasedFilterIsChecked(selectedCastingTimes, x);

	return (
		<div className="casting-time-filter">
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.Action)}
				label={mapNumberToCastingTimeDisplayName(CastingTime.Action)}
				checked={isChecked(CastingTime.Action)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.BonusAction)}
				label={mapNumberToCastingTimeDisplayName(
					CastingTime.BonusAction,
				)}
				checked={isChecked(CastingTime.BonusAction)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.Reaction)}
				label={mapNumberToCastingTimeDisplayName(CastingTime.Reaction)}
				checked={isChecked(CastingTime.Reaction)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.OneMinute)}
				label={mapNumberToCastingTimeDisplayName(CastingTime.OneMinute)}
				checked={isChecked(CastingTime.OneMinute)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.TenMinutes)}
				label={mapNumberToCastingTimeDisplayName(
					CastingTime.TenMinutes,
				)}
				checked={isChecked(CastingTime.TenMinutes)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.OneHour)}
				label={mapNumberToCastingTimeDisplayName(CastingTime.OneHour)}
				checked={isChecked(CastingTime.OneHour)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.EightHours)}
				label={mapNumberToCastingTimeDisplayName(
					CastingTime.EightHours,
				)}
				checked={isChecked(CastingTime.EightHours)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.TwelveHours)}
				label={mapNumberToCastingTimeDisplayName(
					CastingTime.TwelveHours,
				)}
				checked={isChecked(CastingTime.TwelveHours)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.TwentyFourHours)}
				label={mapNumberToCastingTimeDisplayName(
					CastingTime.TwentyFourHours,
				)}
				checked={isChecked(CastingTime.TwentyFourHours)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.Special)}
				label={mapNumberToCastingTimeDisplayName(CastingTime.Special)}
				checked={isChecked(CastingTime.Special)}
			/>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedCastingTimes(filterDisabledArray)}
			>
				All
			</Button>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedCastingTimes([])}
			>
				None
			</Button>
		</div>
	);
});
