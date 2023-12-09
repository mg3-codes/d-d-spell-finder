/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import Table from "react-bootstrap/Table";

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
					<td className="success">s</td>
					<td className="failure">f</td>
				</tr>
				<tr>
					<td>Advantage</td>
					<td>Threat</td>
				</tr>
				<tr className="symbols">
					<td className="advantage">a</td>
					<td className="threat">t</td>
				</tr>
				<tr>
					<td>Triumph</td>
					<td>Despair</td>
				</tr>
				<tr className="symbols">
					<td className="triumph">x</td>
					<td className="despair">y</td>
				</tr>
				<tr>
					<td>Light Side</td>
					<td>Dark Side</td>
				</tr>
				<tr className="symbols">
					<td className="force">Z</td>
					<td className="force">z</td>
				</tr>
				<tr>
					<td>Blank</td>
					<td rowSpan={2} />
				</tr>
				<tr>
					<td>☐</td>
				</tr>
			</tbody>
		</Table>
	);
};
