/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { createContext, useState } from "react";
import { Column } from "../../enums/columns";
import { defaultSelectedColumns } from "../../utility/table-defaults";

export type ColumnContext = {
	selectedColumns: Column[];
	setSelectedColumns: React.Dispatch<React.SetStateAction<Column[]>>;
	handleColumnChange: (column: Column) => void;
};

export const ColumnContext = createContext<ColumnContext>({
	selectedColumns: defaultSelectedColumns,
	/* eslint-disable @typescript-eslint/no-empty-function */
	setSelectedColumns: () => {},
	handleColumnChange: () => {},
	/* eslint-enable @typescript-eslint/no-empty-function */
});

export interface IColumnContextProviderProps {
	children: React.ReactNode;
}

export const ColumnContextProvider = ({
	children,
}: IColumnContextProviderProps) => {
	const [selectedColumns, setSelectedColumns] = useState<Column[]>(
		defaultSelectedColumns,
	);

	const handleColumnChange = (column: Column): void => {
		if (selectedColumns.find((value) => column === value) === undefined)
			setSelectedColumns([...selectedColumns, column]);
		else
			setSelectedColumns(
				selectedColumns.filter((value) => value !== column),
			);
	};

	return (
		<ColumnContext.Provider
			value={{ selectedColumns, setSelectedColumns, handleColumnChange }}
		>
			{children}
		</ColumnContext.Provider>
	);
};
