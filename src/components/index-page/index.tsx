/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense, useContext, useLayoutEffect } from "react";

const Heading = React.lazy(() => import("../heading"));
const LoadingSpinner = React.lazy(() => import("../loading-spinner"));
const Table = React.lazy(() => import("../table"));
const Footer = React.lazy(() => import("../footer"));
import { ThemeContext } from "../theme-context-provider";

import { Theme } from "../../enums/theme";

import "./page.scss";

export const IndexPage = () => {
	const { currentTheme } = useContext(ThemeContext);

	useLayoutEffect(() => {
		const elements: HTMLCollectionOf<HTMLElement> =
			document.getElementsByTagName("html");

		if (elements.length === 0) return;

		if (currentTheme === Theme.Light)
			elements[0]?.setAttribute("data-bs-theme", "");
		else if (currentTheme === Theme.Dark)
			elements[0]?.setAttribute("data-bs-theme", "dark");
	}, [currentTheme]);

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
