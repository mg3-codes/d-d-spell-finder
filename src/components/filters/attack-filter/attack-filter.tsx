/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { CustomFilterProps, useGridFilter } from "@ag-grid-community/react";
import { useRollbar } from "@rollbar/react";
import React, {
	ChangeEventHandler,
	ReactElement,
	useCallback,
	useEffect,
	useState,
} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Attack, mapNumberToAttackDisplayName } from "../../../enums/attacks";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	NumberBasedFilterProps,
} from "../../../utility/filters/number-based-filter";

import "./attack-filter.scss";

const attackFilterDisabledArray = createDisabledFilterArray(3);

const AttackFilter = ({ onModelChange }: CustomFilterProps): ReactElement => {
	const [selectedAttacks, setSelectedAttacks] = useState<number[]>(
		attackFilterDisabledArray,
	);
	const rollbar = useRollbar();

	useEffect(() => {
		if (selectedAttacks.length === attackFilterDisabledArray.length)
			onModelChange(null);
		else onModelChange(selectedAttacks);
	}, [selectedAttacks]);

	const doesFilterPass = (props: NumberBasedFilterProps) => {
		return numberBasedFilterDoesFilterPass(
			props?.data?.attack,
			selectedAttacks,
		);
	};

	useGridFilter({ doesFilterPass });

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
};

AttackFilter.displayName = "AttackFilter";

export default AttackFilter;
