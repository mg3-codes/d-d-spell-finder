/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import {
	type CustomFilterProps,
	useGridFilter,
} from "@ag-grid-community/react";
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

import {
	type NumberBasedFilterProps,
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
} from "../../../utility/filters/number-based-filter";
import {
	Duration,
	mapNumberToDurationDisplayName,
} from "../../../enums/durations";

import "./styles.css";

const filterDisabledArray = createDisabledFilterArray(15);

const DurationFilter = ({ onModelChange }: CustomFilterProps): ReactElement => {
	const [selectedDurations, setSelectedDurations] =
		useState<number[]>(filterDisabledArray);
	const rollbar = useRollbar();

	useEffect(() => {
		if (selectedDurations.length === filterDisabledArray.length)
			onModelChange(null);
		else onModelChange(selectedDurations);
	}, [selectedDurations, onModelChange]);

	const doesFilterPass = (props: NumberBasedFilterProps) => {
		return numberBasedFilterDoesFilterPass(
			props?.data?.duration,
			selectedDurations,
		);
	};

	useGridFilter({ doesFilterPass });

	const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
		(e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>): void => {
			const duration = e.target.getAttribute("data-duration");

			if (!duration) {
				rollbar.warning("duration is null", e);
				return;
			}

			numberBasedFilterHandleCheck(
				selectedDurations,
				setSelectedDurations,
				duration,
			);
		},
		[selectedDurations, rollbar],
	);

	const selectAllDurations = useCallback(
		() => setSelectedDurations(filterDisabledArray),
		[],
	);

	const selectNoDurations = useCallback(() => setSelectedDurations([]), []);

	const isChecked = (x: number): boolean | undefined =>
		numberBasedFilterIsChecked(selectedDurations, x);

	return (
		<div className="duration-filter">
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.Instantaneous)}
				checked={isChecked(Duration.Instantaneous)}
				data-duration={Duration.Instantaneous}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.OneRound)}
				checked={isChecked(Duration.OneRound)}
				data-duration={Duration.OneRound}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.OneMinute)}
				checked={isChecked(Duration.OneMinute)}
				data-duration={Duration.OneMinute}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.SixRounds)}
				checked={isChecked(Duration.SixRounds)}
				data-duration={Duration.SixRounds}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.TenMinutes)}
				checked={isChecked(Duration.TenMinutes)}
				data-duration={Duration.TenMinutes}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.OneHour)}
				checked={isChecked(Duration.OneHour)}
				data-duration={Duration.OneHour}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.TwoHours)}
				checked={isChecked(Duration.TwoHours)}
				data-duration={Duration.TwoHours}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.EightHours)}
				checked={isChecked(Duration.EightHours)}
				data-duration={Duration.EightHours}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.OneDay)}
				checked={isChecked(Duration.OneDay)}
				data-duration={Duration.OneDay}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.SevenDays)}
				checked={isChecked(Duration.SevenDays)}
				data-duration={Duration.SevenDays}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.TenDays)}
				checked={isChecked(Duration.TenDays)}
				data-duration={Duration.TenDays}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.ThirtyDays)}
				checked={isChecked(Duration.ThirtyDays)}
				data-duration={Duration.ThirtyDays}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.Special)}
				checked={isChecked(Duration.Special)}
				data-duration={Duration.Special}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(Duration.UntilDispelled)}
				checked={isChecked(Duration.UntilDispelled)}
				data-duration={Duration.UntilDispelled}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDurationDisplayName(
					Duration.UntilDispelledOrTriggered,
				)}
				checked={isChecked(Duration.UntilDispelledOrTriggered)}
				data-duration={Duration.UntilDispelledOrTriggered}
			/>
			<Button
				className="all-button"
				variant="outline-primary"
				onClick={selectAllDurations}
			>
				All
			</Button>
			<Button variant="outline-primary" onClick={selectNoDurations}>
				None
			</Button>
		</div>
	);
};

DurationFilter.displayName = "DurationFilter";

export default DurationFilter;
