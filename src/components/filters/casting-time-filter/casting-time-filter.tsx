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

import {
	CastingTime,
	mapNumberToCastingTimeDisplayName,
} from "../../../enums/casting-times";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
	NumberBasedFilterSetModel,
} from "../../../utility/filters/number-based-filter";
import { AgGridFilterProps } from "../../../types/ag-grid-filter-props";

import "./casting-time-filter.scss";

const filterDisabledArray = createDisabledFilterArray(10);

const CastingTimeFilter = forwardRef(
	(props: AgGridFilterProps, ref): ReactElement => {
		const [selectedCastingTimes, setSelectedCastingTimes] =
			useState<number[]>(filterDisabledArray);

		useEffect(() => {
			props.filterChangedCallback();
		}, [selectedCastingTimes]);

		useImperativeHandle(ref, () => {
			const doesFilterPass = (props: NumberBasedFilterProps) => {
				return numberBasedFilterDoesFilterPass(
					props?.data?.castingTime,
					selectedCastingTimes,
				);
			};

			const isFilterActive = () => {
				return numberBasedFilterIsFilterActive(
					selectedCastingTimes.length,
					filterDisabledArray.length,
				);
			};

			const getModel = () => {
				if (!isFilterActive()) {
					return null;
				}

				return { value: selectedCastingTimes };
			};

			const setModel = (model: NumberBasedFilterSetModel) => {
				setSelectedCastingTimes(model?.value ?? []);
			};

			return { doesFilterPass, isFilterActive, getModel, setModel };
		});

		const selectAllCastingTimes = useCallback(
			() => setSelectedCastingTimes(filterDisabledArray),
			[],
		);

		const selectNoCastingTimes = useCallback(
			() => setSelectedCastingTimes([]),
			[],
		);

		const handleCheck = useCallback(
			(e: React.BaseSyntheticEvent): void => {
				const castingTime = e.target.getAttribute("data-casting-time");
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
					label={mapNumberToCastingTimeDisplayName(
						CastingTime.Action,
					)}
					checked={isChecked(CastingTime.Action)}
					data-casting-time={CastingTime.Action}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToCastingTimeDisplayName(
						CastingTime.BonusAction,
					)}
					checked={isChecked(CastingTime.BonusAction)}
					data-casting-time={CastingTime.BonusAction}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToCastingTimeDisplayName(
						CastingTime.Reaction,
					)}
					checked={isChecked(CastingTime.Reaction)}
					data-casting-time={CastingTime.Reaction}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToCastingTimeDisplayName(
						CastingTime.OneMinute,
					)}
					checked={isChecked(CastingTime.OneMinute)}
					data-casting-time={CastingTime.OneMinute}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToCastingTimeDisplayName(
						CastingTime.TenMinutes,
					)}
					checked={isChecked(CastingTime.TenMinutes)}
					data-casting-time={CastingTime.TenMinutes}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToCastingTimeDisplayName(
						CastingTime.OneHour,
					)}
					checked={isChecked(CastingTime.OneHour)}
					data-casting-time={CastingTime.OneHour}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToCastingTimeDisplayName(
						CastingTime.EightHours,
					)}
					checked={isChecked(CastingTime.EightHours)}
					data-casting-time={CastingTime.EightHours}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToCastingTimeDisplayName(
						CastingTime.TwelveHours,
					)}
					checked={isChecked(CastingTime.TwelveHours)}
					data-casting-time={CastingTime.TwelveHours}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToCastingTimeDisplayName(
						CastingTime.TwentyFourHours,
					)}
					checked={isChecked(CastingTime.TwentyFourHours)}
					data-casting-time={CastingTime.TwentyFourHours}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToCastingTimeDisplayName(
						CastingTime.Special,
					)}
					checked={isChecked(CastingTime.Special)}
					data-casting-time={CastingTime.Special}
				/>
				<Button
					variant="outline-primary"
					onClick={selectAllCastingTimes}
				>
					All
				</Button>
				<Button
					variant="outline-primary"
					onClick={selectNoCastingTimes}
				>
					None
				</Button>
			</div>
		);
	},
);

CastingTimeFilter.displayName = "CastingTimeFilter";

export default CastingTimeFilter;
