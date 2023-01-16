describe("Test", () => {
  it("Does not do much!", () => {
    cy.intercept("POST", "https://taxi-server.onrender.com/login").as("login1");
    cy.intercept("GET", "https://taxi-server.onrender.com/user/me").as(
      "login2"
    );
    cy.visit("localhost:3000/login");
    cy.get('input[name="email"').type("nikitos17082002@mail.ru");
    cy.get('input[name="password"').type("nikitos17");
    cy.get("button").click();
    // cy.wait(["@login1"], { responseTimeout: 15000 });
    // cy.wait(["@login2"], { responseTimeout: 15000 });
    cy.get(".css-15dm4ha > :nth-child(1)").click();
    cy.get('input[name="source"').type("KEKESTAN");
    cy.get('input[name="destination"').type("Minsk");
    cy.get(".MuiButtonBase-root").click();
  });
});
