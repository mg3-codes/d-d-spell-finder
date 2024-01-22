/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import "./search-bar.scss";

export interface ISearchBarProps {
	onSearchRequested: (q: string) => void;
}

export const SearchBar = ({ onSearchRequested }: ISearchBarProps) => {
	const [queryParams] = useSearchParams();
	const [value, updateValue] = useState<string>(
		decodeURIComponent(queryParams.get("q") ?? ""),
	);

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

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>): void => {
			if (e.key == "Enter") onSearchRequested(value);
		},
		[value],
	);

	return (
		<div>
			<InputGroup className="search-bar-container">
				<InputGroup.Text>Search</InputGroup.Text>
				<Form.Control
					value={value}
					onChange={handleUpdateValue}
					placeholder={getSearchPlaceholder()}
					onKeyDown={handleKeyDown}
				/>
				<Button
					variant="outline-primary"
					onClick={() => onSearchRequested(value)}
				>
					<i className="bi bi-search" />
				</Button>
			</InputGroup>
		</div>
	);
};
