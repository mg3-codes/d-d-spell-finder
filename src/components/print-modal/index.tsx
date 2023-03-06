/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useContext, useState } from "react";
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

	const clearPrintError = useCallback(() => setPrintError(false), []);

	const handleNumberPerRowClick = useCallback(
		(e: React.BaseSyntheticEvent): void => {
			const selection = e.target.getAttribute("data-cards");
			setSelectedNumberPerRow(selection);
		},
		[],
	);

	const handleRowsPerPageClick = useCallback(
		(e: React.BaseSyntheticEvent): void => {
			const selection = parseInt(e.target.getAttribute("data-rows"));
			setSelectedRowsPerPage(selection);
		},
		[],
	);

	const handlePageSizeClick = useCallback(
		(e: React.BaseSyntheticEvent): void => {
			const selection: PageSize = e.target.getAttribute("data-size");
			setSelectedPageSize(selection);
		},
		[],
	);

	const handleOrientationClick = useCallback(
		(e: React.BaseSyntheticEvent): void => {
			const selection = e.target.getAttribute("data-orientation");
			setSelectedOrientation(selection);
		},
		[],
	);

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
						onClose={clearPrintError}
					>
						<i className="bi bi-exclamation-triangle" />
						&nbsp; There was an error printing.
					</Alert>
				)}
				<div className="options">
					<div className="option">
						<Dropdown>
							<Dropdown.Toggle>Cards per Row</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item
									onClick={handleNumberPerRowClick}
									active={selectedNumberPerRow === 1}
									data-cards={1}
								>
									1
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handleNumberPerRowClick}
									active={selectedNumberPerRow === 2}
									data-cards={2}
								>
									2
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handleNumberPerRowClick}
									active={selectedNumberPerRow === 3}
									data-cards={3}
								>
									3
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handleNumberPerRowClick}
									active={selectedNumberPerRow === 4}
									data-cards={4}
								>
									4
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="option">
						<Dropdown>
							<Dropdown.Toggle>Rows Per Page</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item
									onClick={handleRowsPerPageClick}
									active={selectedRowsPerPage === 1}
									data-rows={1}
								>
									1
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handleRowsPerPageClick}
									active={selectedRowsPerPage === 2}
									data-rows={2}
								>
									2
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handleRowsPerPageClick}
									active={selectedRowsPerPage === 3}
									data-rows={3}
								>
									3
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handleRowsPerPageClick}
									active={selectedRowsPerPage === 4}
									data-rows={4}
								>
									4
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="option">
						<Dropdown>
							<Dropdown.Toggle>Page Size</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item
									onClick={handlePageSizeClick}
									active={
										selectedPageSize === PageSize.Letter
									}
									data-size={PageSize.Letter}
								>
									{PageSize.Letter}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handlePageSizeClick}
									active={selectedPageSize === PageSize.Legal}
									data-size={PageSize.Legal}
								>
									{PageSize.Legal}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handlePageSizeClick}
									active={selectedPageSize === PageSize.A1}
									data-size={PageSize.A1}
								>
									{PageSize.A1}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handlePageSizeClick}
									active={selectedPageSize === PageSize.A2}
									data-size={PageSize.A2}
								>
									{PageSize.A2}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handlePageSizeClick}
									active={selectedPageSize === PageSize.A3}
									data-size={PageSize.A3}
								>
									{PageSize.A3}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handlePageSizeClick}
									active={selectedPageSize === PageSize.A4}
									data-size={PageSize.A4}
								>
									{PageSize.A4}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handlePageSizeClick}
									active={selectedPageSize === PageSize.A5}
									data-size={PageSize.A5}
								>
									{PageSize.A5}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handlePageSizeClick}
									active={selectedPageSize === PageSize.A6}
									data-size={PageSize.A6}
								>
									{PageSize.A6}
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<div className="option">
						<Dropdown>
							<Dropdown.Toggle>Orientation</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item
									onClick={handleOrientationClick}
									active={
										selectedOrientation ===
										Orientation.Landscape
									}
									data-orientation={Orientation.Landscape}
								>
									{Orientation.Landscape}
								</Dropdown.Item>
								<Dropdown.Item
									onClick={handleOrientationClick}
									active={
										selectedOrientation ===
										Orientation.Portrait
									}
									data-orientation={Orientation.Portrait}
								>
									{Orientation.Portrait}
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
				{rows?.length ? (
					<Carousel pause="hover">
						{rows?.map((row) => (
							<Carousel.Item key={`${row.name}-carousel-item`}>
								<div
									className={`preview-container ${
										currentTheme === Theme.Dark
											? "dark"
											: ""
									}`}
								>
									<div className="preview">
										<PrintCard
											key={`${row.name}-print-card`}
											row={row}
										/>
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
