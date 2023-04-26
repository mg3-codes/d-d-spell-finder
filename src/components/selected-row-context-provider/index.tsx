/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useState, createContext } from "react";

import { TableRow } from "../../types/table-row";

export type SelectedRowContext = {
	selectedRows: TableRow[];
	setSelectedRows: React.Dispatch<React.SetStateAction<TableRow[]>>;
};

export const SelectedRowContext = createContext<SelectedRowContext>({
	selectedRows: [],
	/* eslint-disable @typescript-eslint/no-empty-function */
	// skipqc: JS-0321
	setSelectedRows: () => {},
	/* eslint-enable @typescript-eslint/no-empty-function */
});

export interface ISelectedRowContextProviderProps {
	children: React.ReactNode;
}

export const SelectedRowContextProvider = ({
	children,
}: ISelectedRowContextProviderProps) => {
	const [selectedRows, setSelectedRows] = useState<TableRow[]>([]);

	return (
		<SelectedRowContext.Provider value={{ selectedRows, setSelectedRows }}>
			{children}
		</SelectedRowContext.Provider>
	);
};
