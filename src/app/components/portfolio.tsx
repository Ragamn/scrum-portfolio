"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const initialShapes = [
  { id: 1, shape: "square", color: "bg-squarecolor2" },
  { id: 2, shape: "circle", color: "bg-squarecolor5" },
  { id: 3, shape: "square", color: "bg-squarecolor3" },
];

const positions = [
  { top: "30%", left: "20%", transform: "translate(-50%, -50%)" },
  { top: "30%", left: "70%", transform: "translate(-50%, -50%)" },
  { top: "70%", left: "30%", transform: "translate(-50%, -50%)" },
];

const shapesList = ["square", "circle"];
const colorsList = [
  "bg-squarecolor1",
  "bg-squarecolor2",
  "bg-squarecolor3",
  "bg-squarecolor4",
  "bg-squarecolor5",
];

function getRandomShape() {
  const shape = shapesList[Math.floor(Math.random() * shapesList.length)];
  const color = colorsList[Math.floor(Math.random() * colorsList.length)];

  return { shape, color };
}

export default function RotatingShapes() {
  const [currentPositions, setCurrentPositions] = useState(positions);
  const [currentShapes, setCurrentShapes] = useState(initialShapes);
  const [isClockwise, setIsClockwise] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPositions((prevPositions) => {
        const newPositions = [...prevPositions];
        if (isClockwise) {
          newPositions.push(newPositions.shift()!);
        } else {
          newPositions.unshift(newPositions.pop()!);
        }
        return newPositions;
      });

      setCurrentShapes((prevShapes) => {
        const newShapes = prevShapes.map((shape) => {
          const { shape: newShape, color } = getRandomShape();
          return { id: shape.id, shape: newShape, color };
        });
        return newShapes;
      });

      setIsClockwise((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, [isClockwise]);

  return (
    <div className="flex justify-center items-center h-screen relative">
      {/* 図形アニメーション */}
      {currentShapes.map((item, index) => (
        <motion.div
          key={item.id}
          className={`absolute w-[22vw] h-[22vw] flex justify-center items-center ${item.color}`}
          style={{
            padding: item.shape === "square" ? "0" : "",
            opacity: 0.8,
          }}
          animate={{
            ...currentPositions[index],
            borderRadius: item.shape === "circle" ? "50%" : "0",
          }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        ></motion.div>
      ))}

      {/* PORTFOLIO タイトル */}
      <motion.div
        className="absolute text-6xl font-bold text-gray-900"
        style={{
          zIndex: 0,
        }}
        animate={{
          opacity: [2.9, 2, 2.9],
          scale: [3, 2.7, 3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        PORTFOLIO
      </motion.div>
    </div>
  );
}
