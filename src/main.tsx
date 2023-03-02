/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ColumnContextProvider } from "./components/column-context-provider";
import LoadingSpinner from "./components/loading-spinner";
import { ThemeContextProvider } from "./components/theme-context-provider";
import { SelectedRowContextProvider } from "./selected-row-context-provider";

const Index = React.lazy(() => import("./components/routes"));
const Export = React.lazy(() => import("./components/routes/export"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "/export",
		element: <Export />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<ColumnContextProvider>
				<SelectedRowContextProvider>
					<Suspense fallback={<LoadingSpinner />}>
						<RouterProvider router={router} />
					</Suspense>
				</SelectedRowContextProvider>
			</ColumnContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
);
