/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useContext, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Column, mapColumnToDisplayName } from "../../enums/columns";

import { Theme } from "../../enums/theme";
import { ColumnContext } from "../column-context-provider";
import { ThemeContext } from "../theme-context-provider";

export const SettingsOffcanvas = (): JSX.Element => {
	const [show, setShow] = useState<boolean>(false);
	const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
	const { selectedColumns, handleColumnChange } = useContext(ColumnContext);

	const handleOpen = () => setShow(true);

	const handleClose = () => setShow(false);

	const handleColumnCheckboxChange = (column: Column): void =>
		handleColumnChange(column);

	const isCheckboxChecked = (column: Column): boolean =>
		selectedColumns.find((value) => value === column) !== undefined;

	return (
		<div>
			<Button variant="link" onClick={handleOpen}>
				<i className="bi bi-gear" style={{ fontSize: "1.5rem" }} />
			</Button>
			<Offcanvas show={show} onHide={handleClose} placement="end">
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Settings</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<Accordion>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Theme</Accordion.Header>
							<Accordion.Body>
								<ButtonGroup>
									<Button
										variant="primary"
										onClick={() =>
											setCurrentTheme(Theme.Light)
										}
										disabled={currentTheme === Theme.Light}
									>
										Light
									</Button>
									<Button
										variant="primary"
										onClick={() =>
											setCurrentTheme(Theme.Dark)
										}
										disabled={currentTheme === Theme.Dark}
									>
										Dark
									</Button>
								</ButtonGroup>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Columns</Accordion.Header>
							<Accordion.Body>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(Column.Name)}
									onChange={() =>
										handleColumnCheckboxChange(Column.Name)
									}
									checked={isCheckboxChecked(Column.Name)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(Column.Level)}
									onChange={() =>
										handleColumnCheckboxChange(Column.Level)
									}
									checked={isCheckboxChecked(Column.Level)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.School,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.School,
										)
									}
									checked={isCheckboxChecked(Column.School)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.CastingTime,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.CastingTime,
										)
									}
									checked={isCheckboxChecked(
										Column.CastingTime,
									)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Duration,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Duration,
										)
									}
									checked={isCheckboxChecked(Column.Duration)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(Column.Range)}
									onChange={() =>
										handleColumnCheckboxChange(Column.Range)
									}
									checked={isCheckboxChecked(Column.Range)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(Column.Area)}
									onChange={() =>
										handleColumnCheckboxChange(Column.Area)
									}
									checked={isCheckboxChecked(Column.Area)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Attack,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Attack,
										)
									}
									checked={isCheckboxChecked(Column.Attack)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(Column.Save)}
									onChange={() =>
										handleColumnCheckboxChange(Column.Save)
									}
									checked={isCheckboxChecked(Column.Save)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Damage,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Damage,
										)
									}
									checked={isCheckboxChecked(Column.Damage)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Effect,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Effect,
										)
									}
									checked={isCheckboxChecked(Column.Effect)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Ritual,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Ritual,
										)
									}
									checked={isCheckboxChecked(Column.Ritual)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Concentration,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Concentration,
										)
									}
									checked={isCheckboxChecked(
										Column.Concentration,
									)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Verbal,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Verbal,
										)
									}
									checked={isCheckboxChecked(Column.Verbal)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Somatic,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Somatic,
										)
									}
									checked={isCheckboxChecked(Column.Somatic)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Material,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Material,
										)
									}
									checked={isCheckboxChecked(Column.Material)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Source,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Source,
										)
									}
									checked={isCheckboxChecked(Column.Source)}
								/>
								<Form.Check
									type="checkbox"
									label={mapColumnToDisplayName(
										Column.Details,
									)}
									onChange={() =>
										handleColumnCheckboxChange(
											Column.Details,
										)
									}
									checked={isCheckboxChecked(Column.Details)}
								/>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
};
