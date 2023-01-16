const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
import * as React from "react";
import { store } from "@store/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe(App, () => {
  it("login", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    screen.debug();
    const button = screen.getByTestId("button").textContent;
    expect(button).toEqual("Login");
    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");
    const btn = screen.getByTestId("button");
    fireEvent.change(email, "nikitos17082002@mail.ru");
    fireEvent.change(password, "nikitos17");
    fireEvent.click(btn);
  });
});
