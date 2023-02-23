/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { RowArea } from "../types/table-row";

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
