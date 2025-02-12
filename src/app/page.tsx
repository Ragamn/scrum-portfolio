"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./style/components/top.css";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter();

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

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateProgressBar);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateProgressBar);
    };
  }, []);

  // ページ遷移の関数
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <div
        ref={scrollContainerRef}
        className="overflow-x-scroll whitespace-nowrap no-scrollbar"
        data-testid="scroll-container"
      >
        <div className="inline-block relative float-left ">
          <div className="text-center top-title">
            <h1 className="text-customtitle diagonal-center">RIKI TAKAHASHI</h1>
            <p className="text-customtitle sub_title">ENGINEER PORTFOLIO</p>
          </div>
        </div>

        <div
          className="inline-block relative ml-40 mt-20 cursor-pointer"
          onClick={() => navigateTo("/about")}
        >
          <h2 className="text-customtitle absolute">ABOUT ME</h2>
          <Image
            className="ml-24"
            src="/image/aboutme.jpg"
            alt="Dami Image"
            width={650}
            height={390}
          />
        </div>

        <div
          className="inline-block relative ml-40 cursor-pointer"
          onClick={() => navigateTo("/skills")}
        >
          <h2 className="text-customtitle absolute">SKILL</h2>
          <Image
            className="ml-24"
            src="/image/skill.png"
            alt="Dami Image"
            width={650}
            height={390}
          />
        </div>

        <div
          className="inline-block relative ml-40 cursor-pointer"
          onClick={() => navigateTo("/portfolio")}
        >
          <h2 className="text-customtitle absolute">PORTFOLIO</h2>
          <Image
            className="ml-24"
            src="/image/portfolio.jpg"
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
          data-testid="progress-bar"
        ></div>
      </div>
    </div>
  );
}
