/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { ValueFormatterParams } from "@ag-grid-community/core";
import { mapNumberToAttackDisplayName } from "../enums/attacks";
import { mapNumberToCastingTimeDisplayName } from "../enums/casting-times";
import { DamageType, mapDamageTypeToDisplayName } from "../enums/damage-types";
import { mapNumberToDistanceDisplayName } from "../enums/distances";
import { mapNumberToDurationDisplayName } from "../enums/durations";
import { Effect, mapEffectToDisplayName } from "../enums/effects";
import { mapNumberToRangeDisplayName } from "../enums/ranges";
import { mapNumberToSavingThrowDisplayName } from "../enums/saving-throws";
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

export const attackValueFormatter = (
	params: ValueFormatterParams<number>,
): string =>
	params.value == 0 ? "" : mapNumberToAttackDisplayName(params.value);

export const booleanValueFormatter = (
	params: ValueFormatterParams<boolean>,
): string => (params.value == true ? "✅" : "❌");

export const castingTimeValueFormatter = (
	params: ValueFormatterParams<Spell>,
): string => mapNumberToCastingTimeDisplayName(params.value);

export const damageTypeValueFormatter = (
	params: ValueFormatterParams<DamageType>,
): string => {
	if (!params?.value || params?.value === DamageType.None) return "";
	return mapDamageTypeToDisplayName(params.value);
};

export const durationValueFormatter = (
	params: ValueFormatterParams<Spell>,
): string => mapNumberToDurationDisplayName(params.value);

export const effectValueFormatter = (
	params: ValueFormatterParams<Effect[]>,
): string => {
	const names: string[] | null = params.value
		?.map((effect: Effect) => {
			if (effect === Effect.None) return null;
			return mapEffectToDisplayName(effect);
		})
		.filter((x: string | null) => x);

	return names?.join(", ") ?? "";
};

export const rangeValueFormatter = (
	params: ValueFormatterParams<Spell>,
): string => mapNumberToRangeDisplayName(params.value);

export const savingThrowValueFormatter = (
	params: ValueFormatterParams<number>,
): string =>
	params.value == 0 ? "" : mapNumberToSavingThrowDisplayName(params.value);

export const schoolValueFormatter = (
	params: ValueFormatterParams<Spell>,
): string => mapNumberToSchoolDisplayName(params.value);

export const sourceValueFormatter = (
	params: ValueFormatterParams<Spell>,
): string => mapNumberToSourceDisplayName(params.value);
