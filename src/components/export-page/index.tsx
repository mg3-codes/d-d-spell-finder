/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useContext } from "react";
import Alert from "react-bootstrap/Alert";

import { SelectedRowContext } from "../../selected-row-context-provider";
import { PrintCard } from "../print-card";

import "./export-page.scss";

const ExportPage = () => {
	const { selectedRows } = useContext(SelectedRowContext);

	return (
		<div>
			{selectedRows.length > 0 ? (
				<div className="export-page">
					{selectedRows.map((row, index) => (
						<PrintCard key={index} row={row} />
					))}
				</div>
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
