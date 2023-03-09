/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider as RollbarProvider, ErrorBoundary } from "@rollbar/react";

import { ColumnContextProvider } from "./components/column-context-provider";
import LoadingSpinner from "./components/loading-spinner";
import { ThemeContextProvider } from "./components/theme-context-provider";
import { SelectedRowContextProvider } from "./components/selected-row-context-provider";

const Index = React.lazy(() => import("./components/routes"));
const Export = React.lazy(() => import("./components/routes/export"));

const rollbarConfig = {
	accessToken: "9da11dd53b1c4323a3fb09861e6dd841",
	environment: import.meta.env.MODE,
	version: "0.1.8",
	enabled: import.meta.env.MODE === "production",
	captureUncaught: true,
	captureUnhandledRejections: true,
};

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
		<RollbarProvider config={rollbarConfig}>
			<ErrorBoundary>
				<Suspense fallback={<LoadingSpinner />}>
					<ThemeContextProvider>
						<ColumnContextProvider>
							<SelectedRowContextProvider>
								<RouterProvider router={router} />
							</SelectedRowContextProvider>
						</ColumnContextProvider>
					</ThemeContextProvider>
				</Suspense>
			</ErrorBoundary>
		</RollbarProvider>
	</React.StrictMode>,
);
