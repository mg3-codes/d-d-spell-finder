/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { ValueFormatterParams } from "@ag-grid-community/core";

import { mapNumberToAttackDisplayName } from "../enums/attacks";
import { mapNumberToCastingTimeDisplayName } from "../enums/casting-times";
import {
	DamageType,
	mapNumberToDamageTypeDisplayName,
} from "../enums/damage-types";
import { Distance, mapNumberToDistanceDisplayName } from "../enums/distances";
import { Duration, mapNumberToDurationDisplayName } from "../enums/durations";
import { Effect, mapEffectToDisplayName } from "../enums/effects";
import { mapNumberToRangeDisplayName, Range } from "../enums/ranges";
import {
	mapNumberToSavingThrowDisplayName,
	SavingThrow,
} from "../enums/saving-throws";
import { mapNumberToSchoolDisplayName, School } from "../enums/schools";
import { mapNumberToShapeDisplayName } from "../enums/shapes";
import { mapNumberToSourceDisplayName, Source } from "../enums/sources";
import Spell from "../types/spell";
import { RowArea } from "../types/table-row";

export const areaValueFormatter = (
	params: ValueFormatterParams<unknown, RowArea>,
): string => {
	if (!params.value || params.value.distance === Distance.Unknown) return "";
	return `${mapNumberToDistanceDisplayName(
		params.value.distance,
	)} ${mapNumberToShapeDisplayName(params.value.shape)}`;
};

export const attackValueFormatter = (
	params: ValueFormatterParams<Spell, number>,
): string => {
	if (!params.value) return "";

	return params.value === 0 ? "" : mapNumberToAttackDisplayName(params.value);
};

export const booleanValueFormatter = (
	params: ValueFormatterParams<boolean>,
): string => (params.value === true ? "✅" : "❌");

export const castingTimeValueFormatter = (
	params: ValueFormatterParams<Spell, number>,
): string => {
	if (!params.value) return "";

	return mapNumberToCastingTimeDisplayName(params.value);
};

export const damageTypeValueFormatter = (
	params: ValueFormatterParams<Spell, DamageType>,
): string => {
	if (!params?.value || params?.value === DamageType.None) return "";

	return mapNumberToDamageTypeDisplayName(params.value);
};

export const durationValueFormatter = (
	params: ValueFormatterParams<Spell, Duration>,
): string => {
	if (!params.value) return "";

	return mapNumberToDurationDisplayName(params.value);
};

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

export const rangeValueFormatter = (
	params: ValueFormatterParams<Spell, Range>,
): string => {
	if (!params.value) return "";

	return mapNumberToRangeDisplayName(params.value);
};

export const savingThrowValueFormatter = (
	params: ValueFormatterParams<Spell, SavingThrow>,
): string => {
	if (!params.value) return "";

	return mapNumberToSavingThrowDisplayName(params.value);
};

export const schoolValueFormatter = (
	params: ValueFormatterParams<Spell, School>,
): string => {
	if (!params.value) return "";

	return mapNumberToSchoolDisplayName(params.value);
};

export const sourceValueFormatter = (
	params: ValueFormatterParams<Spell, Source>,
): string => {
	if (!params.value) return "";

	return mapNumberToSourceDisplayName(params.value);
};
