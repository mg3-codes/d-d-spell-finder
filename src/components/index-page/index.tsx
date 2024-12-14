/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

const Heading = React.lazy(() => import("../heading"));
const LoadingSpinner = React.lazy(() => import("../loading-spinner"));
const Table = React.lazy(() => import("../table"));
const Footer = React.lazy(() => import("../footer"));

import "./styles.css";

export const IndexPage = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	// biome-ignore lint/correctness/useExhaustiveDependencies: this should only ever execute once to avoid loop
	useEffect(() => {
		const redirectParam = searchParams.get("redirect");
		if (redirectParam) navigate(redirectParam);
	}, []);

	return (
		<div className="gutter-container">
			<div className="page">
				<Suspense fallback={<LoadingSpinner />}>
					<Heading />
					<Table />
					<Footer />
				</Suspense>
			</div>
		</div>
	);
};
