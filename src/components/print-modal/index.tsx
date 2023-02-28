/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useContext, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

import { PrintCard } from "../print-card";
import { ThemeContext } from "../theme-context-provider";

import { Theme } from "../../enums/theme";
import { TableRow } from "../../types/table-row";

import "./print-modal.scss";
import html2canvas from "html2canvas";

enum ExportType {
	Card = "Card",
	Spreadsheet = "Spreadsheet",
}

export interface IPrintModalProps {
	isOpen: boolean;
	toggleIsOpen: () => void;
	rows?: TableRow[];
}

export const PrintModal = ({
	isOpen,
	toggleIsOpen,
	rows,
}: IPrintModalProps) => {
	const [selectedNumberPerRow, setSelectedNumberPerRow] = useState<number>(1);
	const [selectedExportType, setSelectedExportType] = useState<ExportType>(
		ExportType.Card,
	);
	const [printError, setPrintError] = useState<boolean>(false);
	const { currentTheme } = useContext(ThemeContext);

	const handleNumberPerRowClick = (selection: number): void =>
		setSelectedNumberPerRow(selection);

	const handleExportTypeClick = (selection: ExportType): void =>
		setSelectedExportType(selection);

	const print = async (): Promise<void> => {
		try {
			const printingContent = document.getElementById("print-area");

			if (!printingContent) throw "no printing content";

			html2canvas(printingContent, {
				backgroundColor: null,
			}).then((canvas) => {
				const contentDataURL = canvas.toDataURL("image/png");
				if (!contentDataURL) throw "no image url";

				const image = new Image();
				image.src = contentDataURL;

				const printWindow = window.open(
					"",
					"",
					"toolbar=0,scrollbars=0,status=0",
				);

				if (!printWindow) throw "no printing window opened";

				printWindow?.document.write(image.outerHTML);
				printWindow?.document.close();
				printWindow?.focus();
			});
		} catch (e) {
			console.error("Error printing");
			console.error(e);
			setPrintError(true);
		}
	};

	return (
		<Modal show={isOpen}>
			<Modal.Header>
				<Modal.Title>Print</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{!rows?.length && (
					<Alert variant="warning">
						<i className="bi bi-exclamation-circle" />
						&nbsp; You didn&apos;t select any spells
					</Alert>
				)}
				{printError && (
					<Alert
						variant="danger"
						dismissible
						onClose={() => setPrintError(false)}
					>
						<i className="bi bi-exclamation-triangle" />
						&nbsp; There was an error printing.
					</Alert>
				)}
				<div className="options">
					<div className="option">
						<Dropdown>
							<Dropdown.Toggle>Export Type</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item
									onClick={() =>
										handleExportTypeClick(ExportType.Card)
									}
									active={
										selectedExportType === ExportType.Card
									}
								>
									{ExportType[ExportType.Card]}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() =>
										handleExportTypeClick(
											ExportType.Spreadsheet,
										)
									}
									active={
										selectedExportType ===
										ExportType.Spreadsheet
									}
								>
									{ExportType[ExportType.Spreadsheet]}
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="option">
						<Dropdown>
							<Dropdown.Toggle
								disabled={
									selectedExportType !== ExportType.Card
								}
							>
								Cards per Row
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item
									onClick={() => handleNumberPerRowClick(1)}
									active={selectedNumberPerRow === 1}
								>
									1
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => handleNumberPerRowClick(2)}
									active={selectedNumberPerRow === 2}
								>
									2
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => handleNumberPerRowClick(3)}
									active={selectedNumberPerRow === 3}
								>
									3
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => handleNumberPerRowClick(4)}
									active={selectedNumberPerRow === 4}
								>
									4
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
				<div
					className={`preview-container ${
						currentTheme === Theme.Dark ? "dark" : ""
					}`}
				>
					<div className="preview" id="print-area">
						{rows?.map((row, index) => (
							<PrintCard key={index} row={row} />
						))}
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-danger" onClick={toggleIsOpen}>
					Close
				</Button>
				<Button variant="success" onClick={print}>
					Print
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
