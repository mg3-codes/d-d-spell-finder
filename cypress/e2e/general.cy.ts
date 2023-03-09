/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

describe("general tests", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("changes dark and light mode", () => {
		cy.get(".header-buttons").within(() => {
			cy.get(".btn-link").click();
		});
		cy.get(".accordion-item")
			.first()
			.click()
			.get(".btn-group")
			.as("theme-button-group")
			.within(() => {
				cy.get(".btn.btn-primary").last().click();
			});
		cy.get("html").invoke("attr", "data-bs-theme").should("eq", "dark");
		cy.get("@theme-button-group").within(() => {
			cy.get(".btn.btn-primary").first().click();
		});
		cy.get("html").invoke("attr", "data-bs-theme").should("eq", "");
	});
});
