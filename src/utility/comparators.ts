/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type { RowArea } from "../types/table-row";

/**
 * Compares two RowArea objects based on their distance property.
 *
 * @param valueA - The first RowArea object to compare.
 * @param valueB - The second RowArea object to compare.
 * @returns A negative number if valueA should come before valueB, a positive number if valueA should come after valueB, or 0 if they are equal.
 */
export const areaValueComparator = (
	valueA: RowArea,
	valueB: RowArea,
): number => {
	if (valueA.distance === null) {
		return -1;
	}
	if (valueB.distance === null) {
		return 1;
	}
	return valueA.distance - valueB.distance;
};
