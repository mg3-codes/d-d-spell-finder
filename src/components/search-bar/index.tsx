/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./search-bar.scss";

export const SearchBar = () => {
	const [value, updateValue] = useState<string>("");

	const handleUpdateValue = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>): void => {
			updateValue(e.target.value);
		},
		[value],
	);

	const getSearchPlaceholder = useCallback((): string => {
		const placeholder = ["fireball", "magic missile", "animals", "control"];
		const x = Math.floor(Math.random() * placeholder.length);

		return placeholder[x];
	}, []);

	return (
		<div>
			<InputGroup className="search-bar-container">
				<InputGroup.Text>Search</InputGroup.Text>
				<Form.Control
					value={value}
					onChange={handleUpdateValue}
					placeholder={getSearchPlaceholder()}
				/>
				<Button
					variant="outline-primary"
					onClick={() =>
						fetch(
							`http://localhost:5226/search/spells?q=${value}`,
							{ method: "POST" },
						)
					}
				>
					<i className="bi bi-search" />
				</Button>
			</InputGroup>
		</div>
	);
};
