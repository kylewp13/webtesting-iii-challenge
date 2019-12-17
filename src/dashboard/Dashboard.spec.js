// Test away
import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("Dashboard renders", () => {
  render(<Dashboard />);
});

test("Gate default to unlocked and open", () => {
  const { getByText } = render(<Dashboard />);
  expect(getByText(/open/i));
  expect(getByText(/unlocked/i));
});

test("Display should match snapshot", () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});