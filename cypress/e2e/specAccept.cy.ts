describe("Test", () => {
  it("Does not do much!", () => {
    cy.intercept("POST", "https://taxi-server.onrender.com/login").as("login1");
    cy.intercept("GET", "https://taxi-server.onrender.com/user/me").as(
      "login2"
    );
    cy.intercept("GET", "https://taxi-server.onrender.com/trip?active=true").as(
      "trip"
    );
    cy.visit("localhost:3000/login");
    cy.get('input[name="email"').type("nikitos17082002@mail.ru");
    cy.get('input[name="password"').type("nikitos17");
    cy.get("button").click();
    cy.get(".css-15dm4ha > :nth-child(1)").click();
    cy.get(".MuiButtonBase-root").click();
    cy.get(":nth-child(2) > .MuiButtonBase-root").click();
    cy.get(
      ".css-p4c2ej > .MuiBox-root > .css-bljfji-MuiButtonBase-root-MuiButton-root"
    ).click();
    cy.wait(3000);
    cy.get(".css-1cbe4zr > .MuiButtonBase-root").click();
    cy.get(".css-1b86d0w-MuiButtonBase-root-MuiButton-root").click();
  });
});
