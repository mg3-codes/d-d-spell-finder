/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useState, useContext, useCallback } from "react";
import Button from "react-bootstrap/Button";
const PrintModal = React.lazy(() => import("../print-modal"));
const SettingsOffcanvas = React.lazy(() => import("../settings-offcanvas"));
import { SelectedRowContext } from "../selected-row-context-provider";

const Heading = () => {
	const { selectedRows } = useContext(SelectedRowContext);
	const [printModalIsOpen, setPrintModalIsOpen] = useState<boolean>(false);

	const togglePrintModalIsOpen = useCallback(
		(): void => setPrintModalIsOpen(!printModalIsOpen),
		[printModalIsOpen],
	);

	return (
		<div className="heading">
			<h1>D&D Spell Details</h1>
			<div className="header-buttons">
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
	);
};

export default Heading;
