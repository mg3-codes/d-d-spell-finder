/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { useRollbar } from "@rollbar/react";
import React, {
	ChangeEventHandler,
	forwardRef,
	ReactElement,
	useCallback,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Attack, mapNumberToAttackDisplayName } from "../../../enums/attacks";
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
		const rollbar = useRollbar();

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

		const selectAllAttacks = useCallback(
			() => setSelectedAttacks(attackFilterDisabledArray),
			[],
		);

		const selectNoAttacks = useCallback(() => setSelectedAttacks([]), []);

		const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
			(
				e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>,
			): void => {
				const attack = e.target.getAttribute("data-attack");

				if (!attack) {
					rollbar.warning("distance was null", e);
					return;
				}

				numberBasedFilterHandleCheck(
					selectedAttacks,
					setSelectedAttacks,
					attack,
				);
			},
			[selectedAttacks],
		);

		const isChecked = (x: Attack): boolean | undefined =>
			numberBasedFilterIsChecked(selectedAttacks, x);

		return (
			<div className="attack-filter">
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToAttackDisplayName(Attack.None)}
					checked={isChecked(Attack.None)}
					data-attack={Attack.None}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToAttackDisplayName(Attack.Melee)}
					checked={isChecked(Attack.Melee)}
					data-attack={Attack.Melee}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToAttackDisplayName(Attack.Ranged)}
					checked={isChecked(Attack.Ranged)}
					data-attack={Attack.Ranged}
				/>
				<Button
					className="all-button"
					variant="outline-primary"
					onClick={selectAllAttacks}
				>
					All
				</Button>
				<Button variant="outline-primary" onClick={selectNoAttacks}>
					None
				</Button>
			</div>
		);
	},
);

AttackFilter.displayName = "AttackFilter";

export default AttackFilter;
