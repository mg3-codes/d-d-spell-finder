/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { Suspense } from "react";

import Footer from "../footer";
import { GrammarianTable } from "../grammarian-table";
import Heading from "../heading";
import LoadingSpinner from "../loading-spinner";

import "./styles.css";

export const GrammarianPage = () => {
	return (
		<div className="gutter-container">
			<div className="page">
				<Suspense fallback={<LoadingSpinner />}>
					<Heading />
					<GrammarianTable />
					<Footer />
				</Suspense>
			</div>
		</div>
	);
};
