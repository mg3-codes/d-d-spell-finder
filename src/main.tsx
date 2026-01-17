/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";

import { AppSettingsContextProvider } from "./components/app-settings-provider";
import { ColumnContextProvider } from "./components/column-context-provider";
import { ErrorBoundary } from "./components/error-boundary";
import LoadingSpinner from "./components/loading-spinner";
import { SelectedRowContextProvider } from "./components/selected-row-context-provider";
import { ThemeContextProvider } from "./components/theme-context-provider";

import "./styles/main.css";

const Index = React.lazy(() => import("./components/routes"));
const DiceRoller = React.lazy(() => import("./components/routes/dice-roller"));
const Export = React.lazy(() => import("./components/routes/export"));
const NotFound = React.lazy(() => import("./components/routes/not-found"));
const Grammarian = React.lazy(() => import("./components/routes/grammarian"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/dice-roller",
		element: <DiceRoller />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/grammarian",
		element: <Grammarian />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/dice",
		element: <Navigate to="/dice-roller" replace />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/roller",
		element: <Navigate to="/dice-roller" replace />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/export",
		element: <Export />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "/404",
		element: <NotFound />,
		errorElement: <ErrorBoundary />,
	},
	{
		path: "*",
		element: <Navigate to="/404" replace />,
		errorElement: <ErrorBoundary />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Suspense fallback={<LoadingSpinner />}>
			<AppSettingsContextProvider>
				<ThemeContextProvider>
					<ColumnContextProvider>
						<SelectedRowContextProvider>
							<RouterProvider router={router} />
						</SelectedRowContextProvider>
					</ColumnContextProvider>
				</ThemeContextProvider>
			</AppSettingsContextProvider>
		</Suspense>
	</React.StrictMode>,
);
