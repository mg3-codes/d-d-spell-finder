/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { mapNumberToSchoolDisplayName } from "../enums/schools";
import Spell from "../types/spell";

export const fetchSpellById = async (spellId: string): Promise<Spell> => {
	const response = await fetch(`http://localhost:5226/spell/${spellId}`);
	return response.json();
};

export const fetchSpellByLink = async (spellLink: string): Promise<Spell> => {
	const response = await fetch(
		`http://localhost:5226/spell/link/${spellLink}`,
	);
	return response.json();
};

export const fetchAllSpellsJson = async (): Promise<Spell[]> => {
	const response = await fetch("http://localhost:5226/spell/all");
	return response.json();
};

export const getSpellAndSchoolText = (
	level: number,
	school: number,
): string => {
	return `${level > 0 ? `Level ${level}` : ""} ${mapNumberToSchoolDisplayName(
		school,
	)} ${level === 0 ? "Cantrip" : "Spell"}`;
};
