/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense } from "react";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import {
	createStaticHandler,
	createStaticRouter,
	StaticRouterProvider,
} from "react-router-dom/server";
import { Provider as RollbarProvider, ErrorBoundary } from "@rollbar/react";

import { ColumnContextProvider } from "./components/column-context-provider";
import LoadingSpinner from "./components/loading-spinner";
import { ThemeContextProvider } from "./components/theme-context-provider";
import { SelectedRowContextProvider } from "./components/selected-row-context-provider";
import { AppSettingsContextProvider } from "./components/app-settings-provider";

const Index = React.lazy(() => import("./components/routes"));
const DiceRoller = React.lazy(() => import("./components/routes/dice-roller"));
const Search = React.lazy(() => import("./components/routes/search"));
const Spell = React.lazy(() => import("./components/routes/spell"));
const Export = React.lazy(() => import("./components/routes/export"));
const NotFound = React.lazy(() => import("./components/routes/not-found"));

const rollbarConfig = {
	accessToken: "9da11dd53b1c4323a3fb09861e6dd841",
	environment: import.meta.env.MODE,
	enabled: import.meta.env.MODE === "production",
	captureUncaught: true,
	captureUnhandledRejections: true,
	/* eslint-disable camelcase */
	code_version: "0.5.4",
	source_map_enabled: true,
	/* eslint-enable camelcase */
};

const routes = [
	{
		path: "/",
		element: <Index />,
	},
	{
		path: "/dice-roller",
		element: <DiceRoller />,
	},
	{
		path: "/search",
		element: <Search />,
	},
	{
		path: "/spell/5e/:spellLink",
		element: <Spell />,
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
];

const App = (req: Request) => {
	const { query } = createStaticHandler(routes);

	let context;
	query(req).then(() => context);
	if (context instanceof Response) throw context;

	const browserRouter = createBrowserRouter(routes);
	const staticRouter = createStaticRouter(routes, context);

	return (
		<RollbarProvider config={rollbarConfig}>
			<ErrorBoundary>
				<Suspense fallback={<LoadingSpinner />}>
					<AppSettingsContextProvider>
						<ThemeContextProvider>
							<ColumnContextProvider>
								<SelectedRowContextProvider>
									{document ? (
										<RouterProvider
											router={browserRouter}
											future={{
												v7_startTransition: true,
											}}
										/>
									) : (
										<StaticRouterProvider
											router={staticRouter}
											context={context}
										/>
									)}
								</SelectedRowContextProvider>
							</ColumnContextProvider>
						</ThemeContextProvider>
					</AppSettingsContextProvider>
				</Suspense>
			</ErrorBoundary>
		</RollbarProvider>
	);
};

export default App;
