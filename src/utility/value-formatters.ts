/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type { ValueFormatterParams } from "ag-grid-community";

import { mapNumberToAttackDisplayName } from "../enums/attacks";
import { mapNumberToCastingTimeDisplayName } from "../enums/casting-times";
import {
	DamageType,
	mapNumberToDamageTypeDisplayName,
} from "../enums/damage-types";
import { Distance, mapNumberToDistanceDisplayName } from "../enums/distances";
import {
	type Duration,
	mapNumberToDurationDisplayName,
} from "../enums/durations";
import { Effect, mapEffectToDisplayName } from "../enums/effects";
import { mapNumberToRangeDisplayName, type Range } from "../enums/ranges";
import {
	mapNumberToSavingThrowDisplayName,
	type SavingThrow,
} from "../enums/saving-throws";
import { mapNumberToSchoolDisplayName, type School } from "../enums/schools";
import { mapNumberToShapeDisplayName } from "../enums/shapes";
import { mapNumberToSourceDisplayName, type Source } from "../enums/sources";
import type Spell from "../types/spell";
import type { RowArea } from "../types/table-row";

/**
 * Format the area value for display.
 * @param params - The value formatter parameters.
 * @returns The formatted area value.
 */
export const areaValueFormatter = (
	params: ValueFormatterParams<unknown, RowArea>,
): string => {
	if (!params.value || params.value.distance === Distance.Unknown) return "";
	return `${mapNumberToDistanceDisplayName(
		params.value.distance,
	)} ${mapNumberToShapeDisplayName(params.value.shape)}`;
};

/**
 * Format the attack value for display.
 * @param params - The value formatter parameters.
 * @returns The formatted attack value.
 */
export const attackValueFormatter = (
	params: ValueFormatterParams<Spell, number>,
): string => {
	if (!params.value) return "";

	return params.value === 0 ? "" : mapNumberToAttackDisplayName(params.value);
};

/**
 * Format the casting time value for display.
 * @param params - The value formatter parameters.
 * @returns The formatted casting time value.
 */
export const castingTimeValueFormatter = (
	params: ValueFormatterParams<Spell, number>,
): string => {
	if (!params.value) return "";

	return mapNumberToCastingTimeDisplayName(params.value);
};

/**
 * Format the damage type value for display.
 * @param params - The value formatter parameters.
 * @returns The formatted damage type value.
 */
export const damageTypeValueFormatter = (
	params: ValueFormatterParams<Spell, DamageType>,
): string => {
	if (!params?.value || params?.value === DamageType.None) return "";

	return mapNumberToDamageTypeDisplayName(params.value);
};

/**
 * Format the duration value for display.
 * @param params - The value formatter parameters.
 * @returns The formatted duration value.
 */
export const durationValueFormatter = (
	params: ValueFormatterParams<Spell, Duration>,
): string => {
	if (!params.value) return "";

	return mapNumberToDurationDisplayName(params.value);
};

/**
 * Format the effect value for display.
 * @param params - The value formatter parameters.
 * @returns The formatted effect value.
 */
export const effectValueFormatter = (
	params: ValueFormatterParams<Spell, Effect[]>,
): string => {
	if (!params.value) return "";

	const names: (string | null)[] = params.value
		?.map((effect: Effect) => {
			if (effect === Effect.None) return null;
			return mapEffectToDisplayName(effect);
		})
		.filter((x: string | null) => x);

	return names?.join(", ") ?? "";
};

/**
 * Format the range value for display.
 * @param params - The value formatter parameters.
 * @returns The formatted range value.
 */
export const rangeValueFormatter = (
	params: ValueFormatterParams<Spell, Range>,
): string => {
	if (!params.value) return "";

	return mapNumberToRangeDisplayName(params.value);
};

/**
 * Format the saving throw value for display.
 * @param params - The value formatter parameters.
 * @returns The formatted saving throw value.
 */
export const savingThrowValueFormatter = (
	params: ValueFormatterParams<Spell, SavingThrow>,
): string => {
	if (!params.value) return "";

	return mapNumberToSavingThrowDisplayName(params.value);
};

/**
 * Format the school value for display.
 * @param params - The value formatter parameters.
 * @returns The formatted school value.
 */
export const schoolValueFormatter = (
	params: ValueFormatterParams<Spell, School>,
): string => {
	if (!params.value) return "";

	return mapNumberToSchoolDisplayName(params.value);
};

/**
 * Format the source value for display.
 * @param params - The value formatter parameters.
 * @returns The formatted source value.
 */
export const sourceValueFormatter = (
	params: ValueFormatterParams<Spell, Source>,
): string => {
	if (!params.value) return "";

	return mapNumberToSourceDisplayName(params.value);
};
