/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { OverlayTrigger, Tooltip } from "react-bootstrap";

import {
	type EdgeOfTheEmpireDiceSymbol,
	mapSymbolToCharacter,
	mapSymbolToDisplayName,
} from "../../enums/edge-of-the-empire-dice-symbol";

import "./edge-dice-symbol.css";

export interface IEdgeDiceSymbol {
	symbol: EdgeOfTheEmpireDiceSymbol;
	color?: boolean;
}

export const EdgeDiceSymbol = ({ symbol, color }: IEdgeDiceSymbol) => {
	return (
		<div className="symbol-container">
			<OverlayTrigger
				overlay={<Tooltip>{mapSymbolToDisplayName(symbol)}</Tooltip>}
			>
				<span
					className={`symbol ${
						color && mapSymbolToDisplayName(symbol).toLowerCase()
					}`}
				>
					{mapSymbolToCharacter(symbol)}
				</span>
			</OverlayTrigger>
		</div>
	);
};
