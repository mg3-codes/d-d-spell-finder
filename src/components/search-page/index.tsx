/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

const Heading = React.lazy(() => import("../heading"));
const LoadingSpinner = React.lazy(() => import("../loading-spinner"));
const Footer = React.lazy(() => import("../footer"));
import { SearchBar } from "../search-bar";
import { FacetSidebar } from "../facet-sidebar";
import { SearchResult } from "../search-result";

import { searchSpells } from "../../utility/search";
import { SearchResponse } from "../../types/search";

import "./search-page.scss";

export type SearchLoaderParams = {
	request: Request;
};

type SearchLoaderResponse = {
	results: SearchResponse;
};

export const searchLoader = async ({ request }: SearchLoaderParams) => {
	const q = new URL(request.url).searchParams.get("q");

	if (q !== null) {
		const results = await searchSpells(q);

		return defer({ results });
	}
};

export const SearchPage = () => {
	const { results } = useLoaderData() as SearchLoaderResponse;

	return (
		<div className="gutter-container">
			<div className="page">
				<Suspense fallback={<LoadingSpinner />}>
					<Heading />
					<SearchBar />
					<div className="content">
						<FacetSidebar />
						<Await resolve={results}>
							<div className="search-result-container">
								{results.hits.map((x) => (
									<SearchResult key={x.details} spell={x} />
								))}
							</div>
						</Await>
					</div>
					<Footer />
				</Suspense>
			</div>
		</div>
	);
};
