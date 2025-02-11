"use client";
import Image from "next/image";
import { useState } from "react";
import Animation from "../components/portfolio";

const works = [
  {
    id: 1,
    title: "備品管理システム",
    description:
      "備品を管理するためのアプリです。機能は、備品の貸出、返却、棚卸など備品を管理するための機能が実装されています。また、貸出、返却の申請がGooglechatに送信されます。",
    url: "https://equipment-management-jet.vercel.app/user_login",
    languages: "Python Django, REST framework, React",
    images: [
      "/image/work1-1.png",
      "/image/work1-2.png",
      "/image/work1-3.png",
      "/image/work1-4.png",
      "/image/work1-5.png",
    ],
  },
  {
    id: 2,
    title: "レシピシェアアプリ",
    description:
      "学校内で行われたハッカソンで作成しました。お題が一人暮らし向けのアプリということだったので、料理が大変と思い、レシピのシェアができるアプリを考えました。",
    url: "",
    languages: "PHP Laravel",
    images: [
      "/image/work2-1.png",
      "/image/work2-2.png",
      "/image/work2-3.png",
      "/image/work2-4.png",
      "/image/work2-5.png",
    ],
  },
  {
    id: 3,
    title: "注文管理アプリ",
    description:
      "学校内で行われたハッカソンで作成しました。2択での開発で、こちらを選択し開発しました。注文、座席、商品、店舗の管理など多くのことができるアプリとなっています。",
    url: "",
    languages: "PHP Laravel, JavaScript",
    images: [
      "/image/work3-1.png",
      "/image/work3-2.png",
      "/image/work3-3.png",
      "/image/work3-4.png",
      "/image/work3-5.png",
    ],
  },
];

export default function PortfolioPage() {
  const [selectedWork, setSelectedWork] = useState<(typeof works)[0] | null>(
    null
  );
  const [mainImage, setMainImage] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* 回転する図形 */}
      <Animation />

      {/* メインコンテンツ */}
      <main className="mt-32 text-center relative">
        {/* PORTFOLIOのコンテンツ */}
        <section id="portfolio" className="relative text-white">
          <div className="relative bg-gray-800 py-28">
            <h2 className="text-4xl font-bold text-customtitle">PORTFOLIO</h2>
            <p className="max-w-2xl mx-auto mt-5">
              私のこれまでのプロジェクトと成果物をご覧ください。実際に手がけたアプリケーション、システムを紹介します。それぞれのプロジェクトには、使用した技術についても詳しく記載しています。どうぞご覧いただき、私の技術力と成長を感じていただければと思います。
            </p>
          </div>
        </section>

        {/* WORKSセクション */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-red-500">Works</h2>
          <div className="mt-6 flex justify-center gap-6 px-6">
            {works.map((work) => (
              <div
                key={work.id}
                className="w-60"
                onClick={() => {
                  setSelectedWork(work);
                  setMainImage(work.images[0]);
                }}
              >
                <div className="h-40 flex justify-center items-center cursor-pointer">
                  <Image
                    src={work.images[0]}
                    alt={work.title}
                    width={700}
                    height={600}
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-center text-lg font-semibold">
                  {work.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 画像ポップアップ */}
      {selectedWork && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div
            className="bg-popupcolor p-8 rounded-lg w-[60%] h-[70%] flex flex-col relative text-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              className="absolute top-2 right-2 bg-gray-800 p-2 rounded-full text-customtitle"
              onClick={() => setSelectedWork(null)}
            >
              ✕
            </button>

            {/* 左側情報 */}
            <div className="flex flex-row h-full">
              <div className="w-1/2 p-6">
                <h2 className="text-2xl font-bold">{selectedWork.title}</h2>
                <p className="mt-4">{selectedWork.description}</p>
                <a
                  href={selectedWork.url}
                  target="_blank"
                  className="mt-4 text-blue-500 underline text-lg"
                >
                  {selectedWork.url}
                </a>
                <p className="mt-4">使用言語: {selectedWork.languages}</p>
              </div>

              {/* 右側 画像エリア */}
              <div className="w-1/2 p-6 flex flex-col items-center">
                {/* サムネイル画像 */}
                <div className="flex flex-wrap gap-3 mb-6 justify-start">
                  {selectedWork.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt="Thumbnail"
                      width={80}
                      height={60}
                      className="cursor-pointer border-2 border-gray-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        setMainImage(img);
                      }}
                    />
                  ))}
                </div>

                {/* メイン画像表示 */}
                {mainImage && (
                  <Image
                    src={mainImage}
                    alt="Main"
                    width={360}
                    height={240}
                    className="border-2 border-gray-600 w-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
