/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

describe("filter tests", () => {
	beforeEach(() => {
		cy.visit("http://localhost:5173");
	});

	it("can filter names", () => {
		cy.get(".ag-row").should("have.length.at.least", 10);
		cy.get(".ag-header-cell").eq(1).type("{ctrl}{enter}");
		cy.get(".ag-text-field-input").first().type("Chill");
		cy.get(".ag-row").should("have.length.below", 10);
	});

	it("can filter levels", () => {
		cy.get(".ag-row").children().eq(2).should("have.text", "0");
		cy.get(".ag-header-cell").eq(2).type("{ctrl}{enter}");
		cy.get(".level-filter")
			.children()
			.each((child) => {
				cy.wrap(child).get("input").should("be.checked");
			});
		cy.get(".level-filter")
			.children()
			.first()
			.within((child) => {
				cy.wrap(child).get("input").click().should("not.be.checked");
			});
		cy.get(".ag-row").children().eq(2).should("not.have.text", "0");
	});

	it("can filter casting times", () => {
		cy.get(".ag-header-cell").eq(3).type("{ctrl}{enter}");
		cy.get(".casting-time-filter")
			.children()
			.each((child) => {
				cy.wrap(child).get("input").should("be.checked");
			});
		cy.get(".casting-time-filter")
			.children()
			.first()
			.within((child) => {
				cy.wrap(child).get("input").click();
			})
			.wait(1000);
		cy.get(".ag-row").each((row) => {
			cy.wrap(row).children().eq(3).should("not.have.text", "Action");
		});
	});

	it("can filter duration", () => {
		cy.get(".ag-header-cell").eq(4).type("{ctrl}{enter}");
		cy.get(".duration-filter")
			.children()
			.each((child) => {
				cy.wrap(child).get("input").should("be.checked");
			});
		cy.get(".duration-filter")
			.children()
			.first()
			.within((child) => {
				cy.wrap(child).get("input").click();
			})
			.wait(1000);
		cy.get(".ag-row").each((row) => {
			cy.wrap(row)
				.children()
				.eq(4)
				.should("not.have.text", "Instantaneous");
		});
	});

	it("can filter range", () => {
		cy.get(".ag-header-cell").eq(5).type("{ctrl}{enter}");
		cy.get(".range-filter")
			.children()
			.each((child) => {
				cy.wrap(child).get("input").should("be.checked");
			});
		cy.get(".range-filter")
			.children()
			.first()
			.within((child) => {
				cy.wrap(child).get("input").click();
			})
			.wait(1000);
		cy.get(".ag-row").each((row) => {
			cy.wrap(row).children().eq(5).should("not.have.text", "Self");
		});
	});

	it("can filter area", () => {
		cy.get(".ag-header-cell").eq(6).type("{ctrl}{enter}");
		cy.get(".distances")
			.children()
			.each((child) => {
				cy.wrap(child).get("input").should("be.checked");
			});
		cy.get(".distances")
			.children()
			.first()
			.within((child) => {
				cy.wrap(child).get("input").click();
			})
			.wait(1000);
		cy.get(".ag-row").each((row) => {
			cy.wrap(row).children().eq(6).should("not.be.empty");
		});
	});

	it("can filter attack", () => {
		cy.get(".ag-header-cell").eq(7).type("{ctrl}{enter}");
		cy.get(".attack-filter")
			.children()
			.each((child) => {
				cy.wrap(child).get("input").should("be.checked");
			});
		cy.get(".attack-filter")
			.children()
			.first()
			.within((child) => {
				cy.wrap(child).get("input").click();
			})
			.wait(1000);
		cy.get(".ag-row").each((row) => {
			cy.wrap(row).children().eq(7).should("not.be.empty");
		});
	});

	it("can filter saving throw", () => {
		cy.get(".ag-header-cell").eq(8).type("{ctrl}{enter}");
		cy.get(".saving-throw-filter")
			.children()
			.each((child) => {
				cy.wrap(child).get("input").should("be.checked");
			});
		cy.get(".saving-throw-filter")
			.children()
			.first()
			.within((child) => {
				cy.wrap(child).get("input").click();
			})
			.wait(1000);
		cy.get(".ag-row").each((row) => {
			cy.wrap(row).children().eq(8).should("not.be.empty");
		});
	});

	it("can filter damage", () => {
		cy.get(".ag-header-cell").eq(9).type("{ctrl}{enter}");
		cy.get(".damage-type-filter")
			.children()
			.each((child) => {
				cy.wrap(child).get("input").should("be.checked");
			});
		cy.get(".damage-type-filter")
			.children()
			.first()
			.within((child) => {
				cy.wrap(child).get("input").click();
			})
			.wait(1000);
		cy.get(".ag-row").each((row) => {
			cy.wrap(row).children().eq(9).should("not.be.empty");
		});
	});

	it("can filter effects", () => {
		cy.get(".ag-header-cell").eq(10).type("{ctrl}{enter}");
		cy.get(".effect-filter")
			.children()
			.each((child) => {
				cy.wrap(child).get("input").should("be.checked");
			});
		cy.get(".effect-filter")
			.children()
			.first()
			.within((child) => {
				cy.wrap(child).get("input").click();
			})
			.wait(1000);
		cy.get(".ag-row").each((row) => {
			cy.wrap(row).children().eq(10).should("not.be.empty");
		});
	});
});
