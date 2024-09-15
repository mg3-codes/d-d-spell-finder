/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import Badge from "react-bootstrap/Badge";

import { BootstrapColor } from "../../enums/bootstrap";
import ElasticSpell from "../../types/elastic-spell";
import Spell from "../../types/spell";

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
				<Badge pill bg={BootstrapColor.Primary}>
					Ritual
				</Badge>
			)}
			{spell?.concentration && (
				<Badge pill bg={BootstrapColor.Primary}>
					Concentration
				</Badge>
			)}
			{spell?.verbal && (
				<Badge pill bg={BootstrapColor.Primary}>
					Verbal
				</Badge>
			)}
			{spell?.somatic && (
				<Badge pill bg={BootstrapColor.Primary}>
					Somatic
				</Badge>
			)}
		</div>
	);
};
