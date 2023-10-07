/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import { mapCharacterToDisplayName } from "../../enums/edge-of-the-empire-dice-symbol";

import "./edge-of-the-empire-dice-symbol-container.scss";

export interface IEdgeOfTheEmpireDiceSymbolContainer {
	symbol: string;
}

export const EdgeOfTheEmpireDiceSymbolContainer = ({
	symbol,
}: IEdgeOfTheEmpireDiceSymbolContainer) => {
	return (
		<div className="symbol-container">
			<OverlayTrigger
				overlay={<Tooltip>{mapCharacterToDisplayName(symbol)}</Tooltip>}
			>
				<span className="symbol">{symbol}</span>
			</OverlayTrigger>
		</div>
	);
};
