/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense, useState, useContext, useLayoutEffect } from "react";
import Button from "react-bootstrap/Button";

const LoadingSpinner = React.lazy(() => import("../loading-spinner"));
const PrintModal = React.lazy(() => import("../print-modal"));
const Table = React.lazy(() => import("../table"));
const SettingsOffcanvas = React.lazy(() => import("../settings-offcanvas"));
const Footer = React.lazy(() => import("../footer"));
import { ThemeContext } from "../theme-context-provider";

import { Theme } from "../../enums/theme";

import "./page.scss";
import { SelectedRowContext } from "../selected-row-context-provider";

export const IndexPage = () => {
	const { currentTheme } = useContext(ThemeContext);
	const { selectedRows } = useContext(SelectedRowContext);
	const [printModalIsOpen, setPrintModalIsOpen] = useState<boolean>(false);

	useLayoutEffect(() => {
		const elements: HTMLCollectionOf<HTMLElement> =
			document.getElementsByTagName("html");

		if (elements.length === 0) return;

		if (currentTheme === Theme.Light)
			elements[0]?.setAttribute("data-bs-theme", "");
		else if (currentTheme === Theme.Dark)
			elements[0]?.setAttribute("data-bs-theme", "dark");
	}, [currentTheme]);

	const togglePrintModalIsOpen = (): void =>
		setPrintModalIsOpen(!printModalIsOpen);

	return (
		<div className="gutter-container">
			<div className="page">
				<Suspense fallback={<LoadingSpinner />}>
					<div className="heading">
						<h1>D&D Spell Details</h1>
						<div>
							<Button
								variant="outline-primary"
								className="printer-button"
								onClick={togglePrintModalIsOpen}
							>
								<i className="bi bi-printer" />
								&nbsp; Print
							</Button>
							<PrintModal
								isOpen={printModalIsOpen}
								toggleIsOpen={togglePrintModalIsOpen}
								rows={selectedRows}
							/>
							<SettingsOffcanvas />
						</div>
					</div>
					<Table />
					<Footer />
				</Suspense>
			</div>
		</div>
	);
};
