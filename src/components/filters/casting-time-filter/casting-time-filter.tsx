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
	CastingTime,
	mapNumberToCastingTimeDisplayName,
} from "../../../enums/casting-times";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	type NumberBasedFilterProps,
} from "../../../utility/filters/number-based-filter";

import "./styles.css";

const filterDisabledArray = createDisabledFilterArray(10);

const CastingTimeFilter = ({
	onModelChange,
}: CustomFilterProps): ReactElement => {
	const [selectedCastingTimes, setSelectedCastingTimes] =
		useState<number[]>(filterDisabledArray);

	useEffect(() => {
		if (selectedCastingTimes.length === filterDisabledArray.length)
			onModelChange(null);
		else onModelChange(selectedCastingTimes);
	}, [selectedCastingTimes, onModelChange]);

	const doesFilterPass = (props: NumberBasedFilterProps) => {
		return numberBasedFilterDoesFilterPass(
			props?.data?.castingTime,
			selectedCastingTimes,
		);
	};

	useGridFilter({ doesFilterPass });

	const selectAllCastingTimes = useCallback(
		() => setSelectedCastingTimes(filterDisabledArray),
		[],
	);

	const selectNoCastingTimes = useCallback(
		() => setSelectedCastingTimes([]),
		[],
	);

	const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
		(e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>): void => {
			const castingTime = e.target.getAttribute("data-casting-time");

			if (!castingTime) return;

			numberBasedFilterHandleCheck(
				selectedCastingTimes,
				setSelectedCastingTimes,
				castingTime,
			);
		},
		[selectedCastingTimes],
	);

	const isChecked = (x: number): boolean | undefined =>
		numberBasedFilterIsChecked(selectedCastingTimes, x);

	return (
		<div className="casting-time-filter">
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToCastingTimeDisplayName(CastingTime.Action)}
				checked={isChecked(CastingTime.Action)}
				data-casting-time={CastingTime.Action}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToCastingTimeDisplayName(CastingTime.BonusAction)}
				checked={isChecked(CastingTime.BonusAction)}
				data-casting-time={CastingTime.BonusAction}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToCastingTimeDisplayName(CastingTime.Reaction)}
				checked={isChecked(CastingTime.Reaction)}
				data-casting-time={CastingTime.Reaction}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToCastingTimeDisplayName(CastingTime.OneMinute)}
				checked={isChecked(CastingTime.OneMinute)}
				data-casting-time={CastingTime.OneMinute}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToCastingTimeDisplayName(CastingTime.TenMinutes)}
				checked={isChecked(CastingTime.TenMinutes)}
				data-casting-time={CastingTime.TenMinutes}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToCastingTimeDisplayName(CastingTime.OneHour)}
				checked={isChecked(CastingTime.OneHour)}
				data-casting-time={CastingTime.OneHour}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToCastingTimeDisplayName(CastingTime.EightHours)}
				checked={isChecked(CastingTime.EightHours)}
				data-casting-time={CastingTime.EightHours}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToCastingTimeDisplayName(CastingTime.TwelveHours)}
				checked={isChecked(CastingTime.TwelveHours)}
				data-casting-time={CastingTime.TwelveHours}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToCastingTimeDisplayName(CastingTime.TwentyFourHours)}
				checked={isChecked(CastingTime.TwentyFourHours)}
				data-casting-time={CastingTime.TwentyFourHours}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToCastingTimeDisplayName(CastingTime.Special)}
				checked={isChecked(CastingTime.Special)}
				data-casting-time={CastingTime.Special}
			/>
			<Button
				className="all-button"
				variant="outline-primary"
				onClick={selectAllCastingTimes}
			>
				All
			</Button>
			<Button variant="outline-primary" onClick={selectNoCastingTimes}>
				None
			</Button>
		</div>
	);
};

CastingTimeFilter.displayName = "CastingTimeFilter";

export default CastingTimeFilter;
