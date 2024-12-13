"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "./style/components/top.css";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      console.log("ホイールイベント発生");
      if (event.deltaY !== 0) {
        event.preventDefault();
        const container = scrollContainerRef.current;
        if (container) {
          console.log("スクロール動作");
          console.log("現在のスクロール位置:", container.scrollLeft);
          console.log("スクロール量:", event.deltaY);
          const scrollAmount = event.deltaY;
          let start: number | null = null;

          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const scrollStep = (scrollAmount / 300) * progress;
            container.scrollLeft += scrollStep;
            if (progress < 300) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      }
    };

    console.log("イベントリスナーを追加");
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      console.log("イベントリスナーを削除");
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="overflow-x-auto whitespace-nowrap no-scrollbar"
    >
      <div className="inline-block">
        <h1 className="text-customtitle">RIKI TAKAHASHI</h1>
        <p className="text-customtitle">ENGINIEER PORTFOLIO</p>
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
  );
}
