/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, {
	useEffect,
	useMemo,
	useState,
	useRef,
	useContext,
	useCallback,
} from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { GetRowIdParams, ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { CellClickedEvent, ColDef } from "@ag-grid-community/core";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { buildRow, TableRow } from "../../types/table-row";

import {
	defaultColDef,
	defaultColumnDefinitions,
} from "../../utility/table-defaults";

import Spell from "../../types/spell";
import { mapColumnToDisplayName } from "../../enums/columns";
import { Theme } from "../../enums/theme";
import { ThemeContext } from "../theme-context-provider";
import { ColumnContext } from "../column-context-provider";
import { SelectedRowContext } from "../selected-row-context-provider";
import spellJson from "../../assets/5e-spells.json";

import "./table.scss";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Table = (): JSX.Element => {
	const [spellRows, setSpellRows] = useState<TableRow[] | null>();
	useEffect(() => {
		setSpellRows(spellJson.spells.map(buildRow));
	}, []);
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [modalTitle, setModalTitle] = useState<string>("");
	const [modalText, setModalText] = useState<string>("");
	const gridRef = useRef<AgGridReact>(null);
	const { currentTheme: selectedTheme } = useContext(ThemeContext);
	const { selectedColumns } = useContext(ColumnContext);
	const { selectedRows, setSelectedRows } = useContext(SelectedRowContext);

	const showModalWithMessage = (message: string): void => {
		setModalText(message);
		setModalIsOpen(true);
	};

	const handleModalClose = useCallback((): void => setModalIsOpen(false), []);

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

	const onRowSelectionChanged = useCallback((): void => {
		try {
			const rows = gridRef.current?.api.getSelectedRows() as TableRow[];

			setSelectedRows(rows);
		} catch (e) {
			console.error("error updating selected rows", e);
		}
	}, [selectedRows]);

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

	const setSelectionIfNeeded = useCallback((): void => {
		for (const row of selectedRows) {
			const gridRow = gridRef?.current?.api?.getRowNode(row.name);
			gridRow?.setSelected(true);
		}
	}, []);

	const getRowId = useMemo(() => {
		return (params: GetRowIdParams): string => params.data.name;
	}, []);

	return (
		<>
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
			<div
				className={`grid-container ag-theme-alpine${
					selectedTheme === Theme.Dark ? "-dark" : ""
				}`}
			>
				<AgGridReact
					ref={gridRef}
					columnDefs={columnDefinitions}
					onFirstDataRendered={setSelectionIfNeeded}
					rowData={spellRows}
					getRowId={getRowId}
					defaultColDef={useMemo<ColDef>(() => defaultColDef, [])}
					animateRows
					rowSelection="multiple"
					suppressRowClickSelection
					onSelectionChanged={onRowSelectionChanged}
				/>
			</div>
		</>
	);
};

export default Table;
