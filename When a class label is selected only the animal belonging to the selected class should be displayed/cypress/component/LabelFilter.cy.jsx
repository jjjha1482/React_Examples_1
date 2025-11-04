import LabelFilter from "../../src/LabelFilter";

describe("LabelFilter component", () => {
  it("should render the component and its main elements", () => {
    cy.mount(<LabelFilter />);
    cy.get("[data-testid=labels-wrapper-id]").then(($labelsWrapper) => {
      if (!$labelsWrapper.length) {
        cy.fail("Labels wrapper does not exist");
      }
    });
    cy.get("[data-testid=tile-container-id]").then(($tileContainer) => {
      if (!$tileContainer.length) {
        cy.fail("Tile container does not exist");
      }
    });
  });

  it("should render all labels", () => {
    cy.mount(<LabelFilter />);
    cy.get("[data-testid=label-id]").then(($labels) => {
      if ($labels.length !== 4) {
        cy.fail(`Expected 4 labels, but got ${$labels.length}`);
      }
    });
  });

  it("should render all tiles", () => {
    cy.mount(<LabelFilter />);
    cy.get("[data-testid=animal-tile-id]").then(($tiles) => {
      if ($tiles.length !== 12) {
        cy.fail(`Expected 12 tiles, but got ${$tiles.length}`);
      }
    });
  });

  it("should filter animals based on label", () => {
    cy.mount(<LabelFilter />);
    cy.get("[data-testid=label-id]").contains("Mammals").click();
    cy.get("[data-testid=animal-tile-id]").then(($tiles) => {
      if ($tiles.length !== 3) {
        cy.fail(`Expected 3 tiles for Mammals, but got ${$tiles.length}`);
      }
    });
    cy.get("[data-testid=label-id]").contains("Reptiles").click();
    cy.get("[data-testid=animal-tile-id]").then(($tiles) => {
      if ($tiles.length !== 6) {
        cy.fail(`Expected 6 tiles for Reptiles, but got ${$tiles.length}`);
      }
    });
    cy.get("[data-testid=label-id]").contains("Fish").click();
    cy.get("[data-testid=animal-tile-id]").then(($tiles) => {
      if ($tiles.length !== 9) {
        cy.fail(`Expected 9 tiles for Fish, but got ${$tiles.length}`);
      }
    });
    cy.get("[data-testid=label-id]").contains("Birds").click();
    cy.get("[data-testid=animal-tile-id]").then(($tiles) => {
      if ($tiles.length !== 12) {
        cy.fail(`Expected 12 tiles for Birds, but got ${$tiles.length}`);
      }
    });
  });

  it("should toggle label", () => {
    cy.mount(<LabelFilter />);
    cy.get("[data-testid=label-id]").contains("Mammals").click();
    cy.get("[data-testid=animal-tile-id]").then(($tiles) => {
      if ($tiles.length !== 3) {
        cy.fail(`Expected 3 tiles for Mammals, but got ${$tiles.length}`);
      }
    });
    cy.get("[data-testid=label-id]").contains("Mammals").click();
    cy.get("[data-testid=animal-tile-id]").then(($tiles) => {
      if ($tiles.length !== 12) {
        cy.fail(
          `Expected 12 tiles after deselecting Mammals, but got ${$tiles.length}`
        );
      }
    });
  });

  it("should highlight and unhighlight selected label", () => {
    cy.mount(<LabelFilter />);

    cy.get("[data-testid=label-id]").contains("Mammals").click();
    cy.get("[data-testid=label-id]")
      .contains("Mammals")
      .should("have.css", "background-color", "rgb(51, 51, 51)")
      .and("have.css", "color", "rgb(255, 255, 255)")
      .then(($label) => {
        if (
          $label.css("background-color") !== "rgb(51, 51, 51)" ||
          $label.css("color") !== "rgb(255, 255, 255)"
        ) {
          cy.fail("Label is not highlighted correctly after selection");
        }
      });

    cy.get("[data-testid=label-id]").contains("Mammals").click();
    cy.get("[data-testid=label-id]")
      .contains("Mammals")
      .should("have.css", "background-color", "rgb(255, 255, 255)")
      .and("have.css", "color", "rgb(51, 51, 51)")
      .then(($label) => {
        if (
          $label.css("background-color") !== "rgb(255, 255, 255)" ||
          $label.css("color") !== "rgb(51, 51, 51)"
        ) {
          cy.fail("Label is not unhighlighted correctly after deselection");
        }
      });
  });

  it("should highlight selected label text", () => {
    cy.mount(<LabelFilter />);
    cy.get("[data-testid=label-id]").contains("Mammals").click();
    cy.get("[data-testid=label-id]")
      .contains("Mammals")
      .should("have.css", "color", "rgb(255, 255, 255)")
      .then(($label) => {
        if ($label.css("color") !== "rgb(255, 255, 255)") {
          cy.fail("Label text is not highlighted correctly after selection");
        }
      });

    cy.get("[data-testid=label-id]").contains("Mammals").click();
    cy.get("[data-testid=label-id]")
      .contains("Mammals")
      .should("have.css", "color", "rgb(51, 51, 51)")
      .then(($label) => {
        if ($label.css("color") !== "rgb(51, 51, 51)") {
          cy.fail(
            "Label text is not unhighlighted correctly after deselection"
          );
        }
      });
  });
});
