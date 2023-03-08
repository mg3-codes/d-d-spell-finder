/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { RowNode } from "@ag-grid-community/core";

import { TableRow } from "../../types/table-row";

export type NumberBasedFilterProps = {
	data: TableRow;
	node: RowNode;
};

export type NumberBasedFilterSetModel = {
	value?: number[];
};

export const createDisabledFilterArray = (numFilters: number): number[] =>
	Array.from({ length: numFilters }, (v, index) => index);

export const numberBasedFilterDoesFilterPass = (
	submittedValue: number | undefined,
	selectedFilters: number[],
): boolean => {
	if (submittedValue === null) return false;

	return (
		selectedFilters.find((value) => value === submittedValue) !== undefined
	);
};

export const numberBasedFilterIsFilterActive = (
	selectedLength: number,
	disabledLength: number,
): boolean => selectedLength !== disabledLength;

export const numberBasedFilterHandleCheck = (
	selectedFilters: number[],
	setSelectedFilters: (value: React.SetStateAction<number[]>) => void,
	submittedValue: string,
): void => {
	const numValue = parseInt(submittedValue);
	if (!selectedFilters.includes(numValue))
		setSelectedFilters([...selectedFilters, numValue]);
	else
		setSelectedFilters(
			selectedFilters.filter((value) => value !== numValue),
		);
};

export const numberBasedFilterIsChecked = (
	selectedFilters: number[],
	submittedValue: number,
): boolean | undefined =>
	selectedFilters.find((value) => value === submittedValue) !== undefined;
