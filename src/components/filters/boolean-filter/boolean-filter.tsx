/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type { RowNode } from "@ag-grid-community/core";
import {
	type CustomFilterProps,
	useGridFilter,
} from "@ag-grid-community/react";
import { useRollbar } from "@rollbar/react";
import type React from "react";
import {
	type ChangeEventHandler,
	type ReactElement,
	useCallback,
	useEffect,
	useState,
} from "react";
import Form from "react-bootstrap/Form";

import type { TableRow } from "../../../types/table-row";

import "./styles.css";

type BooleanBasedFilterProps = {
	data: TableRow;
	node: RowNode;
};

enum BooleanBasedFilterState {
	All = 0,
	True = 1,
	False = 2,
}

const BooleanFilter = ({
	onModelChange,
	getValue,
}: CustomFilterProps): ReactElement => {
	const [selectedState, setSelectedState] = useState<BooleanBasedFilterState>(
		BooleanBasedFilterState.All,
	);
	const rollbar = useRollbar();

	useEffect(() => {
		if (selectedState === BooleanBasedFilterState.All) onModelChange(null);
		else onModelChange(selectedState);
	}, [selectedState, onModelChange]);

	const mapStateToBoolean = (state: BooleanBasedFilterState): boolean => {
		switch (state) {
			case BooleanBasedFilterState.All:
			case BooleanBasedFilterState.True:
				return true;
			case BooleanBasedFilterState.False:
				return false;
			default:
				return false;
		}
	};

	const doesFilterPass = (props: BooleanBasedFilterProps) =>
		mapStateToBoolean(selectedState) === getValue(props.node);

	useGridFilter({ doesFilterPass });

	// biome-ignore lint/correctness/useExhaustiveDependencies(selectedState): change needs to happen on selectedState change
	const handleClick: ChangeEventHandler<HTMLInputElement> = useCallback(
		(e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>): void => {
			const state = e.target.getAttribute("data-boolean");

			if (!state) {
				rollbar.warning("stat was null", e);
				return;
			}

			setSelectedState(Number.parseInt(state) as BooleanBasedFilterState);
		},
		[selectedState, rollbar],
	);

	const isSelected = (x: BooleanBasedFilterState): boolean =>
		selectedState === x;

	return (
		<Form className="boolean-filter">
			<Form.Check
				type={"radio"}
				onChange={handleClick}
				label={"All"}
				checked={isSelected(BooleanBasedFilterState.All)}
				data-boolean={BooleanBasedFilterState.All}
			/>
			<Form.Check
				type={"radio"}
				onChange={handleClick}
				label={"True"}
				checked={isSelected(BooleanBasedFilterState.True)}
				data-boolean={BooleanBasedFilterState.True}
			/>
			<Form.Check
				type={"radio"}
				onChange={handleClick}
				label={"False"}
				checked={isSelected(BooleanBasedFilterState.False)}
				data-boolean={BooleanBasedFilterState.False}
			/>
		</Form>
	);
};

BooleanFilter.displayName = "BooleanFilter";

export default BooleanFilter;
