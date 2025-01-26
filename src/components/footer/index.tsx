/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { useRollbar } from "@rollbar/react";
import type React from "react";
import { type MouseEventHandler, useCallback, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { HelpModal } from "../help-modal";
import { AttributionBody, AttributionHeader } from "./attribution-content";
import { PrivacyBody, PrivacyHeader } from "./privacy-content";

import { LogoComputer } from "../logo-computer";
import "./styles.css";

const Footer = () => {
	const rollbar = useRollbar();

	enum Content {
		Attribution = 0,
		Privacy = 1,
	}

	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [helpModalIsOpen, setHelpModalIsOpen] = useState<boolean>(false);
	const [selectedContent, setSelectedContent] = useState<Content>(0);

	const handleButtonClick: MouseEventHandler<HTMLButtonElement> = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
			const numberAsString = (e.target as HTMLButtonElement).getAttribute(
				"data-type",
			);
			if (!numberAsString) {
				rollbar.warning("value was null", e);
				return;
			}

			setSelectedContent(Number.parseInt(numberAsString));
			setModalIsOpen(true);
		},
		[rollbar],
	);

	const openGithub = useCallback(
		() =>
			window.open("https://github.com/mg3-codes/d-d-spell-finder", "_blank"),
		[],
	);

	const openWebsite = useCallback(
		() => window.open("https://www.mg3.codes", "_blank"),
		[],
	);

	const closeModal = useCallback(() => setModalIsOpen(false), []);

	const openHelpModal = useCallback(() => setHelpModalIsOpen(true), []);

	const toggleHelpModalState = useCallback(() => {
		setHelpModalIsOpen(!helpModalIsOpen);
	}, [helpModalIsOpen]);

	return (
		<div className="footer">
			<span className="version">Version: 0.5.11</span>
			<div className="links">
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
			<div className="d-flex justify-content-center align-items-center right-buttons">
				<button
					type="button"
					onClick={openWebsite}
					title="open Michael's website"
				>
					<LogoComputer maxHeight={35} maxWidth={25} />
				</button>
				<button className="github-button" onClick={openGithub} type="button">
					<i className="bi bi-github github-icon" />
				</button>
			</div>
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
