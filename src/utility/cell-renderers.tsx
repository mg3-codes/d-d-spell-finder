/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type { CustomCellRendererProps } from "ag-grid-react";

/**
 * Renders a boolean value as a checkmark or cross icon.
 *
 * @param props - The properties for the custom cell renderer.
 * @param props.value - The boolean value to render.
 * @returns A React element containing a checkmark if the value is true, or a cross if the value is false.
 */
export const booleanCellRenderer = (
	props: CustomCellRendererProps<boolean>,
): React.ReactElement => (
	<div className="d-flex justify-content-center align-items-center h-100 p-0">
		{props?.value ? "✅" : "❌"}
	</div>
);
