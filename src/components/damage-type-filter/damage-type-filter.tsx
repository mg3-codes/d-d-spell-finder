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
	mapDamageTypeToDisplayName,
	DamageType,
} from "../../enums/damage-types";
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

import "./damage-type-filter.css";

const damageTypeFilterDisabledArray = createDisabledFilterArray(14);

export default forwardRef(function DamageTypeFilter(
	props: AgGridFilterProps,
	ref,
): ReactElement {
	const [selectedDamageTypes, setSelectedDamageTypes] = useState<number[]>(
		damageTypeFilterDisabledArray,
	);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedDamageTypes]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: NumberBasedFilterProps) {
				return numberBasedFilterDoesFilterPass(
					props?.data?.damage,
					selectedDamageTypes,
				);
			},

			isFilterActive() {
				return numberBasedFilterIsFilterActive(
					selectedDamageTypes.length,
					damageTypeFilterDisabledArray.length,
				);
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return {
					value: selectedDamageTypes,
				};
			},

			setModel(model: NumberBasedFilterSetModel) {
				setSelectedDamageTypes(model?.value ?? []);
			},
		};
	});

	const handleCheck = (x: DamageType): void =>
		numberBasedFilterHandleCheck(
			selectedDamageTypes,
			setSelectedDamageTypes,
			x,
		);

	const isChecked = (x: DamageType): boolean | undefined =>
		numberBasedFilterIsChecked(selectedDamageTypes, x);

	return (
		<div className="damage-type-filter">
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.None)}
				label={mapDamageTypeToDisplayName(DamageType.None)}
				checked={isChecked(DamageType.None)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Acid)}
				label={mapDamageTypeToDisplayName(DamageType.Acid)}
				checked={isChecked(DamageType.Acid)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Bludgeoning)}
				label={mapDamageTypeToDisplayName(DamageType.Bludgeoning)}
				checked={isChecked(DamageType.Bludgeoning)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Cold)}
				label={mapDamageTypeToDisplayName(DamageType.Cold)}
				checked={isChecked(DamageType.Cold)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Fire)}
				label={mapDamageTypeToDisplayName(DamageType.Fire)}
				checked={isChecked(DamageType.Fire)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Force)}
				label={mapDamageTypeToDisplayName(DamageType.Force)}
				checked={isChecked(DamageType.Force)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Lightning)}
				label={mapDamageTypeToDisplayName(DamageType.Lightning)}
				checked={isChecked(DamageType.Lightning)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Necrotic)}
				label={mapDamageTypeToDisplayName(DamageType.Necrotic)}
				checked={isChecked(DamageType.Necrotic)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Piercing)}
				label={mapDamageTypeToDisplayName(DamageType.Piercing)}
				checked={isChecked(DamageType.Piercing)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Poison)}
				label={mapDamageTypeToDisplayName(DamageType.Poison)}
				checked={isChecked(DamageType.Poison)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Psychic)}
				label={mapDamageTypeToDisplayName(DamageType.Psychic)}
				checked={isChecked(DamageType.Psychic)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Radiant)}
				label={mapDamageTypeToDisplayName(DamageType.Radiant)}
				checked={isChecked(DamageType.Radiant)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Slashing)}
				label={mapDamageTypeToDisplayName(DamageType.Slashing)}
				checked={isChecked(DamageType.Slashing)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(DamageType.Thunder)}
				label={mapDamageTypeToDisplayName(DamageType.Thunder)}
				checked={isChecked(DamageType.Thunder)}
			/>
			<Button
				variant="outline-primary"
				onClick={() =>
					setSelectedDamageTypes(damageTypeFilterDisabledArray)
				}
			>
				All
			</Button>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedDamageTypes([])}
			>
				None
			</Button>
		</div>
	);
});
