/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback } from "react";

import ElasticSpell from "../../types/elastic-spell";
import { formatSourceAndLevelText } from "../../utility/search";

import "./search-result.scss";
import { SpellRequirementsBadges } from "../spell-requirements-badges";
import { Link } from "react-router-dom";

export interface ISearchResultProps {
	spell: ElasticSpell;
}

export const SearchResult = ({ spell }: ISearchResultProps) => {
	const getLevelSubtitle = useCallback(() => {
		if (!spell) return "";
		else if (spell.level > 0)
			return `Level ${spell.level} ${spell.school} Spell`;
		else return `${spell.school} Cantrip`;
	}, [spell]);

	return (
		<Link to={`/spell/${spell.link}`} className="search-result">
			<h5>{spell?.name}</h5>
			<div className="line-2">
				<div className="details-container">
					<span className="source light italic">
						{formatSourceAndLevelText(spell?.source)}
					</span>
					<span className="bold italic">{getLevelSubtitle()}</span>
				</div>
				<div className="badges">
					<SpellRequirementsBadges spell={spell} />
				</div>
			</div>
			<div className="details">{spell?.details}</div>
		</Link>
	);
};
