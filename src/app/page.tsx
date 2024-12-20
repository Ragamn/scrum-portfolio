"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./style/components/top.css";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ホイールイベントによる横スクロール処理
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        const container = scrollContainerRef.current;
        if (container) {
          const scrollAmount = event.deltaY / 8;
          let start: number | null = null;

          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const scrollStep = (scrollAmount / 300) * progress;
            container.scrollLeft += scrollStep;
            updateProgressBar();
            if (progress < 300) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      }
    };

    const updateProgressBar = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const progress = (container.scrollLeft / maxScrollLeft) * 100;
        setScrollProgress(progress);
      }
    };

    console.log("イベントリスナーを追加");
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateProgressBar); // リサイズ時も進捗を更新

    return () => {
      console.log("イベントリスナーを削除");
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateProgressBar);
    };
  }, []);

  return (
    <div className="relative">
      {/* 横スクロール可能なコンテナ */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll whitespace-nowrap no-scrollbar"
      >
        <div className="inline-block">
          <h1 className="text-customtitle title diagonal-center">
            RIKI TAKAHASHI
          </h1>
          <p className="text-customtitle title diagonal-center">
            ENGINEER PORTFOLIO
          </p>
        </div>
        <div className="inline-block">
          <h2 className="text-customtitle">ABOUT ME</h2>
          <Image
            src="/image/dami.png"
            alt="Dami Image"
            width={650}
            height={390}
          />
        </div>
        <div className="inline-block">
          <h2 className="text-customtitle">SKILL</h2>
          <Image
            src="/image/dami.png"
            alt="Dami Image"
            width={650}
            height={390}
          />
        </div>
        <div className="inline-block">
          <h2 className="text-customtitle">PORTFOLIO</h2>
          <Image
            src="/image/dami.png"
            alt="Dami Image"
            width={650}
            height={390}
          />
        </div>
      </div>

      {/* スクロールプログレスバー */}
      <div className="fixed bottom-[5%] left-[10%] right-[10%] h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
}
