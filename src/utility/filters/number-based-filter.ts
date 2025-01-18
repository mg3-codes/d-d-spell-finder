/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type { RowNode } from "ag-grid-community";

import type { TableRow } from "../../types/table-row";

export type NumberBasedFilterProps = {
	data: TableRow;
	node: RowNode;
};

export type NumberBasedFilterSetModel = {
	value?: number[];
};

/**
 * Create an array of disabled filters.
 * @param numFilters - The number of filters.
 * @returns An array of disabled filters.
 */
export const createDisabledFilterArray = (numFilters: number): number[] =>
	Array.from({ length: numFilters }, (v, index) => index);

/**
 * Check if the filter passes based on the submitted value and selected filters.
 * @param submittedValue - The value to check.
 * @param selectedFilters - The array of selected filters.
 * @returns True if the filter passes, otherwise false.
 */
export const numberBasedFilterDoesFilterPass = (
	submittedValue: number | undefined,
	selectedFilters: number[],
): boolean => {
	if (submittedValue === undefined) return false;

	return selectedFilters.includes(submittedValue);
};

/**
 * Check if the filter is active based on the selected and disabled lengths.
 * @param selectedLength - The length of selected filters.
 * @param disabledLength - The length of disabled filters.
 * @returns True if the filter is active, otherwise false.
 */
export const numberBasedFilterIsFilterActive = (
	selectedLength: number,
	disabledLength: number,
): boolean => selectedLength !== disabledLength;

/**
 * Handle the check event for the number-based filter.
 * @param selectedFilters - The array of selected filters.
 * @param setSelectedFilters - The function to set selected filters.
 * @param submittedValue - The value to check.
 */
export const numberBasedFilterHandleCheck = (
	selectedFilters: number[],
	setSelectedFilters: (value: React.SetStateAction<number[]>) => void,
	submittedValue: string,
): void => {
	const numValue = Number.parseInt(submittedValue);
	if (!selectedFilters.includes(numValue))
		setSelectedFilters([...selectedFilters, numValue]);
	else
		setSelectedFilters(selectedFilters.filter((value) => value !== numValue));
};

/**
 * Check if the submitted value is checked in the selected filters.
 * @param selectedFilters - The array of selected filters.
 * @param submittedValue - The value to check.
 * @returns True if the value is checked, otherwise false.
 */
export const numberBasedFilterIsChecked = (
	selectedFilters: number[],
	submittedValue: number,
): boolean | undefined =>
	selectedFilters.find((value) => value === submittedValue) !== undefined;
