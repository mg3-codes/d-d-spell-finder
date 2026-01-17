/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type React from "react";
import {
	type MouseEventHandler,
	useCallback,
	useContext,
	useState,
} from "react";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router";
import { Theme } from "../../enums/theme";
import type { TableRow } from "../../types/table-row";
import { PrintCard } from "../print-card";
import { ThemeContext } from "../theme-context-provider";

import "./styles.css";

export interface IPrintModalProps {
	isOpen: boolean;
	toggleIsOpen: () => void;
	rows?: TableRow[];
}

const PrintModal = ({
	isOpen,
	toggleIsOpen,
	rows,
}: IPrintModalProps): React.ReactElement => {
	const [selectedNumberPerRow, setSelectedNumberPerRow] = useState<number>(3);
	const [printError, setPrintError] = useState<boolean>(false);
	const { currentTheme } = useContext(ThemeContext);

	const clearPrintError = useCallback(() => setPrintError(false), []);

	const handleNumberPerRowClick: MouseEventHandler<HTMLElement> = useCallback(
		(e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
			const selection = (e.target as HTMLElement).getAttribute("data-cards");

			if (!selection) return;

			setSelectedNumberPerRow(Number.parseInt(selection, 10));
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
					<Alert variant="danger" dismissible onClose={clearPrintError}>
						<i className="bi bi-exclamation-triangle" />
						&nbsp; There was an error printing.
					</Alert>
				)}
				<div className="options">
					<div className="option">
						<Dropdown>
							<Dropdown.Toggle>
								Cards per Row&nbsp;
								<Badge bg="secondary">{selectedNumberPerRow}</Badge>
							</Dropdown.Toggle>
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
				</div>
				{rows?.length ? (
					<Carousel pause="hover">
						{rows?.map((row) => (
							<Carousel.Item key={`${row.name}-carousel-item`}>
								<div
									className={`preview-container ${
										currentTheme === Theme.Dark ? "dark" : ""
									}`}
								>
									<div className="preview">
										<PrintCard key={`${row.name}-print-card`} row={row} />
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
				<Link to={`/export?numPerRow=${selectedNumberPerRow}`}>
					<Button variant="success">Print</Button>
				</Link>
			</Modal.Footer>
		</Modal>
	);
};

export default PrintModal;
