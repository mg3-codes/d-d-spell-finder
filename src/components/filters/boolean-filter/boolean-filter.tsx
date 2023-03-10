/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, {
	forwardRef,
	useState,
	useEffect,
	useCallback,
	useImperativeHandle,
	ReactElement,
} from "react";
import Form from "react-bootstrap/Form";
import { IFilterParams, RowNode } from "@ag-grid-community/core";

import { TableRow } from "../../../types/table-row";

import "./boolean-filter.scss";

interface IBooleanFilterProps extends IFilterParams {
	spellPropertyName: string;
}

type BooleanBasedFilterProps = {
	data: TableRow;
	node: RowNode;
};

type BooleanBasedFilterSetModel = {
	value?: BooleanBasedFilterState;
};

enum BooleanBasedFilterState {
	All,
	True,
	False,
}

const BooleanFilter = forwardRef(
	(filterProps: IBooleanFilterProps, ref): ReactElement => {
		const [selectedState, setSelectedState] =
			useState<BooleanBasedFilterState>(BooleanBasedFilterState.All);

		useEffect(() => {
			filterProps.filterChangedCallback();
		}, [selectedState]);

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

		useImperativeHandle(ref, () => {
			const doesFilterPass = (props: BooleanBasedFilterProps) => {
				return (
					mapStateToBoolean(selectedState) ===
					props?.data[filterProps?.spellPropertyName]
				);
			};

			const isFilterActive = () => {
				return selectedState !== BooleanBasedFilterState.All;
			};

			const getModel = () => {
				if (!isFilterActive()) {
					return null;
				}

				return { value: selectedState };
			};

			const setModel = (model: BooleanBasedFilterSetModel) => {
				setSelectedState(model?.value ?? BooleanBasedFilterState.All);
			};

			return {
				doesFilterPass,
				isFilterActive,
				getModel,
				setModel,
			};
		});

		const handleClick = useCallback(
			(e: React.BaseSyntheticEvent): void => {
				const state = e.target.getAttribute("data-boolean");
				setSelectedState(parseInt(state) as BooleanBasedFilterState);
			},
			[selectedState],
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
	},
);

BooleanFilter.displayName = "BooleanFilter";

export default BooleanFilter;
