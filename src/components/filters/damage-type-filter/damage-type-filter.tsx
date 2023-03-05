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

		const selectAllDamageTypes = useCallback(
			() => setSelectedDamageTypes(damageTypeFilterDisabledArray),
			[],
		);

		const selectNoDamageTypes = useCallback(
			() => setSelectedDamageTypes([]),
			[],
		);

		const handleCheck = useCallback(
			(e: React.BaseSyntheticEvent): void => {
				const damage = e.target.getAttribute("data-damage");
				numberBasedFilterHandleCheck(
					selectedDamageTypes,
					setSelectedDamageTypes,
					damage,
				);
			},
			[selectedDamageTypes],
		);

		const isChecked = (x: DamageType): boolean | undefined =>
			numberBasedFilterIsChecked(selectedDamageTypes, x);

		return (
			<div className="damage-type-filter">
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(DamageType.None)}
					checked={isChecked(DamageType.None)}
					data-damage={DamageType.None}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(DamageType.Acid)}
					checked={isChecked(DamageType.Acid)}
					data-damage={DamageType.Acid}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(
						DamageType.Bludgeoning,
					)}
					checked={isChecked(DamageType.Bludgeoning)}
					data-damage={DamageType.Bludgeoning}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(DamageType.Cold)}
					checked={isChecked(DamageType.Cold)}
					data-damage={DamageType.Cold}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(DamageType.Fire)}
					checked={isChecked(DamageType.Fire)}
					data-damage={DamageType.Fire}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(DamageType.Force)}
					checked={isChecked(DamageType.Force)}
					data-damage={DamageType.Force}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(
						DamageType.Lightning,
					)}
					checked={isChecked(DamageType.Lightning)}
					data-damage={DamageType.Lightning}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(
						DamageType.Necrotic,
					)}
					checked={isChecked(DamageType.Necrotic)}
					data-damage={DamageType.Necrotic}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(
						DamageType.Piercing,
					)}
					checked={isChecked(DamageType.Piercing)}
					data-damage={DamageType.Piercing}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(DamageType.Poison)}
					checked={isChecked(DamageType.Poison)}
					data-damage={DamageType.Poison}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(DamageType.Psychic)}
					checked={isChecked(DamageType.Psychic)}
					data-damage={DamageType.Psychic}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(DamageType.Radiant)}
					checked={isChecked(DamageType.Radiant)}
					data-damage={DamageType.Radiant}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(
						DamageType.Slashing,
					)}
					checked={isChecked(DamageType.Slashing)}
					data-damage={DamageType.Slashing}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToDamageTypeDisplayName(DamageType.Thunder)}
					checked={isChecked(DamageType.Thunder)}
					data-damage={DamageType.Thunder}
				/>
				<Button
					variant="outline-primary"
					onClick={selectAllDamageTypes}
				>
					All
				</Button>
				<Button variant="outline-primary" onClick={selectNoDamageTypes}>
					None
				</Button>
			</div>
		);
	},
);

DamageTypeFilter.displayName = "DamageTypeFilter";

export default DamageTypeFilter;
