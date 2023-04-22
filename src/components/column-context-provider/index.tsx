/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { createContext, useContext, useEffect, useState } from "react";
import { Column } from "../../enums/columns";
import { defaultSelectedColumns } from "../../utility/table-defaults";
import { getCookie, setCookie } from "../../utility/cookies";
import { AppSettingsContext } from "../app-settings-provider";

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

const cookieName = "selectedColumns";

export const ColumnContextProvider = ({
	children,
}: IColumnContextProviderProps) => {
	const { useCookies } = useContext(AppSettingsContext);
	const [selectedColumns, setSelectedColumns] = useState<Column[]>(() => {
		const cookie = getCookie(cookieName);

		if (cookie && useCookies)
			return cookie.split(",").map((x) => parseInt(x));

		return defaultSelectedColumns;
	});

	useEffect(() => {
		if (useCookies)
			setCookie(cookieName, selectedColumns.toString(), false);
	}, [selectedColumns]);

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
