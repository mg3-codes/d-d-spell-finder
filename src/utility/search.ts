/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { Aggregation, Facet, SearchResponse } from "../types/search";

export const searchSpellsAsync = async (
	q: string,
	facets?: Facet[],
	next?: string,
): Promise<SearchResponse> => {
	const result = await fetch(
		`http://localhost:5226/search/spells?q=${q}${
			next ? `&next=${next}` : ""
		}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				facets,
			}),
		},
	);

	return result.json() as Promise<SearchResponse>;
};

const splitOnCapitals = (s: string): string => {
	const regex = /[A-Z][a-z]+/gm;
	const words = s.match(regex);

	if (words?.length === 0) return `${s[0].toUpperCase()}${s.substring(1)}`;

	return words?.join(" ") ?? "";
};

export const formatSearchFacetText = (s: string, a: Aggregation): string => {
	const levelAggregation = "level";
	if (!s || s === "") return "";
	else if (s === "0" && a.name !== levelAggregation) return "False";
	else if (s === "1" && a.name !== levelAggregation) return "True";
	else if (s.length === 1) return s.toUpperCase();

	return splitOnCapitals(s);
};

export const formatSourceAndLevelText = (s: string): string =>
	splitOnCapitals(s);
