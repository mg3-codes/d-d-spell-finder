/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import Table from "react-bootstrap/Table";

import { EdgeDiceSymbol } from "../edge-dice-symbol";
import { EdgeOfTheEmpireDiceSymbol } from "../../enums/edge-of-the-empire-dice-symbol";

import "./edge-symbol-key.scss";

export const EdgeSymbolKey = () => {
	return (
		<Table className="symbols-table" bordered>
			<thead>
				<tr>
					<td colSpan={2}>Symbols</td>
				</tr>
			</thead>
			<tbody className="key">
				<tr>
					<td>Success</td>
					<td>Failure</td>
				</tr>
				<tr className="symbols">
					<td>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
							color
						/>
					</td>
					<td>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
							color
						/>
					</td>
				</tr>
				<tr>
					<td>Advantage</td>
					<td>Threat</td>
				</tr>
				<tr className="symbols">
					<td>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
							color
						/>
					</td>
					<td>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
							color
						/>
					</td>
				</tr>
				<tr>
					<td>Triumph</td>
					<td>Despair</td>
				</tr>
				<tr className="symbols">
					<td>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Triumph}
							color
						/>
					</td>
					<td>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Despair}
							color
						/>
					</td>
				</tr>
				<tr>
					<td>Light Side</td>
					<td>Dark Side</td>
				</tr>
				<tr className="symbols">
					<td className="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.LightSide}
						/>
					</td>
					<td className="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.DarkSide}
						/>
					</td>
				</tr>
				<tr>
					<td>Blank</td>
					<td rowSpan={2} />
				</tr>
				<tr>
					<td>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Blank}
						/>
					</td>
				</tr>
			</tbody>
		</Table>
	);
};
