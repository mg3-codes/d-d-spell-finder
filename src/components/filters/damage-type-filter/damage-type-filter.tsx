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
	mapNumberToDamageTypeDisplayName,
	DamageType,
} from "../../../enums/damage-types";
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

import "./damage-type-filter.scss";

const damageTypeFilterDisabledArray = createDisabledFilterArray(14);

const DamageTypeFilter = forwardRef(
	(props: AgGridFilterProps, ref): ReactElement => {
		const [selectedDamageTypes, setSelectedDamageTypes] = useState<
			number[]
		>(damageTypeFilterDisabledArray);

		useEffect(() => {
			props.filterChangedCallback();
		}, [selectedDamageTypes]);

		useImperativeHandle(ref, () => {
			const doesFilterPass = (props: NumberBasedFilterProps) => {
				return numberBasedFilterDoesFilterPass(
					props?.data?.damage,
					selectedDamageTypes,
				);
			};

			const isFilterActive = () => {
				return numberBasedFilterIsFilterActive(
					selectedDamageTypes.length,
					damageTypeFilterDisabledArray.length,
				);
			};

			const getModel = () => {
				if (!isFilterActive()) {
					return null;
				}

				return {
					value: selectedDamageTypes,
				};
			};

			const setModel = (model: NumberBasedFilterSetModel) => {
				setSelectedDamageTypes(model?.value ?? []);
			};

			return { doesFilterPass, isFilterActive, getModel, setModel };
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
					label={mapNumberToDamageTypeDisplayName(DamageType.None)}
					checked={isChecked(DamageType.None)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Acid)}
					label={mapNumberToDamageTypeDisplayName(DamageType.Acid)}
					checked={isChecked(DamageType.Acid)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Bludgeoning)}
					label={mapNumberToDamageTypeDisplayName(
						DamageType.Bludgeoning,
					)}
					checked={isChecked(DamageType.Bludgeoning)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Cold)}
					label={mapNumberToDamageTypeDisplayName(DamageType.Cold)}
					checked={isChecked(DamageType.Cold)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Fire)}
					label={mapNumberToDamageTypeDisplayName(DamageType.Fire)}
					checked={isChecked(DamageType.Fire)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Force)}
					label={mapNumberToDamageTypeDisplayName(DamageType.Force)}
					checked={isChecked(DamageType.Force)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Lightning)}
					label={mapNumberToDamageTypeDisplayName(
						DamageType.Lightning,
					)}
					checked={isChecked(DamageType.Lightning)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Necrotic)}
					label={mapNumberToDamageTypeDisplayName(
						DamageType.Necrotic,
					)}
					checked={isChecked(DamageType.Necrotic)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Piercing)}
					label={mapNumberToDamageTypeDisplayName(
						DamageType.Piercing,
					)}
					checked={isChecked(DamageType.Piercing)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Poison)}
					label={mapNumberToDamageTypeDisplayName(DamageType.Poison)}
					checked={isChecked(DamageType.Poison)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Psychic)}
					label={mapNumberToDamageTypeDisplayName(DamageType.Psychic)}
					checked={isChecked(DamageType.Psychic)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Radiant)}
					label={mapNumberToDamageTypeDisplayName(DamageType.Radiant)}
					checked={isChecked(DamageType.Radiant)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Slashing)}
					label={mapNumberToDamageTypeDisplayName(
						DamageType.Slashing,
					)}
					checked={isChecked(DamageType.Slashing)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(DamageType.Thunder)}
					label={mapNumberToDamageTypeDisplayName(DamageType.Thunder)}
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
	},
);

DamageTypeFilter.displayName = "DamageTypeFilter";

export default DamageTypeFilter;
