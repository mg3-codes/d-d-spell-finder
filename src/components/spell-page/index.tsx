/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Heading from "../heading";
import { SpellPageTable } from "../spell-page-table";

import Spell from "../../types/spell";
import { fetchSpellById, getSpellAndSchoolText } from "../../utility/spell";
import { mapNumberToSourceDisplayName } from "../../enums/sources";

import "./spell-page.scss";

export const SpellPage = () => {
	const { spellId } = useParams();
	const [spell, setSpell] = useState<Spell | undefined>();

	useEffect(() => {
		if (spellId) {
			fetchSpellById(spellId).then((x) => setSpell(x));
		}
	}, [spellId]);

	return (
		<div className="gutter-container">
			<div className="page">
				<Heading />
				{spell && (
					<div className="loaded-spell">
						<div className="header">
							<h2>{spell.name}</h2>
							<h4>
								{getSpellAndSchoolText(
									spell.level,
									spell.school,
								)}
							</h4>
							<div>
								{mapNumberToSourceDisplayName(spell.source)}
							</div>
						</div>
						<div className="content">
							<div className="details">
								{spell.details
									?.split("\n")
									.map((x, index) => <p key={index}>{x}</p>)}
							</div>
							<SpellPageTable spell={spell} />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
