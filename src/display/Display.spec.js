// Test away!
import React from "react";
import { render, queryByText } from "@testing-library/react";
import Display from "./Display";

test("Display renders", () => {
  render(<Display />);
});

test("Display - Closed if the closed prop is true", () => {
    const { getByText, queryByText } = render(<Display closed={true} />);
    expect(getByText(/closed/i));
});

test("Display Locked", () => {
  const { getByText, queryByText } = render(<Display locked={false} />);
  expect(getByText(/unlocked/i));
});

test("Class - red-led if Locked", () => {
  const { getByText } = render(<Display locked={true} />);
  expect(getByText(/locked/i).classList.contains("red-led")).toBe(true);
});

test("Class - green-led if Unlocked or Open", () => {
    const { getByText, queryByText } = render(<Display locked={false} />);
    expect(getByText(/unlocked/i).classList.contains("green-led")).toBe(true);
});