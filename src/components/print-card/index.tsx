/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { mapNumberToAttackDisplayName } from "../../enums/attacks";
import { mapNumberToCastingTimeDisplayName } from "../../enums/casting-times";
import { mapNumberToDamageTypeDisplayName } from "../../enums/damage-types";
import { mapNumberToDistanceDisplayName } from "../../enums/distances";
import { mapNumberToDurationDisplayName } from "../../enums/durations";
import { mapNumberToRangeDisplayName } from "../../enums/ranges";
import { mapNumberToSavingThrowDisplayName } from "../../enums/saving-throws";
import { mapNumberToSchoolDisplayName } from "../../enums/schools";
import { mapNumberToShapeDisplayName } from "../../enums/shapes";
import { mapNumberToSourceDisplayName } from "../../enums/sources";

import { TableRow } from "../../types/table-row";

import "./print-card.scss";

export type IPrintCard = {
	row: TableRow;
};

const getNumberSuffix = (x: number): string => {
	switch (x) {
		case 0:
			return "";
		case 1:
			return "st";
		case 2:
			return "nd";
		case 3:
			return "rd";
		default:
			return "th";
	}
};

export const PrintCard = ({ row }: IPrintCard) => {
	const getSpellComponents = (): string => {
		const components: string[] = [];

		if (row.verbal) components.push("V");
		if (row.somatic) components.push("S");
		if (row.material) components.push("M");

		return components.join(", ");
	};

	return (
		<div className="print-card">
			<div className="container">
				<div className="header-container">
					<span className="header">{row.name}</span>
				</div>
				<div className="subtitle">
					<span>{`${
						row.level === 0 ? "Basic" : row.level
					}${getNumberSuffix(
						row.level,
					)} level ${mapNumberToSchoolDisplayName(
						row.school,
					)}`}</span>
				</div>
				<hr />
				<div className="table-info">
					<table>
						<tbody>
							<tr>
								<th>Casting Time</th>
								<th>Range</th>
							</tr>
							<tr>
								<td>
									{mapNumberToCastingTimeDisplayName(
										row.castingTime,
									)}
								</td>
								<td>
									{mapNumberToRangeDisplayName(row.range)}
								</td>
							</tr>
							<tr>
								<th>Components</th>
								<th>Duration</th>
							</tr>
							<tr>
								<td>{getSpellComponents()}</td>
								<td>
									{mapNumberToDurationDisplayName(
										row.duration,
									)}
								</td>
							</tr>
							<tr>
								<th>Attack</th>
								<th>Area</th>
							</tr>
							<tr>
								<td>
									{mapNumberToAttackDisplayName(row.attack)}
								</td>
								<td>{`${mapNumberToDistanceDisplayName(
									row.area.distance,
								)} ${mapNumberToShapeDisplayName(
									row.area.shape,
								)}`}</td>
							</tr>
							<tr>
								<th>Saving Throw</th>
								<th>Damage Type</th>
							</tr>
							<tr>
								<td>
									{mapNumberToSavingThrowDisplayName(
										row.save,
									)}
								</td>
								<td>
									{mapNumberToDamageTypeDisplayName(
										row.damage,
									)}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="details-section">
					<div>
						{row.material !== "" && <p>Material: {row.material}</p>}
						{row.details !== "" && (
							<p
								className={`max-lines-${
									row.material ? "9" : "11"
								}`}
							>
								Details: {row.details}
							</p>
						)}
					</div>
					<div>{mapNumberToSourceDisplayName(row.source)}</div>
				</div>
			</div>
		</div>
	);
};
