const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
import { store } from "@store/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Login } from "./Login";

describe(Login, () => {
  it("login", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    // screen.debug();
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
