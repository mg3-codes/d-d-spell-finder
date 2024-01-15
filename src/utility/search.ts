/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { Aggregation, Facet } from "../types/search";

export const searchSpells = async (q: string, facets?: Facet[]) => {
	const result = await fetch(`http://localhost:5226/search/spells?q=${q}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			facets,
		}),
	});

	return result.json();
};

export const formatSearchText = (s: string, a: Aggregation): string => {
	const levelAggregation = "level";
	if (!s || s === "") return "";
	else if (s === "0" && a.name !== levelAggregation) return "False";
	else if (s === "1" && a.name !== levelAggregation) return "True";
	else if (s.length == 1) return s.toUpperCase();

	const regex = /[A-Z][a-z]+/gm;
	const words = s.match(regex);

	if (words?.length == 0) return `${s[0].toUpperCase()}${s.substring(1)}`;

	return words?.join(" ") ?? "";
};
