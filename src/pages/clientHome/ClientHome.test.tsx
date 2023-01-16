const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
import { store } from "@store/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import * as React from "react";
import { ClientHome } from "./ClientHome";

describe(ClientHome, () => {
  it("home", () => {
    render(
      <Provider store={store}>
        <ClientHome />
      </Provider>
    );
    screen.debug();
    const button = screen.getByTestId("button").textContent;
    expect(button).toEqual("Create order");
    const btn = screen.getByTestId("button");
  });
});