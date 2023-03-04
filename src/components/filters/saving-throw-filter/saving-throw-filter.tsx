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
	mapNumberToSavingThrowDisplayName,
	SavingThrow,
} from "../../../enums/saving-throws";
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

import "./saving-throw-filter.scss";

const savingThrowFilterDisabledArray = createDisabledFilterArray(7);

const SavingThrowFilter = forwardRef(
	(props: AgGridFilterProps, ref): ReactElement => {
		const [selectedSavingThrows, setSelectedSavingThrows] = useState<
			number[]
		>(savingThrowFilterDisabledArray);

		useEffect(() => {
			props.filterChangedCallback();
		}, [selectedSavingThrows]);

		useImperativeHandle(ref, () => {
			return {
				doesFilterPass(props: NumberBasedFilterProps) {
					return numberBasedFilterDoesFilterPass(
						props?.data?.save,
						selectedSavingThrows,
					);
				},

				isFilterActive() {
					return numberBasedFilterIsFilterActive(
						selectedSavingThrows.length,
						savingThrowFilterDisabledArray.length,
					);
				},

				getModel() {
					if (!this.isFilterActive()) {
						return null;
					}

					return {
						value: selectedSavingThrows,
					};
				},

				setModel(model: NumberBasedFilterSetModel) {
					setSelectedSavingThrows(model?.value ?? []);
				},
			};
		});

		const handleCheck = (x: SavingThrow): void =>
			numberBasedFilterHandleCheck(
				selectedSavingThrows,
				setSelectedSavingThrows,
				x,
			);

		const isChecked = (x: SavingThrow): boolean | undefined =>
			numberBasedFilterIsChecked(selectedSavingThrows, x);

		return (
			<div className="saving-throw-filter">
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(SavingThrow.None)}
					label={mapNumberToSavingThrowDisplayName(SavingThrow.None)}
					checked={isChecked(SavingThrow.None)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(SavingThrow.Charisma)}
					label={mapNumberToSavingThrowDisplayName(
						SavingThrow.Charisma,
					)}
					checked={isChecked(SavingThrow.Charisma)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(SavingThrow.Constitution)}
					label={mapNumberToSavingThrowDisplayName(
						SavingThrow.Constitution,
					)}
					checked={isChecked(SavingThrow.Constitution)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(SavingThrow.Dexterity)}
					label={mapNumberToSavingThrowDisplayName(
						SavingThrow.Dexterity,
					)}
					checked={isChecked(SavingThrow.Dexterity)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(SavingThrow.Intelligence)}
					label={mapNumberToSavingThrowDisplayName(
						SavingThrow.Intelligence,
					)}
					checked={isChecked(SavingThrow.Intelligence)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(SavingThrow.Strength)}
					label={mapNumberToSavingThrowDisplayName(
						SavingThrow.Strength,
					)}
					checked={isChecked(SavingThrow.Strength)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(SavingThrow.Wisdom)}
					label={mapNumberToSavingThrowDisplayName(
						SavingThrow.Wisdom,
					)}
					checked={isChecked(SavingThrow.Wisdom)}
				/>
				<Button
					variant="outline-primary"
					onClick={() =>
						setSelectedSavingThrows(savingThrowFilterDisabledArray)
					}
				>
					All
				</Button>
				<Button
					variant="outline-primary"
					onClick={() => setSelectedSavingThrows([])}
				>
					None
				</Button>
			</div>
		);
	},
);

SavingThrowFilter.displayName = "SavingThrowFilter";

export default SavingThrowFilter;
