const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
import { store } from "@store/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import CreateOrder from "./CreateOrder";

describe(CreateOrder, () => {
  it("login", () => {
    render(
      <Provider store={store}>
        <CreateOrder />
      </Provider>
    );
    screen.debug();
    // const button = screen.getByTestId("button").textContent;
    // expect(button).toEqual("CreateOrder");
  });
});
