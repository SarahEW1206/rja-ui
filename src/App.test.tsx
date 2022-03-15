import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders nav", () => {
  render(<App />);
  const about = screen.getByText(/about you/i);
  expect(about).toBeInTheDocument();
});
