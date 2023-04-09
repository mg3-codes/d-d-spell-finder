/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useContext, useEffect, useMemo } from "react";
import Alert from "react-bootstrap/Alert";
import { useSearchParams } from "react-router-dom";

import { SelectedRowContext } from "../selected-row-context-provider";
import { PrintCard } from "../print-card";

import { Theme } from "../../enums/theme";

import "./export-page.scss";
import { ThemeContext } from "../theme-context-provider";

export interface IExportPageQueryParams {
	numPerRow?: number;
	rowsPerPage: number;
}

const ExportPage = () => {
	const { selectedRows } = useContext(SelectedRowContext);
	const [queryParams] = useSearchParams();
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
	useEffect(() => {
		const userSelectedTheme = currentTheme;
		let themeOverridden = false;

		if (currentTheme !== Theme.Light) {
			themeOverridden = true;
			setCurrentTheme(Theme.Light);
		}

		return () => {
			if (themeOverridden) setCurrentTheme(userSelectedTheme);
		};
	}, []);

	const getColumnClassName = useCallback(
		(number: number) => {
			switch (number) {
				case 2:
					return "two-columns";
				default:
				case 3:
					return "three-columns";
				case 4:
					return "four-columns";
			}
		},
		[queryParams],
	);

	const getRowClassName = useCallback(
		(number: number) => {
			switch (number) {
				default:
				case 2:
					return "two-rows";
				case 3:
					return "three-rows";
				case 4:
					return "four-columns";
			}
		},
		[queryParams],
	);

	const generatedCards = useMemo(() => {
		const elements: JSX.Element[] = [];
		const numColumns = parseInt(queryParams.get("numPerRow") ?? "3");
		const rowsPerPage = parseInt(queryParams.get("rowsPerPage") ?? "2");
		let counter = 0;
		while (counter <= selectedRows.length) {
			const pageElements: JSX.Element[] = [];
			for (let i = 0; i < rowsPerPage; i++) {
				const rowSlice = selectedRows.slice(
					i * numColumns + counter,
					i * numColumns + counter + numColumns,
				);

				pageElements.push(
					<>
						{rowSlice.map((row) => (
							<PrintCard key={row.name} row={row} />
						))}
					</>,
				);
			}

			elements.push(
				<div
					className={`letter-landscape page ${getColumnClassName(
						numColumns,
					)} ${getRowClassName(rowsPerPage)}`}
					key={counter}
				>
					{pageElements}
				</div>,
			);

			counter += numColumns * rowsPerPage;
		}

		return elements;
	}, selectedRows);

	return (
		<div>
			{selectedRows.length > 0 ? (
				<div className="export-page">{generatedCards}</div>
			) : (
				<Alert variant="danger">
					<i className="bi bi-exclamation-triangle" />
					&nbsp; No selected spells.
				</Alert>
			)}
		</div>
	);
};

export default ExportPage;
