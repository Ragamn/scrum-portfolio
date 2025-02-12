"use client";
import Image from "next/image";
import Animation from "../components/aboutme";

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* 回転する図形 */}
      <Animation />

      {/* メインコンテンツ */}
      <main className="mt-32 text-center relative">
        {/* ABOUT ME セクション */}
        <section id="portfolio" className="relative text-white">
          <div className="relative bg-gray-800 py-28">
            <h2 className="text-4xl font-bold text-customtitle">ABOUT ME</h2>
            <p className="max-w-2xl mx-auto mt-5">
              このページでは、私のこれまでの歩みを年表形式でご紹介しています。どんな経験をして、どんなことを学んできたのか、私のバックグラウンドをざっと知っていただけます。
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto py-16">
          <div className="border-l-4 border-red-400 pl-8 space-y-12">
            {[
              {
                year: "2004年（平成16年）3月",
                description:
                  "岩手県奥州市で生まれる。将来の夢はコンビニの店員になることだった。",
                img: "/image/iwate.png",
              },
              {
                year: "2019年（平成31年）4月",
                description:
                  "水沢商業高等学校に入学。プログラミングを学び始める。",
                img: "/image/programing.png",
              },
              {
                year: "2021年（令和3年）10月",
                description: "ITパスポート試験合格。",
                img: "/image/IT.png",
              },
              {
                year: "2022年（令和4年）",
                description:
                  "MCL盛岡情報ビジネス&デザイン専門学校に入学。基本情報技術者試験合格",
                img: "/image/dev.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-8">
                <div className="w-1/2 text-left">
                  <h3 className="text-lg font-semibold text-red-500">
                    {item.year}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                <div className="w-1/2">
                  <Image
                    src={item.img}
                    alt="年表画像"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
