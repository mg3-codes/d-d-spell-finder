/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Heading = React.lazy(() => import("../heading"));
const LoadingSpinner = React.lazy(() => import("../loading-spinner"));
const Footer = React.lazy(() => import("../footer"));
import { SearchBar } from "../search-bar";
import { FacetSidebar } from "../facet-sidebar";
import { SearchResult } from "../search-result";

import { searchSpells } from "../../utility/search";

import { Facet, SearchResponse } from "../../types/search";

import "./search-page.scss";

export const SearchPage = () => {
	const [results, setResults] = useState<SearchResponse>();
	const [queryParams] = useSearchParams();
	const navigate = useNavigate();

	const getSearchResults = async (queryText?: string, facets?: Facet[]) => {
		const q = queryText ?? queryParams.get("q");

		if (q !== null) {
			const response = await searchSpells(q, facets);

			setResults(response);
		}
	};

	const onSearchRequested = (q: string): void => {
		const formatted = encodeURIComponent(q);
		navigate(`/search?q=${formatted}`);
		getSearchResults(q);
	};

	useEffect(() => {
		const fetchData = async () => await getSearchResults();

		fetchData();
	}, []);

	const onFacetClick = (facets?: Facet[]) =>
		getSearchResults(queryParams.get("q") ?? "", facets);

	return (
		<div className="gutter-container">
			<div className="page">
				<Suspense fallback={<LoadingSpinner />}>
					<Heading />
					<SearchBar
						onSearchRequested={(q) => onSearchRequested(q)}
					/>
					<div className="content">
						{results ? (
							<>
								<FacetSidebar
									facets={results.aggregations}
									onFacetClick={onFacetClick}
								/>
								<div className="search-result-container">
									{results.hits.map((x) => (
										<SearchResult
											key={x.details}
											spell={x}
										/>
									))}
								</div>
							</>
						) : (
							<LoadingSpinner />
						)}
					</div>
					<Footer />
				</Suspense>
			</div>
		</div>
	);
};
