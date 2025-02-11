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
          newPositions.push(newPositions.shift()!); // 配列の最初の要素を最後に移動
        } else {
          newPositions.unshift(newPositions.pop()!); // 配列の最後の要素を先頭に移動
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

      setIsClockwise((prev) => !prev); // 移動方向を切り替える
    }, 2000);
    return () => clearInterval(interval);
  }, [isClockwise]);

  return (
    <div className="flex justify-center items-center h-screen relative">
      {currentShapes.map((item, index) => (
        <motion.div
          key={item.id}
          className={`absolute w-[20vw] h-[20vw] flex justify-center items-center ${item.color}`}
          style={{
            padding: item.shape === "square" ? "0" : "",
            opacity: 0.9, // 透けるようにする
          }}
          animate={{
            ...currentPositions[index],
            borderRadius: item.shape === "circle" ? "50%" : "0",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
      ))}
    </div>
  );
}
