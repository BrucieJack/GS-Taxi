const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
import { store } from "@store/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Register from "./Register";

describe(Register, () => {
  it("login", () => {
    render(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    const button = screen.getByTestId("button").textContent;
    expect(button).toEqual("Register");
  });
});
