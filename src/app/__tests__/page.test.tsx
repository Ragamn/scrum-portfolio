import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../page";
import PortfolioPage from "../portfolio/page";
import AboutMe from "../about/page";
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

describe("About me component", () => {
  test("renders description text", () => {
    render(<AboutMe />);
    const descriptionText = screen.getByText(
      "このページでは、私のこれまでの歩みを年表形式でご紹介しています。どんな経験をして、どんなことを学んできたのか、私のバックグラウンドをざっと知っていただけます。"
    );
    expect(descriptionText).toBeInTheDocument();
  });

  test("renders timeline items", () => {
    render(<AboutMe />);
    const timelineItems = screen.getAllByText(
      /岩手県奥州市で生まれる。将来の夢はコンビニの店員になることだった。|水沢商業高等学校に入学。プログラミングを学び始める。|ITパスポート試験合格。|MCL盛岡情報ビジネス&デザイン専門学校に入学。基本情報技術者試験合格/
    );
    expect(timelineItems.length).toBe(4);
  });

  test("renders images", () => {
    render(<AboutMe />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(4);
  });
});
