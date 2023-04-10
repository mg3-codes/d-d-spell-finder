/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { AttributionBody, AttributionHeader } from "./attribution-content";
import { PrivacyBody, PrivacyHeader } from "./privacy-content";
import { HelpModal } from "../help-modal";

import "./footer.scss";

const Footer = () => {
	enum Content {
		Attribution = 0,
		Privacy = 1,
	}

	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [helpModalIsOpen, setHelpModalIsOpen] = useState<boolean>(false);
	const [selectedContent, setSelectedContent] = useState<Content>(0);

	const handleButtonClick = useCallback(
		(e: React.BaseSyntheticEvent): void => {
			setSelectedContent(parseInt(e.target.getAttribute("data-type")));
			setModalIsOpen(true);
		},
		[],
	);

	const openGithub = useCallback(
		() =>
			window.open(
				"https://github.com/mg3-codes/d-d-spell-finder",
				"_blank",
			),
		[],
	);

	const closeModal = useCallback(() => setModalIsOpen(false), []);

	const openHelpModal = useCallback(() => setHelpModalIsOpen(true), []);

	const toggleHelpModalState = useCallback(() => {
		setHelpModalIsOpen(!helpModalIsOpen);
	}, [helpModalIsOpen]);

	return (
		<div className="footer">
			<span>Version: 0.2.0</span>
			<div>
				<Button variant="link" onClick={openHelpModal}>
					Help
				</Button>
				<Button
					variant="link"
					onClick={handleButtonClick}
					data-type={Content.Attribution}
				>
					Attribution
				</Button>
				<Button
					variant="link"
					onClick={handleButtonClick}
					data-type={Content.Privacy}
				>
					Privacy
				</Button>
			</div>
			<button className="github-button" onClick={openGithub}>
				<i className="bi bi-github github-icon" />
			</button>
			<Modal show={modalIsOpen} onHide={closeModal}>
				<Modal.Header closeButton>
					<Modal.Title>
						{selectedContent === Content.Attribution ? (
							<AttributionHeader />
						) : (
							<PrivacyHeader />
						)}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{selectedContent === Content.Attribution ? (
						<AttributionBody />
					) : (
						<PrivacyBody />
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="outline-secondary" onClick={closeModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
			<HelpModal
				modalIsOpen={helpModalIsOpen}
				toggleModalState={toggleHelpModalState}
			/>
		</div>
	);
};

export default Footer;
