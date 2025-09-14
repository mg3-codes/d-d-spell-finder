/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import {
	type CellClickedEvent,
	CellStyleModule,
	ClientSideRowModelModule,
	type ColDef,
	type ColumnMovedEvent,
	CustomFilterModule,
	colorSchemeDark,
	type GetRowIdParams,
	ModuleRegistry,
	RowApiModule,
	RowSelectionModule,
	TextFilterModule,
	TooltipModule,
	themeQuartz,
	ValidationModule,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import spellJson from "../../assets/5e-spells.json";
import { mapColumnToDisplayName } from "../../enums/columns";
import { Theme } from "../../enums/theme";
import type Spell from "../../types/spell";
import { buildRow, type TableRow } from "../../types/table-row";
import { getCookie, setCookie } from "../../utility/cookies";
import {
	defaultColDef,
	getDefaultColumnDefinitions,
	getDefaultSelectionColumnDefinition,
	setColumnDefinitionOrder,
} from "../../utility/table-defaults";
import { AppSettingsContext } from "../app-settings-provider";
import { ColumnContext } from "../column-context-provider";
import { SelectedRowContext } from "../selected-row-context-provider";
import { ThemeContext } from "../theme-context-provider";

import "../../styles/ag-grid.css";
import "./styles.css";

ModuleRegistry.registerModules([
	CellStyleModule,
	ClientSideRowModelModule,
	CustomFilterModule,
	RowApiModule,
	RowSelectionModule,
	TextFilterModule,
	TooltipModule,
	ValidationModule,
]);

const cookieName = "columnDefinition";

const Table = (): React.ReactElement => {
   const [spellRows, setSpellRows] = useState<TableRow[] | null>();
   // Parse query params from URL
   const getQueryParams = (): Record<string, string> => {
	   if (typeof window === "undefined") return {};
	   const params = new URLSearchParams(window.location.search);
	   const result: Record<string, string> = {};
	   params.forEach((value, key) => {
		   result[key] = value;
	   });
	   return result;
   };
   useEffect(() => {
	   const handleFilter = () => {
		   const queryParams = getQueryParams();
		   let rows = spellJson.map(buildRow);
		   // Filter by name
		   if (queryParams.name) {
			   rows = rows.filter(row => row.name.toLowerCase().includes(queryParams.name.toLowerCase()));
		   }
		   // Filter by verbal
		   if (queryParams.verbal) {
			   const verbalValue = queryParams.verbal.toLowerCase() === "true";
			   rows = rows.filter(row => row.verbal === verbalValue);
		   }
		   setSpellRows(rows);
	   };
	   handleFilter();
	   window.addEventListener('popstate', handleFilter);
	   return () => {
		   window.removeEventListener('popstate', handleFilter);
	   };
   }, []);
   // You can now use getQueryParams() to access query params for filtering in the next steps.
	const { useCookies, setUseCookies } = useContext(AppSettingsContext);
	const { currentTheme: selectedTheme } = useContext(ThemeContext);
	const { selectedColumns } = useContext(ColumnContext);
	const { selectedRows, setSelectedRows } = useContext(SelectedRowContext);
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [modalTitle, setModalTitle] = useState<string>("");
	const [modalText, setModalText] = useState<string>("");
	const [showCookieToast, setShowCookieToast] = useState<boolean>(!useCookies);
	const gridRef = useRef<AgGridReact>(null);

	const showModalWithMessage = (message: string): void => {
		setModalText(message);
		setModalIsOpen(true);
	};

	const handleModalClose = useCallback((): void => setModalIsOpen(false), []);

	const onMaterialCellClicked = (event: CellClickedEvent<Spell>): void => {
		if (event?.data?.material) {
			setModalTitle(`${event?.data?.name} Material`);
			showModalWithMessage(event?.data?.material);
		}
	};

	const onDetailsCellClicked = (event: CellClickedEvent<Spell>): void => {
		if (event?.data?.details) {
			setModalTitle(`${event?.data?.name} Details`);
			showModalWithMessage(event?.data?.details);
		}
	};

	const onRowSelectionChanged = useCallback((): void => {
		try {
			const rows = gridRef.current?.api.getSelectedRows() as TableRow[];

			setSelectedRows(rows);
		} catch (e: unknown) {
			console.warn("error updating selected rows", e);
		}
	}, [setSelectedRows]);

	const onColumnMoved = useCallback(
		(event: ColumnMovedEvent<unknown>): void => {
			if (event.finished) {
				const orderedColIds = gridRef.current?.api
					.getColumns()
					?.filter((x) => x.isVisible())
					?.sort((a, b) => {
						const aLeft = a.getLeft() ?? 0;
						const bLeft = b.getLeft() ?? 0;

						return aLeft - bLeft;
					})
					.map((x) => x.getColId());

				if (orderedColIds)
					setCookie(cookieName, orderedColIds.toString(), false);
			}
		},
		[],
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies: this only needs to execute on first render
	const startingColumnDefinition = useMemo<ColDef[]>(() => {
		const def = getDefaultColumnDefinitions(
			onMaterialCellClicked,
			onDetailsCellClicked,
		);

		if (!useCookies) return def;

		const cookie = getCookie(cookieName);

		if (!cookie) return def;

		return setColumnDefinitionOrder(def, cookie?.split(","));
	}, []);

	const selectionColumnDefinition = useMemo<ColDef>(
		getDefaultSelectionColumnDefinition,
		[],
	);

	const [columnDefinitions, setColumnDefinitions] = useState(
		startingColumnDefinition,
	);

	// biome-ignore lint/correctness/useExhaustiveDependencies(columnDefinitions): including this will cause re-render loop
	// biome-ignore lint/correctness/useExhaustiveDependencies(columnDefinitions.filter): including this will cause re-render loop
	useEffect(() => {
		for (const columnDefinition of columnDefinitions) {
			if (columnDefinition.checkboxSelection === true) continue;
			if (
				selectedColumns.find(
					(value) =>
						columnDefinition.headerName === mapColumnToDisplayName(value),
				) === undefined
			)
				columnDefinition.hide = true;
			else columnDefinition.hide = false;

			setColumnDefinitions([
				...columnDefinitions.filter((x) => x.field !== columnDefinition.field),
				columnDefinition,
			]);
		}
	}, [selectedColumns]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: this only needs to execute on first render
	const setSelectionIfNeeded = useCallback((): void => {
		for (const row of selectedRows) {
			const gridRow = gridRef?.current?.api?.getRowNode(row.name);
			gridRow?.setSelected(true);
		}
	}, []);

	const getRowId = useMemo((): ((params: GetRowIdParams) => string) => {
		return (params: GetRowIdParams<Spell>): string => params.data.name;
	}, []);

	const acceptCookies = useCallback((): void => {
		setShowCookieToast(false);
		setUseCookies(true);
	}, [setUseCookies]);

	const rejectCookies = useCallback((): void => {
		setShowCookieToast(false);
	}, []);

	return (
		<>
			<Modal show={modalIsOpen} onHide={handleModalClose}>
				<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ whiteSpace: "pre-line" }}>{modalText}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleModalClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<div className={"grid-container"}>
				<AgGridReact
					ref={gridRef}
					theme={
						selectedTheme === Theme.Dark
							? themeQuartz.withPart(colorSchemeDark)
							: themeQuartz
					}
					columnDefs={columnDefinitions}
					onFirstDataRendered={setSelectionIfNeeded}
					rowData={spellRows}
					getRowId={getRowId}
					defaultColDef={useMemo<ColDef>(() => defaultColDef, [])}
					animateRows
					selectionColumnDef={selectionColumnDefinition}
					rowSelection={{
						mode: "multiRow",
						checkboxes: true,
						headerCheckbox: true,
						enableClickSelection: false,
					}}
					onSelectionChanged={onRowSelectionChanged}
					onColumnMoved={onColumnMoved}
				/>
			</div>
			<div
				style={{
					width: "98vw",
					height: "98vh",
					position: "fixed",
					top: 0,
					left: 0,
					pointerEvents: "none",
				}}
			>
				<ToastContainer position="bottom-end">
					<Toast show={showCookieToast}>
						<Toast.Header closeButton={false}>
							<strong className="me-auto">Allow Cookies?</strong>
						</Toast.Header>
						<Toast.Body>
							<div className="cookie-toast-content">
								<p>
									We don&apos;t use these cookies to track you. It allows us to
									save some preferences so we can load your settings and table
									layout when you return.
								</p>
								<p>
									See exactly what we do with cookies{" "}
									<a
										href="https://github.com/search?q=repo%3Amg3-codes%2Fd-d-spell-finder%20cookie&type=code"
										target="_blank"
										rel="noopener noreferrer"
									>
										here
										<i className="bi bi-box-arrow-up-right" />
									</a>
								</p>
								<div>
									<Button variant="success" onClick={acceptCookies}>
										Accept
									</Button>
									<Button variant="outline-danger" onClick={rejectCookies}>
										Reject
									</Button>
								</div>
							</div>
						</Toast.Body>
					</Toast>
				</ToastContainer>
			</div>
		</>
	);
};

export default Table;
