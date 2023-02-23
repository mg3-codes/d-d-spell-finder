/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { ValueFormatterParams } from "ag-grid-community";
import { mapNumberToCastingTimeDisplayName } from "../enums/casting-times";
import { mapNumberToDistanceDisplayName } from "../enums/distances";
import { mapNumberToDurationDisplayName } from "../enums/durations";
import { mapNumberToRangeDisplayName } from "../enums/ranges";
import { mapNumberToSchoolDisplayName } from "../enums/schools";
import { mapNumberToShapeDisplayName } from "../enums/shapes";
import { mapNumberToSourceDisplayName } from "../enums/sources";
import Spell from "../types/spell";
import { RowArea } from "../types/table-row";

export const areaValueFormatter = (
	params: ValueFormatterParams<RowArea>,
): string =>
	`${mapNumberToDistanceDisplayName(
		params.value.distance,
	)} ${mapNumberToShapeDisplayName(params.value.shape)}`;

export const booleanValueFormatter = (
	params: ValueFormatterParams<boolean>,
): string => (params.value == true ? "✅" : "❌");

export const castingTimeValueFormatter = (
	params: ValueFormatterParams<Spell>,
): string => mapNumberToCastingTimeDisplayName(params.value);

export const durationValueFormatter = (
	params: ValueFormatterParams<Spell>,
): string => mapNumberToDurationDisplayName(params.value);

export const rangeValueFormatter = (
	params: ValueFormatterParams<Spell>,
): string => mapNumberToRangeDisplayName(params.value);

export const schoolValueFormatter = (
	params: ValueFormatterParams<Spell>,
): string => mapNumberToSchoolDisplayName(params.value);

export const sourceValueFormatter = (
	params: ValueFormatterParams<Spell>,
): string => mapNumberToSourceDisplayName(params.value);
