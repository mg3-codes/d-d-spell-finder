/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { EdgeSymbolKey } from "../edge-symbol-key";
import { EdgeDiceKey } from "../edge-dice-key";

export interface IHelpModalProps {
	modalIsOpen: boolean;
	toggleModalState: () => void;
}

export const HelpModal = ({
	modalIsOpen,
	toggleModalState,
}: IHelpModalProps) => {
	return (
		<Modal show={modalIsOpen} onHide={toggleModalState}>
			<Modal.Header closeButton>
				<Modal.Title>Help</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Accordion>
					<Accordion.Item eventKey="0">
						<Accordion.Header>Color Theme</Accordion.Header>
						<Accordion.Body>
							<p>
								The website will try to determine your preferred
								color theme (light or dark) from your browser.
								If one is not set or it is not able to be
								determined, the light theme will be selected.
							</p>
							<p>
								To switch the color theme, click on the gear
								icon and expand &quot;Theme.&quot; You will then
								have the option to chose light or dark.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Table</Accordion.Header>
						<Accordion.Body>
							<h5>Hide/Show Columns:</h5>
							<p>
								Not all columns are shown by default. To show or
								hide columns in the table, click the gear icon
								and select &quot;Columns.&quot; You can then add
								or remove columns as desired.
							</p>
							<h5>Clipped Values:</h5>
							<p>
								Some values are too long for their cell.
								Hovering over them will produce a tooltip with
								the full value.
							</p>
							<p>
								Additionally, the Material and Description cells
								can be clicked on to open a modal with the full
								text of the cell.
							</p>
							<h5>Filter Columns:</h5>
							<p>
								Columns can be filtered to show only matching
								results. Hover over the left side of the column
								header to show the filter button. (On mobile tap
								and hold to open the menu.) Then type or select
								to control which results are shown. Multiple
								filters can be active at one time and results
								must match all filters to be displayed.
							</p>
							<h5>Re-Arrange Columns:</h5>
							<p>
								Columns can be re-arranged. Simply click, hold,
								and drag to a new location. The leftmost column
								with checkboxes cannot be moved.
							</p>
							<h5>Sort Columns:</h5>
							<p>
								Columns have three sort states: None, Ascending,
								and Descending. Click on the name to switch
								which sort is active.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="2">
						<Accordion.Header>Printing</Accordion.Header>
						<Accordion.Body>
							<p>
								You can print cards with spell details on them
								for quick reference while playing!
							</p>
							<p>
								Simply select all the spells you wish to print
								by using the checkbox on the left side of the
								row.Then, click the print button at the top of
								the page. This will open a preview window where
								you can see what the card will look like. You
								can also select how many cards per row you would
								like to have in the generated print page.
							</p>
							<p>
								Once you have made your selection, you can click
								the green print button in the print preview.
								This will take you to a new page where you can
								print using your browser&apos;s print function.
							</p>
							<p>
								If you need to add or remove any spells, just
								click the back button in your browser to save
								your selection and modify it.
							</p>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="3">
						<Accordion.Header>Bugs</Accordion.Header>
						<Accordion.Body>
							<p>
								If you have found a bug please report it on
								GitHub using the link below and use the{" "}
								<i>Bug report</i> template.
							</p>
							<a
								href="https://github.com/mg3-codes/d-d-spell-finder/issues/new/choose"
								target="_blank"
								rel="noreferrer noopener"
							>
								GitHub Issues&nbsp;
								<i className="bi bi-box-arrow-up-right" />
							</a>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="4">
						<Accordion.Header>Spell Update</Accordion.Header>
						<Accordion.Body>
							<p>
								If you find a spell is missing, inaccurate, or
								has another error, please report it! You can use
								the below link to open a GitHub issue using the{" "}
								<i>Spell update</i> template.
							</p>
							<a href="https://github.com/mg3-codes/d-d-spell-finder/issues/new/choose">
								GitHub Issues&nbsp;
								<i className="bi bi-box-arrow-up-right" />
							</a>
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="5">
						<Accordion.Header>
							Edge of the Empire Dice
						</Accordion.Header>
						<Accordion.Body>
							<EdgeDiceKey />
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="6">
						<Accordion.Header>
							Edge of the Empire Dice Symbols
						</Accordion.Header>
						<Accordion.Body>
							<EdgeSymbolKey />
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="outline-secondary" onClick={toggleModalState}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
