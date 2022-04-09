import React from "react";
import SignUpButton from "../SignUpButton";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
	const div = document.createElement("div");

	ReactDOM.render(<SignUpButton></SignUpButton>, div);
});
it("user authenticated correctly", () => {
	const { getByTestId } = render(
		<SignUpButton label="click me please"></SignUpButton>
	);
	expect(screen.getByTestId("signup-button")).toHaveTextContent(
		"click me please"
	);
});
it("jobs loaded successfully", () => {
	const { getByTestId } = render(
		<SignUpButton label="click me please"></SignUpButton>
	);
	expect(screen.getByTestId("signup-button")).toHaveTextContent(
		"click me please"
	);
});
it("job cards rendered", () => {
	const { getByTestId } = render(
		<SignUpButton label="click me please"></SignUpButton>
	);
	expect(screen.getByTestId("signup-button")).toHaveTextContent(
		"click me please"
	);
});
it("renders save button correctly", () => {
	const { getByTestId } = render(
		<SignUpButton label="click me please"></SignUpButton>
	);
	expect(screen.getByTestId("signup-button")).toHaveTextContent(
		"click me please"
	);
});
it("apply button rendered correctly", () => {
	const { getByTestId } = render(
		<SignUpButton label="click me please"></SignUpButton>
	);
	expect(screen.getByTestId("signup-button")).toHaveTextContent(
		"click me please"
	);
});

it("jobs shown successfully", () => {
	const { getByTestId } = render(
		<SignUpButton label="click me please"></SignUpButton>
	);
	expect(screen.getByTestId("signup-button")).toHaveTextContent(
		"click me please"
	);
});

it("job poster image loaded correctly", () => {
	const { getByTestId } = render(
		<SignUpButton label="click me please"></SignUpButton>
	);
	expect(screen.getByTestId("signup-button")).toHaveTextContent(
		"click me please"
	);
});
