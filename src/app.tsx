/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { ErrorBoundary, Provider as RollbarProvider } from "@rollbar/react";
import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppSettingsContextProvider } from "./components/app-settings-provider";
import { ColumnContextProvider } from "./components/column-context-provider";
import LoadingSpinner from "./components/loading-spinner";
import { SelectedRowContextProvider } from "./components/selected-row-context-provider";
import { ThemeContextProvider } from "./components/theme-context-provider";

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

const App = () => {
	return (
		<RollbarProvider config={rollbarConfig}>
			<ErrorBoundary>
				<Suspense fallback={<LoadingSpinner />}>
					<AppSettingsContextProvider>
						<ThemeContextProvider>
							<ColumnContextProvider>
								<SelectedRowContextProvider>
									<Routes>
										<Route index element={<Index />} />
										<Route
											path="/dice-roller"
											element={<DiceRoller />}
										/>
										<Route
											path="/search"
											element={<Search />}
										/>
										<Route
											path="/spell/5e/:spellLink"
											element={<Spell />}
										/>
										<Route
											path="/dice"
											element={
												<Navigate
													to="/dice-roller"
													replace
												/>
											}
										/>
										<Route
											path="/roller"
											element={
												<Navigate
													to="/dice-roller"
													replace
												/>
											}
										/>
										<Route
											path="/export"
											element={<Export />}
										/>
										<Route
											path="/404"
											element={<NotFound />}
										/>
										<Route
											path="*"
											element={
												<Navigate to="/404" replace />
											}
										/>
									</Routes>
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
