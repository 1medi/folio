"use client";

import { KeyboardEvent, useEffect, useState, useRef } from "react";
import Bee from "../../public/beeTwerk.gif";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "../../src/app/utils/fadein";

const GRID_WIDTH = 32;
const GRID_HEIGHT = 16;

type Point = {
  x: number;
  y: number;
};

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

export default function Snake() {
  const [snake, setSnake] = useState<Point[]>([
    { y: 0, x: 2 },
    { y: 0, x: 1 },
    { y: 0, x: 0 },
  ]);
  const [food, setFood] = useState<Point>({ x: 0, y: 0 });
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);
  const inputRef = useRef<HTMLDivElement>(null);

  const generateFood = () => {
    const x = Math.floor(Math.random() * GRID_WIDTH);
    const y = Math.floor(Math.random() * GRID_HEIGHT);
    setFood({ x, y });
  };

  const moveSnake = () => {
    const newSnake = [...snake];
    const snakeHead = { ...newSnake[0] };

    if (direction === "UP") {
      snakeHead.y -= 1;
    }
    if (direction === "DOWN") {
      snakeHead.y += 1;
    }
    if (direction === "LEFT") {
      snakeHead.x -= 1;
    }
    if (direction === "RIGHT") {
      snakeHead.x += 1;
    }

    if (
      snakeHead.x < 0 ||
      snakeHead.x >= GRID_WIDTH || // Changed to >= for boundary check
      snakeHead.y < 0 ||
      snakeHead.y >= GRID_HEIGHT || // Changed to >= for boundary check
      newSnake.some(
        (snakePart) =>
          snakePart.x === snakeHead.x && snakePart.y === snakeHead.y
      )
    ) {
      setGameOver(true);
      return;
    }

    newSnake.unshift(snakeHead);

    if (snakeHead.x === food.x && snakeHead.y === food.y) {
      generateFood();
      setScore(score + 1); // Increment score
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (isGameStarted) {
      const interval = setInterval(moveSnake, 60);
      return () => clearInterval(interval);
    }
  }, [snake, direction, isGameStarted]);

  useEffect(() => {
    if (isGameStarted) {
      generateFood();
    }
  }, [isGameStarted]); // Generate food only if the game has started

  const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!isGameStarted) return; // Ignore key presses if the game hasn't started

    if (event.key === "w" && direction !== "DOWN") {
      setDirection("UP");
    }
    if (event.key === "s" && direction !== "UP") {
      setDirection("DOWN");
    }
    if (event.key === "a" && direction !== "RIGHT") {
      setDirection("LEFT");
    }
    if (event.key === "d" && direction !== "LEFT") {
      setDirection("RIGHT");
    }
  };

  const restartGame = () => {
    setSnake([
      { y: 0, x: 2 },
      { y: 0, x: 1 },
      { y: 0, x: 0 },
    ]);
    generateFood();
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0); // Reset score
  };


  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-around">
        <h1
        className="text-center p-4 text-4xl"
        >
          snek game
        </h1>
        <h1 className="text-center p-4 text-4xl">
          <strong>WASD</strong> Keys to move the snake!
        </h1>
        <h1 className="text-center p-4 text-4xl">Score: {score}</h1>
      </div>

      <div
        tabIndex={0}
        onKeyDown={handleKeyPress}
        className="grid grid-cols-20 grid-rows-20 border"
        ref={inputRef}
      >
        {gameOver && (
          <div className="absolute h-full inset-0 flex flex-col justify-center items-center bg-black ">
            <FadeIn>
              <div className="flex items-center justify-center flex-col">
                <Image
                  src={Bee}
                  alt="twerk"
                  className="absolute z-0"
                  unoptimized
                />
                <h1 className="z-10 text-8xl font-bold text-red-500">
                  GAME OVER
                </h1>
                <h2 className="z-10 text-4xl p-4">
                  Your Score:{" "}
                  <strong className="text-green-700">{score}!</strong>
                </h2>
                <motion.button
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  className="z-10 bg-green-800 p-2 rounded-xl"
                  onClick={restartGame}
                >
                  Play Again!
                </motion.button>
              </div>
            </FadeIn>
          </div>
        )}
        {Array.from({ length: GRID_HEIGHT }).map((_, y) => (
          <div autoFocus className="flex " key={y}>
            {Array.from({ length: GRID_WIDTH }).map((_, x) => (
              <div
                autoFocus
                className={`w-10 h-10 border border-gray-400
                ${snake.some((snakePart) => snakePart.x === x && snakePart.y === y) && "bg-green-500"}
                ${food.x === x && food.y === y && "bg-red-500"}
                `}
                key={x}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
