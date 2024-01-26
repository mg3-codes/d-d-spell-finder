/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import Table from "react-bootstrap/Table";

import { SpellRequirementsBadges } from "../spell-requirements-badges";

import Spell from "../../types/spell";

import { mapNumberToCastingTimeDisplayName } from "../../enums/casting-times";
import { mapNumberToDurationDisplayName } from "../../enums/durations";
import { mapNumberToRangeDisplayName } from "../../enums/ranges";
import { mapNumberToDistanceDisplayName } from "../../enums/distances";
import { mapNumberToShapeDisplayName } from "../../enums/shapes";
import { Attack, mapNumberToAttackDisplayName } from "../../enums/attacks";
import { mapNumberToSavingThrowDisplayName } from "../../enums/saving-throws";
import { mapNumberToDamageTypeDisplayName } from "../../enums/damage-types";
import { mapNumberToEffectDisplayName } from "../../enums/effects";

import "./spell-page-table.scss";

export interface ISpellPageTableProps {
	spell: Spell;
}

export const SpellPageTable = ({ spell }: ISpellPageTableProps) => {
	return (
		<Table bordered>
			<thead className="head">
				<tr>
					<td colSpan={2}>Details</td>
				</tr>
				<tr>
					<td colSpan={2}>
						<SpellRequirementsBadges spell={spell} />
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Casting Time</td>
					<td>
						{mapNumberToCastingTimeDisplayName(spell.castingTime)}
					</td>
				</tr>
				<tr>
					<td>Duration</td>
					<td>{mapNumberToDurationDisplayName(spell.duration)}</td>
				</tr>
				<tr>
					<td>Range</td>
					<td>{mapNumberToRangeDisplayName(spell.range)}</td>
				</tr>
				<tr>
					<td>Area</td>
					<td>{`${mapNumberToDistanceDisplayName(
						spell.area,
					)} ${mapNumberToShapeDisplayName(spell.areaShape)}`}</td>
				</tr>
				{spell.attack !== Attack.None && (
					<tr>
						<td>Attack</td>
						<td>{mapNumberToAttackDisplayName(spell.attack)}</td>
					</tr>
				)}
				<tr>
					<td>Saving Throw</td>
					<td>{mapNumberToSavingThrowDisplayName(spell.save)}</td>
				</tr>
				<tr>
					<td>Damage</td>
					<td>{mapNumberToDamageTypeDisplayName(spell.damage)}</td>
				</tr>
				{spell.effect && (
					<tr>
						<td>Effects</td>
						<td>
							{spell.effect?.map(
								(x) => `${mapNumberToEffectDisplayName(x)} `,
							)}
						</td>
					</tr>
				)}
				<tr>
					<td>Ritual</td>
					<td>{`${spell.ritual ? "✅" : "❌"}`}</td>
				</tr>
			</tbody>
		</Table>
	);
};
