import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the loading text when no data is got from the rest call", () => {
  const { getByText } = render(<App />);
  const loadingText = getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
});
