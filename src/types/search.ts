/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */
import ElasticSpell from "./elastic-spell";

export type Facet = {
	field: string;
	value: string | boolean;
};

export type Bucket = {
	key: string;
	count: number;
};

export type Aggregation = {
	name: string;
	buckets: Bucket[];
};

export type SearchResponse = {
	aggregations: Aggregation[];
	hits: ElasticSpell[];
	terminatedEarly: boolean;
	timedOut: boolean;
	took: number;
	total: number;
	next: string;
};