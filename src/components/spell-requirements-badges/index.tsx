/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import Badge from "react-bootstrap/Badge";

import Spell from "../../types/spell";
import ElasticSpell from "../../types/elastic-spell";

import "./spell-requirements-badges.scss";

export interface ISpellRequirementBadgesProps {
	spell: Spell | ElasticSpell;
}

export const SpellRequirementsBadges = ({
	spell,
}: ISpellRequirementBadgesProps) => {
	return (
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
	);
};
