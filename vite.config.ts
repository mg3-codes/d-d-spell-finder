/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		strictPort: true,
	},
	preview: {
		port: 3000,
		strictPort: true,
	},
	resolve: {
		alias: {
			"~ag-grid-community": path.resolve(
				__dirname,
				"node_modules/ag-grid-community",
			),
		},
	},
	css: {
		transformer: "lightningcss"
	},
	build: {
		cssMinify: "lightningcss",
		sourcemap: true,
		rollupOptions: {
			output: {
				manualChunks: {
					"ag-grid-community-core": ["@ag-grid-community/core"],
					"ag-grid-community-react": ["@ag-grid-community/react"],
					"ag-grid-community-client-side-row-model": [
						"@ag-grid-community/client-side-row-model",
					],
				},
				assetFileNames: "[hash].g.[ext]",
				chunkFileNames: "[hash].g.js",
				banner:
					"/*! Copyright © 2023 Michael Gamlem III | github.com/mg3-codes | github.com/mgamlem3 | MIT License applies to code | CC-BY-4.0 applies to D&D content **/",
				footer:
					"/*! This work includes material taken from the System Reference Document 5.1 (“SRD 5.1”) by Wizards of the Coast LLC and available at https://dnd.wizards.com/resources/systems-reference-document. The SRD 5.1 is licensed under the Creative Commons Attribution 4.0 International License available at https://creativecommons.org/licenses/by/4.0/legalcode. */",
			},
		},
	},
});
