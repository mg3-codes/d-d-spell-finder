/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useEffect, useMemo, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import { CellClickedEvent, ColDef } from "ag-grid-community";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { buildRow } from "../../types/table-row";

import {
	defaultColDef,
	defaultColumnDefinitions,
} from "../../utility/table-defaults";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import spellData from "../../assets/5e-spells.json";
import Spell from "../../types/spell";
import { Column, mapColumnToDisplayName } from "../../enums/columns";

export interface ITableProps {
	selectedColumns: Column[];
}

export const Table = ({ selectedColumns }: ITableProps): JSX.Element => {
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [modalTitle, setModalTitle] = useState<string>("");
	const [modalText, setModalText] = useState<string>("");
	const gridRef = useRef<AgGridReact>(null);

	const showModalWithMessage = (message: string): void => {
		setModalText(message);
		setModalIsOpen(true);
	};

	const handleModalClose = () => setModalIsOpen(false);

	const onMaterialCellClicked = (event: CellClickedEvent<Spell>): void => {
		if (event?.data?.material) {
			setModalTitle("Material");
			showModalWithMessage(event?.data?.material);
		}
	};

	const onDetailsCellClicked = (event: CellClickedEvent<Spell>): void => {
		if (event?.data?.details) {
			setModalTitle("Details");
			showModalWithMessage(event?.data?.details);
		}
	};

	const startingColumnDefinition = useMemo<ColDef[]>(
		() =>
			defaultColumnDefinitions(
				onMaterialCellClicked,
				onDetailsCellClicked,
			),
		[],
	);

	const [columnDefinitions, setColumnDefinitions] = useState(
		startingColumnDefinition,
	);

	useEffect(() => {
		for (const columnDefinition of columnDefinitions) {
			if (columnDefinition.checkboxSelection === true) continue;
			if (
				selectedColumns.find(
					(value) =>
						columnDefinition.headerName ===
						mapColumnToDisplayName(value),
				) === undefined
			)
				columnDefinition.hide = true;
			else columnDefinition.hide = false;

			setColumnDefinitions([...columnDefinitions, columnDefinition]);
		}
	}, [selectedColumns]);

	return (
		<React.Fragment>
			<Modal show={modalIsOpen} onHide={handleModalClose}>
				<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{modalText}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleModalClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<div className="app ag-theme-alpine">
				<AgGridReact
					ref={gridRef}
					columnDefs={columnDefinitions}
					rowData={spellData.spells.map(buildRow)}
					defaultColDef={useMemo<ColDef>(() => defaultColDef, [])}
					animateRows={true}
					rowSelection="multiple"
					suppressRowClickSelection
				/>
			</div>
		</React.Fragment>
	);
};
