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
import { Button } from "react-bootstrap";

import Spell from "../../types/spell";
import {
	CastingTime,
	mapNumberToCastingTimeName,
} from "../../enums/casting-times";

import "./casting-time-filter.css";

type FilterProps = {
	data: Spell;
	node: RowNode;
};

export default forwardRef(function CastingTimeFilter(
	props: any,
	ref,
): ReactElement {
	const filterDisabledArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	const [selectedCastingTimes, setSelectedCastingTimes] =
		useState<number[]>(filterDisabledArray);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedCastingTimes]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: FilterProps) {
				return (
					selectedCastingTimes.find(
						(value) =>
							mapNumberToCastingTimeName(value) ===
							props?.data?.castingTime,
					) !== undefined
				);
			},

			isFilterActive() {
				return (
					selectedCastingTimes.length !== filterDisabledArray.length
				);
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return { value: selectedCastingTimes };
			},

			setModel(model: any) {
				setSelectedCastingTimes(model?.value ?? []);
			},
		};
	});

	const handleCheck = (x: CastingTime): void => {
		if (selectedCastingTimes.find((value) => x === value) === undefined)
			setSelectedCastingTimes([...selectedCastingTimes, x]);
		else
			setSelectedCastingTimes(
				selectedCastingTimes.filter((value) => value !== x),
			);
	};

	const isChecked = (x: number): boolean | undefined => {
		if (selectedCastingTimes.find((value) => value === x) !== undefined)
			return true;

		return false;
	};

	return (
		<div className="casting-time-filter">
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.Action)}
				label={mapNumberToCastingTimeName(CastingTime.Action)}
				checked={isChecked(CastingTime.Action)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.BonusAction)}
				label={mapNumberToCastingTimeName(CastingTime.BonusAction)}
				checked={isChecked(CastingTime.BonusAction)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.Reaction)}
				label={mapNumberToCastingTimeName(CastingTime.Reaction)}
				checked={isChecked(CastingTime.Reaction)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.OneMinute)}
				label={mapNumberToCastingTimeName(CastingTime.OneMinute)}
				checked={isChecked(CastingTime.OneMinute)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.TenMinutes)}
				label={mapNumberToCastingTimeName(CastingTime.TenMinutes)}
				checked={isChecked(CastingTime.TenMinutes)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.OneHour)}
				label={mapNumberToCastingTimeName(CastingTime.OneHour)}
				checked={isChecked(CastingTime.OneHour)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.EightHours)}
				label={mapNumberToCastingTimeName(CastingTime.EightHours)}
				checked={isChecked(CastingTime.EightHours)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.TwelveHours)}
				label={mapNumberToCastingTimeName(CastingTime.TwelveHours)}
				checked={isChecked(CastingTime.TwelveHours)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.TwentyFourHours)}
				label={mapNumberToCastingTimeName(CastingTime.TwentyFourHours)}
				checked={isChecked(CastingTime.TwentyFourHours)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(CastingTime.Special)}
				label={mapNumberToCastingTimeName(CastingTime.Special)}
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
