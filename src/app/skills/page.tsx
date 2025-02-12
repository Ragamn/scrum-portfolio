"use client";
import Animation from "../components/skill";
import SkillSection from "../components/skillsection";

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* 回転する図形 */}
      <Animation />

      {/* メインコンテンツ */}
      <main className="mt-32 text-center relative">
        {/* PORTFOLIOのコンテンツ */}
        <section id="portfolio" className="relative text-white">
          <div className="relative bg-gray-800 py-28">
            <h2 className="text-4xl font-bold text-customtitle">SKILL</h2>
            <p className="max-w-2xl mx-auto mt-5">
              私が習得したスキルをカテゴリごとに紹介しました。
              これらの技術を活用し、フロントエンド・バックエンド・データベースの設計・開発を行うことができます。
              技術は常に進化しているため、新しい技術のキャッチアップを欠かさず、今後もより高いレベルのスキルを身につけていきたいと考えています。
            </p>
          </div>
        </section>
        <SkillSection />
      </main>
    </div>
  );
}
