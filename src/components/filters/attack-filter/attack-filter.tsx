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

import { mapNumberToAttackDisplayName, Attack } from "../../../enums/attacks";
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

import "./attack-filter.scss";

const attackFilterDisabledArray = createDisabledFilterArray(3);

const AttackFilter = forwardRef(
	(props: AgGridFilterProps, ref): ReactElement => {
		const [selectedAttacks, setSelectedAttacks] = useState<number[]>(
			attackFilterDisabledArray,
		);

		useEffect(() => {
			props.filterChangedCallback();
		}, [selectedAttacks]);

		useImperativeHandle(ref, () => {
			const doesFilterPass = (props: NumberBasedFilterProps) => {
				return numberBasedFilterDoesFilterPass(
					props?.data?.attack,
					selectedAttacks,
				);
			};

			const isFilterActive = () => {
				return numberBasedFilterIsFilterActive(
					selectedAttacks.length,
					attackFilterDisabledArray.length,
				);
			};

			const getModel = () => {
				if (!isFilterActive()) {
					return null;
				}

				return {
					value: selectedAttacks,
				};
			};

			const setModel = (model: NumberBasedFilterSetModel) => {
				setSelectedAttacks(model?.value ?? []);
			};

			return {
				doesFilterPass,
				isFilterActive,
				getModel,
				setModel,
			};
		});

		const handleCheck = useCallback(
			(x: Attack): void =>
				numberBasedFilterHandleCheck(
					selectedAttacks,
					setSelectedAttacks,
					x,
				),
			[],
		);

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
					onClick={() =>
						useCallback(
							() => setSelectedAttacks(attackFilterDisabledArray),
							[],
						)
					}
				>
					All
				</Button>
				<Button
					variant="outline-primary"
					onClick={() =>
						useCallback(() => setSelectedAttacks([]), [])
					}
				>
					None
				</Button>
			</div>
		);
	},
);

AttackFilter.displayName = "AttackFilter";

export default AttackFilter;
