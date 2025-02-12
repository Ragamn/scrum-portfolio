import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../page";
import PortfolioPage from "../portfolio/page";
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

describe("PortfolioPage component", () => {
  test("renders works section", () => {
    render(<PortfolioPage />);
    const worksSection = screen.getByText("Works");
    expect(worksSection).toBeInTheDocument();
  });

  test("renders work items", () => {
    render(<PortfolioPage />);
    const workItems = screen.getAllByText(
      /備品管理システム|レシピシェアアプリ|注文管理アプリ/
    );
    expect(workItems.length).toBe(3);
  });
});
