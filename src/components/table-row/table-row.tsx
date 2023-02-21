/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useState } from "react";
import Form from "react-bootstrap/Form";

type TableRowProps = {
	name?: string;
	level?: number;
	school?: string;
	castingTime?: string;
	duration?: string;
	range?: number | string;
	area?: string;
	attack?: string;
	save?: string;
	damageAndEffect?: string;
	ritual?: boolean;
	concentration?: boolean;
	verbal?: boolean;
	somatic?: boolean;
	material?: string;
	source?: string;
	details?: string;
	link?: string;
};

const TableRow = ({
	name,
	level,
	school,
	castingTime,
	duration,
	range,
	area,
	attack,
	save,
	damageAndEffect,
	ritual,
	concentration,
	verbal,
	somatic,
	material,
	source,
	details,
	link,
}: TableRowProps) => {
	const [checked, setChecked] = useState(false);

	return (
		<tr>
			<td>
				<Form.Check
					inline
					type="checkbox"
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>
			</td>
			<td>{name}</td>
			<td>{level}</td>
			<td>{school}</td>
			<td>{castingTime}</td>
			<td>{duration}</td>
			<td>{range}</td>
			<td>{area}</td>
			<td>{attack}</td>
			<td>{save}</td>
			<td>{damageAndEffect}</td>
			<td>{ritual}</td>
			<td>{concentration}</td>
			<td>{verbal}</td>
			<td>{somatic}</td>
			<td>{material}</td>
			<td>{source}</td>
			<td>{details}</td>
			<td>{link}</td>
		</tr>
	);
};

export default TableRow;
