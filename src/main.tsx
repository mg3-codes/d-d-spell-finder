/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { ErrorBoundary, Provider as RollbarProvider } from "@rollbar/react";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Navigate, createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { AppSettingsContextProvider } from "./components/app-settings-provider";
import { ColumnContextProvider } from "./components/column-context-provider";
import LoadingSpinner from "./components/loading-spinner";
import { SelectedRowContextProvider } from "./components/selected-row-context-provider";
import { ThemeContextProvider } from "./components/theme-context-provider";

import "./styles/main.css";

const Index = React.lazy(() => import("./components/routes"));
const DiceRoller = React.lazy(() => import("./components/routes/dice-roller"));
const Export = React.lazy(() => import("./components/routes/export"));
const NotFound = React.lazy(() => import("./components/routes/not-found"));
const Grammarian = React.lazy(() => import("./components/routes/grammarian"));

const rollbarConfig = {
	accessToken: "9da11dd53b1c4323a3fb09861e6dd841",
	environment: import.meta.env.MODE,
	enabled: import.meta.env.MODE === "production",
	captureUncaught: true,
	captureUnhandledRejections: true,
	code_version: "0.6.2",
	source_map_enabled: true,
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "/dice-roller",
		element: <DiceRoller />,
	},
	{
		path: "/grammarian",
		element: <Grammarian />,
	},
	{
		path: "/dice",
		element: <Navigate to="/dice-roller" replace />,
	},
	{
		path: "/roller",
		element: <Navigate to="/dice-roller" replace />,
	},
	{
		path: "/export",
		element: <Export />,
	},
	{
		path: "/404",
		element: <NotFound />,
	},
	{
		path: "*",
		element: <Navigate to="/404" replace />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RollbarProvider config={rollbarConfig}>
			<ErrorBoundary>
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
			</ErrorBoundary>
		</RollbarProvider>
	</React.StrictMode>,
);
