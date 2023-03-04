/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AttributionBody, AttributionHeader } from "./attribution-content";

import "./footer.scss";
import { PrivacyBody, PrivacyHeader } from "./privacy-content";

const Footer = () => {
	enum Content {
		Attribution = 0,
		Privacy = 1,
	}

	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [selectedContent, setSelectedContent] = useState<Content>(0);

	const handleButtonClick = (content: Content): void => {
		setSelectedContent(content);
		setModalIsOpen(true);
	};

	return (
		<div className="footer">
			<span>Version: 0.1.0</span>
			<div>
				<Button
					variant="link"
					onClick={() => handleButtonClick(Content.Attribution)}
				>
					Attribution
				</Button>
				<Button
					variant="link"
					onClick={() => handleButtonClick(Content.Privacy)}
				>
					Privacy
				</Button>
			</div>
			<button
				className="github-button"
				onClick={() =>
					window.open(
						"https://github.com/mg3-codes/d-d-spell-finder",
						"_blank",
					)
				}
			>
				<i className="bi bi-github github-icon" />
			</button>
			<Modal show={modalIsOpen} onHide={() => setModalIsOpen(false)}>
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
					<Button
						variant="outline-secondary"
						onClick={() => setModalIsOpen(false)}
					>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Footer;
