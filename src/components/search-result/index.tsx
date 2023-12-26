/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback } from "react";
import Badge from "react-bootstrap/Badge";

import Spell from "../../types/spell";
import { mapNumberToSchoolDisplayName } from "../../enums/schools";

import "./search-result.scss";
import { mapNumberToSourceDisplayName } from "../../enums/sources";

export interface ISearchResultProps {
	spell: Spell;
}

export const SearchResult = ({ spell }: ISearchResultProps) => {
	const getLevelSubtitle = useCallback(() => {
		if (!spell) return "";
		else if (spell.level > 0)
			return `Level ${spell.level} ${mapNumberToSchoolDisplayName(
				spell.school,
			)} Spell`;
		else return `${mapNumberToSchoolDisplayName(spell.school)} Cantrip`;
	}, [spell]);

	return (
		<div className="search-result">
			<h5>{spell?.name}</h5>
			<div className="line-2">
				<div>
					<span className="bold italic">{getLevelSubtitle()}</span>
					<span>&nbsp;from&nbsp;</span>
					<span className="source bold italic">
						{mapNumberToSourceDisplayName(spell?.source)}
					</span>
				</div>
				<div className="badges">
					{spell?.ritual && (
						<Badge pill bg="primary">
							Ritual
						</Badge>
					)}
					{spell?.concentration && (
						<Badge pill bg="primary">
							Concentration
						</Badge>
					)}
					{spell?.verbal && (
						<Badge pill bg="primary">
							Verbal
						</Badge>
					)}
					{spell?.somatic && (
						<Badge pill bg="primary">
							Somatic
						</Badge>
					)}
				</div>
			</div>
			<div className="details">{spell?.details}</div>
		</div>
	);
};
