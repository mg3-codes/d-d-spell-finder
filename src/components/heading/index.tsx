/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useState, useContext, useCallback } from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

import { SelectedRowContext } from "../selected-row-context-provider";

const PrintModal = React.lazy(() => import("../print-modal"));
const SettingsOffcanvas = React.lazy(() => import("../settings-offcanvas"));

import "./heading.scss";

const Heading = () => {
	const { selectedRows } = useContext(SelectedRowContext);
	const [printModalIsOpen, setPrintModalIsOpen] = useState<boolean>(false);
	const location = useLocation();

	const togglePrintModalIsOpen = useCallback(
		(): void => setPrintModalIsOpen(!printModalIsOpen),
		[printModalIsOpen],
	);

	return (
		<div className="heading">
			<h1>D&D Spell Finder</h1>
			<div className="header-buttons">
				{location.pathname !== "/" && (
					<Link to={"/"}>
						<Button variant="outline-primary">
							<i className="bi bi-magic" />
							&nbsp; Spells
						</Button>
					</Link>
				)}
				{location.pathname !== "/dice-roller" && (
					<Link to={"/dice-roller"} style={{ marginRight: 6 }}>
						<Button variant="outline-primary">
							<i className="bi bi-dice-6" />
							&nbsp; Dice Roller
						</Button>
					</Link>
				)}
				{location.pathname === "/" && (
					<>
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
					</>
				)}
				<SettingsOffcanvas />
			</div>
		</div>
	);
};

export default Heading;
