/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export const searchSpells = async (q: string) => {
	const result = await fetch(`http://localhost:5226/search/spells?q=${q}`, {
		method: "POST",
	});

	return result.json();
};
