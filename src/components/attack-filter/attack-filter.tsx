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

import { mapNumberToAttackDisplayName, Attack } from "../../enums/attacks";
import { AgGridFilterProps } from "../../types/ag-grid-filter-props";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
	NumberBasedFilterSetModel,
} from "../../utility/filters/number-based-filter";

import "./attack-filter.css";

const attackFilterDisabledArray = createDisabledFilterArray(3);

export default forwardRef(function AttackFilter(
	props: AgGridFilterProps,
	ref,
): ReactElement {
	const [selectedAttacks, setSelectedAttacks] = useState<number[]>(
		attackFilterDisabledArray,
	);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedAttacks]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: NumberBasedFilterProps) {
				return numberBasedFilterDoesFilterPass(
					props?.data?.attack,
					selectedAttacks,
				);
			},

			isFilterActive() {
				return numberBasedFilterIsFilterActive(
					selectedAttacks.length,
					attackFilterDisabledArray.length,
				);
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return {
					value: selectedAttacks,
				};
			},

			setModel(model: NumberBasedFilterSetModel) {
				setSelectedAttacks(model?.value ?? []);
			},
		};
	});

	const handleCheck = (x: Attack): void =>
		numberBasedFilterHandleCheck(selectedAttacks, setSelectedAttacks, x);

	const isChecked = (x: Attack): boolean | undefined =>
		numberBasedFilterIsChecked(selectedAttacks, x);

	return (
		<div className="attack-filter">
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Attack.None)}
				label={mapNumberToAttackDisplayName(Attack.None)}
				checked={isChecked(Attack.None)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Attack.Melee)}
				label={mapNumberToAttackDisplayName(Attack.Melee)}
				checked={isChecked(Attack.Melee)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Attack.Ranged)}
				label={mapNumberToAttackDisplayName(Attack.Ranged)}
				checked={isChecked(Attack.Ranged)}
			/>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedAttacks(attackFilterDisabledArray)}
			>
				All
			</Button>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedAttacks([])}
			>
				None
			</Button>
		</div>
	);
});
