import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../page";
import "@testing-library/jest-dom";

describe("Home component", () => {
  test("renders scroll container", () => {
    render(<Home />);
    const scrollContainer = screen.getByTestId("scroll-container");
    expect(scrollContainer).toBeInTheDocument();
  });

  test("renders title and subtitle", () => {
    render(<Home />);
    const title = screen.getByText("RIKI TAKAHASHI");
    const subtitle = screen.getByText("ENGINEER PORTFOLIO");
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  test("renders about me, skill, and portfolio sections", () => {
    render(<Home />);
    const aboutMe = screen.getByText("ABOUT ME");
    const skill = screen.getByText("SKILL");
    const portfolio = screen.getByText("PORTFOLIO");
    expect(aboutMe).toBeInTheDocument();
    expect(skill).toBeInTheDocument();
    expect(portfolio).toBeInTheDocument();
  });
});
