/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { useCallback, useContext, useEffect, useMemo } from "react";
import Alert from "react-bootstrap/Alert";
import { useSearchParams } from "react-router";

import { Theme } from "../../enums/theme";
import { PrintCard } from "../print-card";
import { SelectedRowContext } from "../selected-row-context-provider";
import { ThemeContext } from "../theme-context-provider";

import "./styles.css";

export interface IExportPageQueryParams {
	numPerRow?: number;
	rowsPerPage: number;
}

const ExportPage = () => {
	const { selectedRows } = useContext(SelectedRowContext);
	const [queryParams] = useSearchParams();
	const { currentTheme, updateTheme } = useContext(ThemeContext);

	// biome-ignore lint/correctness/useExhaustiveDependencies(currentTheme): this only needs to execute on page load
	// biome-ignore lint/correctness/useExhaustiveDependencies(updateTheme): this only needs to execute on page load
	useEffect(() => {
		const userSelectedTheme = currentTheme;
		let themeOverridden = false;

		if (currentTheme !== Theme.Light) {
			themeOverridden = true;
			updateTheme(Theme.Light);
		}

		return () => {
			if (themeOverridden) updateTheme(userSelectedTheme);
		};
	}, []);

	// biome-ignore lint/correctness/useExhaustiveDependencies(queryParams): change should occur when query params change
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

	// biome-ignore lint/correctness/useExhaustiveDependencies(getColumnClassName): this should only execute on page load
	// biome-ignore lint/correctness/useExhaustiveDependencies(queryParams.get): this should only execute on page load
	const generatedCards = useMemo(() => {
		const elements: React.ReactNode[] = [];
		const numColumns = Number.parseInt(queryParams.get("numPerRow") ?? "3", 10);
		const rowsPerPage = 2;
		let counter = 0;
		while (counter <= selectedRows.length) {
			const pageElements: React.ReactNode[] = [];
			for (let i = 0; i < rowsPerPage; i++) {
				const rowSlice = selectedRows.slice(
					i * numColumns + counter,
					i * numColumns + counter + numColumns,
				);

				pageElements.push(
					rowSlice.map((row) => <PrintCard key={row.name} row={row} />),
				);
			}

			elements.push(
				<div
					className={`letter-landscape page ${getColumnClassName(
						numColumns,
					)} two-rows`}
					key={counter}
				>
					{pageElements}
				</div>,
			);

			counter += numColumns * rowsPerPage;
		}

		return elements;
	}, [selectedRows]);

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
