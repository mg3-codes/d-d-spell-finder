/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

const defaultColumns = [
	"",
	"Name",
	"Level",
	"Casting Time",
	"Duration",
	"Range",
	"Area",
	"Attack",
	"Save",
	"Damage",
	"Effect",
	"Material",
	"Source",
	"Details",
];

describe("table tests", () => {
	beforeEach(() => {
		cy.visit("http://localhost:5173");
	});

	it("renders", () => {
		cy.get(".ag-root-wrapper");
		cy.get(".ag-center-cols-container");
		cy.get(".ag-cell");
		cy.get(".ag-center-cols-container")
			.children()
			.should("have.length.at.least", 10);
	});

	it("has no checked rows", () => {
		cy.get(".ag-checkbox-input").each((input) => {
			cy.wrap(input).should("not.be.checked");
		});
	});

	it("has default columns", () => {
		cy.get(".ag-header-cell-text").each((cell) => {
			expect(cell.text()).to.be.oneOf(defaultColumns);
		});
	});

	it("has default columns checked", () => {
		cy.get(".header-buttons")
			.first()
			.within(() => {
				cy.get(".btn-link").click();
			});
		cy.get(".accordion-item").last().click();
		cy.get(".check-column").each((column) => {
			cy.wrap(column)
				.children()
				.each((checkDiv) => {
					cy.wrap(checkDiv).within(() => {
						cy.wrap(checkDiv)
							.children()
							.get("label")
							.invoke("text")
							.then((text) => {
								const match = text.match(
									new RegExp(
										`${defaultColumns
											.slice(1, defaultColumns.length)
											.join("|")}`,
										"g",
									),
								);
								if (match) cy.get("input").should("be.checked");
								else cy.get("input").should("not.be.checked");
							});
					});
				});
		});
	});

	it("can show and hide colum", () => {
		cy.get(".ag-header-cell-text").should("not.contain.text", "School");
		cy.get(".header-buttons")
			.first()
			.within(() => {
				cy.get(".btn-link").click();
			});
		cy.get(".accordion-item").last().click();
		cy.get(".check-column")
			.first()
			.within((column) => {
				cy.wrap(column)
					.get("label")
					.contains("School")
					.siblings("input")
					.should("not.be.checked")
					.click();
			});
		cy.get(".ag-header-cell-text").should("contain.text", "School");
		cy.get(".check-column")
			.first()
			.within((column) => {
				cy.wrap(column)
					.get("label")
					.contains("School")
					.siblings("input")
					.should("be.checked")
					.click();
			});
		cy.get(".ag-header-cell-text").should("not.contain.text", "School");
	});
});
