/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const PrivacyHeader = () => <Modal.Title>Privacy</Modal.Title>;

export const PrivacyBody = () => {
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
			<h1>Privacy Policy of D&D Spell Finder</h1>
			<p>
				Michael Gamlem III operates the dnd-spells.mg3.codes website, which
				provides information from the System Reference Document 5.1 (“SRD 5.1”)
				by Wizards of the Coast LLC and available at
				<Button variant="link" onClick={openSRD}>
					https://dnd.wizards.com/resources/systems-reference-document.&nbsp;
					<i className="bi bi-box-arrow-up-right" />
				</Button>{" "}
				(the Service).
			</p>
			<p>
				The SRD 5.1 is licensed under the Creative Commons Attribution 4.0
				International License available at
				<Button variant="link" onClick={openCreativeCommons}>
					https://creativecommons.org/licenses/by/4.0/legalcode.&nbsp;
					<i className="bi bi-box-arrow-up-right" />
				</Button>{" "}
			</p>
			<br />
			<p>
				This page is used to inform website visitors regarding the policies with
				the collection, use, and disclosure of information for those who have
				decided to use the Service, dnd-spells.mg3.codes. If you choose to use
				the Service, then you agree to the collection and use of information in
				relation with this policy.
			</p>
			<h2>Information Collected</h2>
			<p>
				We record standard information on site visitors, including IP addresses,
				times and dates, referring/exit pages, operating systems, clickstreams,
				web browser brands and versions, pages visited, demographic data, and
				user-interface languages. This is statistical data about our visitors
				and does not personally identify any individual.
			</p>
			<h2>How Information is Used</h2>
			<p>
				We will not use or share your information with anyone except as
				described in this Privacy Policy.
			</p>
			<h2>Service Providers</h2>
			<p>
				We may employ third-party companies and individuals due to the following
				reasons: to facilitate our Service; or to assist us in analyzing how our
				Service is used. We want to inform our Service users that these third
				parties have access to information we collect. The reason is to perform
				the tasks assigned to them on our behalf. However, they are obligated
				not to disclose or use the information for any other purpose.
			</p>
			<h2>Security</h2>
			<p>
				We value your trust in providing us your information, thus we are
				striving to use commercially acceptable means of protecting it. But
				remember that no method of transmission over the internet, or method of
				electronic storage is 100% secure and reliable, and we cannot guarantee
				its absolute security.
			</p>
			<h2>Links to Other Sites</h2>
			<p>
				Our Service may contain links to other sites. If you click on a
				third-party link, you will be directed to that site. Note that these
				external sites are not operated by us. Therefore, we strongly advise you
				to review the Privacy Policy of these websites. We have no control over,
				and assume no responsibility for the content, privacy policies, or
				practices of any third-party sites or services.
			</p>
			<h2>Children&apos;s Privacy</h2>
			<p>
				Our Services do not address anyone under the age of 13. We do not
				knowingly collect personal identifiable information from children under
				13. In the case we discover that a child under 13 has provided us with
				personal information, we immediately delete this from our servers. If
				you are a parent or guardian and you are aware that your child has
				provided us with personal information, please contact us so that we will
				be able to do necessary actions.
			</p>
			<h2>Changes to This Privacy Policy</h2>
			<p>
				We may update our Privacy Policy from time to time. Thus, we advise you
				to review this page periodically for any changes. We will notify you of
				any changes by posting the new Privacy Policy on this page. These
				changes are effective immediately after they are posted on this page.
				Contact us if you have any questions or suggestions about our Privacy
				Policy.
			</p>
		</div>
	);
};
