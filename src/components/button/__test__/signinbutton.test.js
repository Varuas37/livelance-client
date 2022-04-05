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
it("renders button correctly", () => {
	const { getByTestId } = render(
		<SignUpButton label="Signing In"></SignUpButton>
	);
	expect(screen.getByTestId("signup-button")).toHaveTextContent(
		"click me please"
	);
});
