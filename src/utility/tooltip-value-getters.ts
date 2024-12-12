/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type { ITooltipParams } from "ag-grid-community";
import { mapNumberToRangeDisplayName } from "../enums/ranges";

import { mapNumberToSourceDisplayName } from "../enums/sources";
import type Spell from "../types/spell";

export const rangeTooltipValueGetter = (
	params: ITooltipParams<Spell>,
): string => {
	if (!params?.data?.range) return "";
	return mapNumberToRangeDisplayName(params?.data?.range);
};

export const sourceTooltipValueGetter = (
	params: ITooltipParams<Spell>,
): string => {
	if (!params?.data?.source) return "";
	return mapNumberToSourceDisplayName(params?.data?.source);
};
