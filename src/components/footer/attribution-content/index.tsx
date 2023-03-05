/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const AttributionHeader = () => <Modal.Title>Attribution</Modal.Title>;

export const AttributionBody = () => {
	const openSRD = useCallback(
		() =>
			window.open(
				"https://dnd.wizards.com/resources/systems-reference-document",
				"_blank",
			),
		[],
	);

	const openCreativeCommons = useCallback(
		() =>
			window.open(
				"https://creativecommons.org/licenses/by/4.0/legalcode",
				"_blank",
			),
		[],
	);

	return (
		<div>
			<p>
				This work includes material taken from the System Reference
				Document 5.1 (“SRD 5.1”) by Wizards of the Coast LLC and
				available at
				<Button variant="link" onClick={openSRD}>
					https://dnd.wizards.com/resources/systems-reference-document.&nbsp;
					<i className="bi bi-box-arrow-up-right" />
				</Button>
				The SRD 5.1 is licensed under the Creative Commons Attribution
				4.0 International License available at
				<Button variant="link" onClick={openCreativeCommons}>
					https://creativecommons.org/licenses/by/4.0/legalcode.&nbsp;
					<i className="bi bi-box-arrow-up-right" />
				</Button>
			</p>
		</div>
	);
};
