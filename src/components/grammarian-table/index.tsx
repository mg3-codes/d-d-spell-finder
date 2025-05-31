/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { useCallback, useMemo, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import spellVariations from "../../assets/spell-variations.json";

import "./styles.css";

const nameKey = "name";
const propertyNameOffset = 1;

export const GrammarianTable = () => {
	const [spell, setSpell] = useState<string>("");
	const [filter, setFilter] = useState<string>("");

	const onFilterChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setFilter(event.target.value);
		},
		[],
	);

	const onSelectSpell = useCallback((event: React.MouseEvent<HTMLElement>) => {
		setSpell(event.currentTarget.innerText.toLowerCase());
	}, []);

	const rows = useMemo(() => {
		const words = Object.entries(
			spellVariations.find((x) => x.name === spell) ?? {},
		).filter((x) => x[0] !== nameKey);

		const max = Math.max(...words.map((x) => x[propertyNameOffset].length));

		const rows = [];
		for (let i = 0; i < max; i++) {
			const row = [];
			for (const key of words) {
				row.push(key[propertyNameOffset][i]);
			}
			rows.push(row);
		}

		return rows;
	}, [spell]);

	const preventDefaultSubmit = useCallback(
		(event: React.FormEvent<HTMLFormElement>) => {
			event.preventDefault();
		},
		[],
	);

	return (
		<div className="gutter-container">
			<Form noValidate onSubmit={preventDefaultSubmit}>
				<Form.Group>
					<Form.Label>Spell</Form.Label>
					<Dropdown>
						<Dropdown.Toggle className="text-capitalize">
							{spell || "Select"}
						</Dropdown.Toggle>
						<Dropdown.Menu className="dropdown-menu overflow-scroll py-0">
							<Dropdown.Header className="sticky-top py-3 filter-container">
								<Form.Control
									type="text"
									value={filter}
									placeholder="Filter spells"
									onChange={onFilterChange}
								/>
							</Dropdown.Header>
							{spellVariations
								.filter((x) => {
									if (!filter) return true;
									return x.name.toLowerCase().includes(filter.toLowerCase());
								})
								.map((x) => (
									<Dropdown.Item
										className="text-capitalize"
										key={x.name}
										onClick={onSelectSpell}
										active={x.name === spell}
									>
										{x.name}
									</Dropdown.Item>
								))}
						</Dropdown.Menu>
					</Dropdown>
				</Form.Group>
			</Form>
			{spell && (
				<Table striped bordered hover className="mt-4">
					<thead>
						<tr>
							{Object.keys(spellVariations.find((x) => x.name === spell) || {})
								.filter((x) => x !== nameKey)
								.map((key) => (
									<th className="text-capitalize" key={`${key}-head`}>
										{key}
									</th>
								))}
						</tr>
					</thead>
					<tbody>
						{rows?.map((row) => (
							<tr key={row.join(",")}>
								{row.map((word) => (
									<td key={`${word}-td`} className="text-capitalize">
										{word}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</Table>
			)}
		</div>
	);
};
