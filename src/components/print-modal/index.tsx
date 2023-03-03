/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";

import { PrintCard } from "../print-card";
import { ThemeContext } from "../theme-context-provider";

import { Theme } from "../../enums/theme";
import { PageSize } from "../../enums/page-size";
import { TableRow } from "../../types/table-row";

import "./print-modal.scss";

enum ExportType {
	Card = "Card",
	Spreadsheet = "Spreadsheet",
}

enum Orientation {
	Portrait = "Portrait",
	Landscape = "Landscape",
}

export interface IPrintModalProps {
	isOpen: boolean;
	toggleIsOpen: () => void;
	rows?: TableRow[];
}

const PrintModal = ({ isOpen, toggleIsOpen, rows }: IPrintModalProps) => {
	const [selectedExportType, setSelectedExportType] = useState<ExportType>(
		ExportType.Card,
	);
	const [selectedNumberPerRow, setSelectedNumberPerRow] = useState<number>(3);
	const [selectedRowsPerPage, setSelectedRowsPerPage] = useState<number>(2);
	const [selectedPageSize, setSelectedPageSize] = useState<PageSize>(
		PageSize.Letter,
	);
	const [selectedOrientation, setSelectedOrientation] = useState<Orientation>(
		Orientation.Landscape,
	);
	const [printError, setPrintError] = useState<boolean>(false);
	const { currentTheme } = useContext(ThemeContext);

	const handleNumberPerRowClick = (selection: number): void =>
		setSelectedNumberPerRow(selection);

	const handleExportTypeClick = (selection: ExportType): void =>
		setSelectedExportType(selection);

	const handleRowsPerPageClick = (selection: number): void =>
		setSelectedRowsPerPage(selection);

	const handlePageSizeClick = (selection: PageSize): void =>
		setSelectedPageSize(selection);

	const handleOrientationClick = (selection: Orientation): void =>
		setSelectedOrientation(selection);

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
					<div className="option">
						<Dropdown>
							<Dropdown.Toggle
								disabled={
									selectedExportType !== ExportType.Card
								}
							>
								Rows Per Page
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item
									onClick={() => handleRowsPerPageClick(1)}
									active={selectedRowsPerPage === 1}
								>
									1
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => handleRowsPerPageClick(2)}
									active={selectedRowsPerPage === 2}
								>
									2
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => handleRowsPerPageClick(3)}
									active={selectedRowsPerPage === 3}
								>
									3
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() => handleRowsPerPageClick(4)}
									active={selectedRowsPerPage === 4}
								>
									4
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
								Page Size
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item
									onClick={() =>
										handlePageSizeClick(PageSize.Letter)
									}
									active={
										selectedPageSize === PageSize.Letter
									}
								>
									{PageSize.Letter}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() =>
										handlePageSizeClick(PageSize.Legal)
									}
									active={selectedPageSize === PageSize.Legal}
								>
									{PageSize.Legal}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() =>
										handlePageSizeClick(PageSize.A1)
									}
									active={selectedPageSize === PageSize.A1}
								>
									{PageSize.A1}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() =>
										handlePageSizeClick(PageSize.A2)
									}
									active={selectedPageSize === PageSize.A2}
								>
									{PageSize.A2}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() =>
										handlePageSizeClick(PageSize.A3)
									}
									active={selectedPageSize === PageSize.A3}
								>
									{PageSize.A3}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() =>
										handlePageSizeClick(PageSize.A4)
									}
									active={selectedPageSize === PageSize.A4}
								>
									{PageSize.A4}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() =>
										handlePageSizeClick(PageSize.A5)
									}
									active={selectedPageSize === PageSize.A5}
								>
									{PageSize.A5}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() =>
										handlePageSizeClick(PageSize.A6)
									}
									active={selectedPageSize === PageSize.A6}
								>
									{PageSize.A6}
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
								Orientation
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item
									onClick={() =>
										handleOrientationClick(
											Orientation.Landscape,
										)
									}
									active={
										selectedOrientation ===
										Orientation.Landscape
									}
								>
									{Orientation.Landscape}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={() =>
										handleOrientationClick(
											Orientation.Portrait,
										)
									}
									active={
										selectedOrientation ===
										Orientation.Portrait
									}
								>
									{Orientation.Portrait}
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
				{rows?.length ? (
					<Carousel pause="hover">
						{rows?.map((row, index) => (
							<Carousel.Item key={index}>
								<div
									className={`preview-container ${
										currentTheme === Theme.Dark
											? "dark"
											: ""
									}`}
								>
									<div className="preview">
										<PrintCard key={index} row={row} />
									</div>
								</div>
							</Carousel.Item>
						))}
					</Carousel>
				) : null}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-secondary" onClick={toggleIsOpen}>
					Close
				</Button>
				<Link
					to={`/export?numPerRow=${selectedNumberPerRow}&rowsPerPage=${selectedRowsPerPage}&paperSize=${selectedPageSize.toLowerCase()}&orientation=${selectedOrientation.toLowerCase()}`}
				>
					<Button variant="success">Print</Button>
				</Link>
			</Modal.Footer>
		</Modal>
	);
};

export default PrintModal;
