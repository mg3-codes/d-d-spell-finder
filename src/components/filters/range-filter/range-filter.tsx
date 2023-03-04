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

import { mapNumberToRangeDisplayName, Range } from "../../../enums/ranges";
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

import "./range-filter.scss";

const filterDisabledArray = createDisabledFilterArray(25);

const RangeFilter = forwardRef(
	(props: AgGridFilterProps, ref): ReactElement => {
		const [selectedRanges, setSelectedRanges] =
			useState<number[]>(filterDisabledArray);

		useEffect(() => {
			props.filterChangedCallback();
		}, [selectedRanges]);

		useImperativeHandle(ref, () => {
			return {
				doesFilterPass(props: NumberBasedFilterProps) {
					return numberBasedFilterDoesFilterPass(
						props?.data?.range,
						selectedRanges,
					);
				},

				isFilterActive() {
					return numberBasedFilterIsFilterActive(
						selectedRanges.length,
						filterDisabledArray.length,
					);
				},

				getModel() {
					if (!this.isFilterActive()) {
						return null;
					}

					return { value: selectedRanges };
				},

				setModel(model: NumberBasedFilterSetModel) {
					setSelectedRanges(model?.value ?? []);
				},
			};
		});

		const handleCheck = (x: Range): void =>
			numberBasedFilterHandleCheck(selectedRanges, setSelectedRanges, x);

		const isChecked = (x: number): boolean | undefined =>
			numberBasedFilterIsChecked(selectedRanges, x);

		return (
			<div className="school-filter">
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.Self)}
					label={mapNumberToRangeDisplayName(Range.Self)}
					checked={isChecked(Range.Self)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.SelfByFive)}
					label={mapNumberToRangeDisplayName(Range.SelfByFive)}
					checked={isChecked(Range.SelfByFive)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.SelfByFifteen)}
					label={mapNumberToRangeDisplayName(Range.SelfByFifteen)}
					checked={isChecked(Range.SelfByFifteen)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.SelfByThirty)}
					label={mapNumberToRangeDisplayName(Range.SelfByThirty)}
					checked={isChecked(Range.SelfByThirty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.SelfBySixty)}
					label={mapNumberToRangeDisplayName(Range.SelfBySixty)}
					checked={isChecked(Range.SelfBySixty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.Touch)}
					label={mapNumberToRangeDisplayName(Range.Touch)}
					checked={isChecked(Range.Touch)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.TouchBySixty)}
					label={mapNumberToRangeDisplayName(Range.TouchBySixty)}
					checked={isChecked(Range.TouchBySixty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.Five)}
					label={mapNumberToRangeDisplayName(Range.Five)}
					checked={isChecked(Range.Five)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.Ten)}
					label={mapNumberToRangeDisplayName(Range.Ten)}
					checked={isChecked(Range.Ten)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.Twenty)}
					label={mapNumberToRangeDisplayName(Range.Twenty)}
					checked={isChecked(Range.Twenty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.Thirty)}
					label={mapNumberToRangeDisplayName(Range.Thirty)}
					checked={isChecked(Range.Thirty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.Sixty)}
					label={mapNumberToRangeDisplayName(Range.Sixty)}
					checked={isChecked(Range.Sixty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.Ninety)}
					label={mapNumberToRangeDisplayName(Range.Ninety)}
					checked={isChecked(Range.Ninety)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.OneHundred)}
					label={mapNumberToRangeDisplayName(Range.OneHundred)}
					checked={isChecked(Range.OneHundred)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.OneHundredTwenty)}
					label={mapNumberToRangeDisplayName(Range.OneHundredTwenty)}
					checked={isChecked(Range.OneHundredTwenty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.OneHundredTwentyByTwenty)}
					label={mapNumberToRangeDisplayName(
						Range.OneHundredTwentyByTwenty,
					)}
					checked={isChecked(Range.OneHundredTwentyByTwenty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.OneHundredFifty)}
					label={mapNumberToRangeDisplayName(Range.OneHundredFifty)}
					checked={isChecked(Range.OneHundredFifty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.OneHundredFiftyBySixty)}
					label={mapNumberToRangeDisplayName(
						Range.OneHundredFiftyBySixty,
					)}
					checked={isChecked(Range.OneHundredFiftyBySixty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.Sight)}
					label={mapNumberToRangeDisplayName(Range.Sight)}
					checked={isChecked(Range.Sight)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.ThreeHundred)}
					label={mapNumberToRangeDisplayName(Range.ThreeHundred)}
					checked={isChecked(Range.ThreeHundred)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.FiveHundred)}
					label={mapNumberToRangeDisplayName(Range.FiveHundred)}
					checked={isChecked(Range.FiveHundred)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.OneThousand)}
					label={mapNumberToRangeDisplayName(Range.OneThousand)}
					checked={isChecked(Range.OneThousand)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.OneMile)}
					label={mapNumberToRangeDisplayName(Range.OneMile)}
					checked={isChecked(Range.OneMile)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.FiveHundredMiles)}
					label={mapNumberToRangeDisplayName(Range.FiveHundredMiles)}
					checked={isChecked(Range.FiveHundredMiles)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Range.Unlimited)}
					label={mapNumberToRangeDisplayName(Range.Unlimited)}
					checked={isChecked(Range.Unlimited)}
				/>
				<Button
					variant="outline-primary"
					onClick={() => setSelectedRanges(filterDisabledArray)}
				>
					All
				</Button>
				<Button
					variant="outline-primary"
					onClick={() => setSelectedRanges([])}
				>
					None
				</Button>
			</div>
		);
	},
);

RangeFilter.displayName = "RangeFilter";

export default RangeFilter;
