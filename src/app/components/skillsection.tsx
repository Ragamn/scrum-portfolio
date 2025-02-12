"use client";
import React from "react";

// スキル情報の型定義
type Skill = {
  name: string;
  icon: string; // アイコン用URLやクラス
  level: number; // 進捗バー用
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

const skillData: SkillCategory[] = [
  {
    title: "FRONT-END",
    skills: [
      { name: "HTML", icon: "/image/html.png", level: 80 },
      { name: "CSS", icon: "/image/css.png", level: 80 },
      { name: "JavaScript", icon: "/image/javascript.png", level: 50 },
      { name: "TypeScript", icon: "/image/typescript.png", level: 40 },
    ],
  },
  {
    title: "BACK-END",
    skills: [
      { name: "Python", icon: "/image/python.png", level: 80 },
      { name: "PHP", icon: "/image/php.png", level: 80 },
      { name: "Java", icon: "/image/java.png", level: 50 },
    ],
  },
  {
    title: "FRAME WORK",
    skills: [
      { name: "Next.js", icon: "/image/nextjs.png", level: 60 },
      { name: "React", icon: "/image/react.png", level: 60 },
      { name: "Django", icon: "/image/django.png", level: 70 },
      { name: "Laravel", icon: "/image/laravel.png", level: 80 },
    ],
  },
  {
    title: "DATABASE",
    skills: [
      { name: "PostgreSQL", icon: "/image/psql.jpg", level: 80 },
      { name: "MySQL", icon: "/image/mysql.jpg", level: 80 },
    ],
  },
];

// 資格情報
const qualifications = [
  { name: "基本情報技術者試験", icon: "/image/ipa.png" },
  { name: "ITパスポート試験", icon: "/image/ipa.png" },
];

export default function SkillSection() {
  return (
    <div className="py-10 bg-white">
      {skillData.map((category) => (
        <section key={category.title} className="mb-10">
          <h2 className="text-xl font-bold text-customtitle text-center mb-5">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                <div className="w-full">
                  <p className="font-semibold">{skill.name}</p>
                  <div className="bg-gray-300 h-2 rounded-full mt-1 relative">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* 資格セクション */}
      <div className="text-center mt-10">
        <h2 className="text-lg font-bold text-customtitle mb-3">
          Qualifications
        </h2>
        <div className="flex justify-center space-x-8">
          {qualifications.map((q) => (
            <div
              key={q.name}
              className="flex items-center space-x-3 bg-gray-100 px-4 py-2 rounded-lg shadow-md"
            >
              <img src={q.icon} alt={q.name} className="w-10 h-10" />
              <span className="text-custommenu font-semibold">{q.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
