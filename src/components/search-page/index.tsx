/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, {
	Suspense,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
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
	const [currentFacets, setCurrentFacets] = useState<Facet[] | undefined>(
		undefined,
	);
	const [isFetching, setIsFetching] = useState<boolean>(false);
	const observerTargetRef = useRef<HTMLDivElement>(null);
	const [queryParams] = useSearchParams();
	const navigate = useNavigate();

	const fetchMoreResults = useCallback(async () => {
		if (!results) return;
		if (results.hits.length === results.total) return;

		setIsFetching(true);

		const q = queryParams.get("q") ?? "";

		const response = await searchSpells(q, currentFacets, results?.next);

		response.hits = results.hits.concat(response.hits);

		setResults(response);
		setIsFetching(false);
	}, [results?.next]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					fetchMoreResults();
				}
			},
			{ threshold: 0 },
		);

		if (observerTargetRef.current) {
			observer.observe(observerTargetRef.current);
		}

		return () => {
			if (observerTargetRef.current) {
				observer.unobserve(observerTargetRef.current);
			}
		};
	}, [observerTargetRef.current, fetchMoreResults]);

	const getSearchResults = async (
		queryText?: string,
		facets?: Facet[],
		next?: string,
	) => {
		const q = queryText ?? queryParams.get("q");

		if (q !== null) {
			const response = await searchSpells(q, facets, next);

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

	const onFacetClick = (facets?: Facet[]) => {
		setCurrentFacets(facets);
		getSearchResults(queryParams.get("q") ?? "", facets);
	};

	return (
		<div className="gutter-container">
			<div className="page">
				<Suspense fallback={<LoadingSpinner />}>
					<Heading />
					<SearchBar
						onSearchRequested={(q) => onSearchRequested(q)}
					/>
					<div className="search-page-content" id="content">
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
									{isFetching && <LoadingSpinner />}
									{results.hits.length === results.total && (
										<span className="all-results-loaded-message">
											All {results.total} results loaded
										</span>
									)}
									<div ref={observerTargetRef}></div>
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
