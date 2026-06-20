"use client";

import { useMemo, useState } from "react";
import {
  chapters,
  keywords,
  questions,
  scoreLevels,
  type Choice,
} from "@/data/quiz";
import { QuestionCard } from "@/components/quiz/question-card";
import { ResultScreen } from "@/components/quiz/result-screen";
import { StartScreen } from "@/components/quiz/start-screen";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Screen = "start" | "quiz" | "result";

export function QuizApp() {
  const [screen, setScreen] = useState<Screen>("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Choice>>({});

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progressValue = ((currentIndex + 1) / questions.length) * 100;

  const score = useMemo(
    () =>
      questions.reduce(
        (total, q) => total + (answers[q.id] === q.correctAnswer ? 1 : 0),
        0,
      ),
    [answers],
  );

  const levelLabel =
    scoreLevels.find((level) => score >= level.min)?.label ?? scoreLevels.at(-1)!.label;

  function handleStart() {
    setScreen("quiz");
    setCurrentIndex(0);
    setAnswers({});
  }

  function handleSelect(choice: Choice) {
    if (answers[currentQuestion.id]) return;
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: choice }));
  }

  function handleNext() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setScreen("result");
    }
  }

  function handlePrev() {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }

  function handleRestart() {
    setScreen("start");
    setCurrentIndex(0);
    setAnswers({});
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-8">
      <header className="mb-8 text-center">
        <p className="text-primary mb-2 text-sm font-bold tracking-widest uppercase">
          IATF 16949
        </p>
        <h1 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
          初心者向け理解度クイズ
        </h1>
        <p className="text-muted-foreground mx-auto max-w-xl text-sm sm:text-base">
          自動車産業の品質マネジメント規格について、初めて学ぶ方向けの20問です。
        </p>
      </header>

      <main className="flex flex-1 flex-col gap-6">
        {screen === "start" && <StartScreen chapters={chapters} onStart={handleStart} />}

        {screen === "quiz" && currentQuestion && (
          <>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  問題 {currentIndex + 1} / {questions.length}
                </span>
                <span className="text-muted-foreground">回答済み {answeredCount} 問</span>
              </div>
              <Progress value={progressValue} />
            </div>

            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              selected={answers[currentQuestion.id]}
              onSelect={handleSelect}
            />

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                前の問題
              </Button>
              <Button
                type="button"
                className="flex-1"
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
              >
                {currentIndex === questions.length - 1 ? "結果を見る" : "次の問題"}
              </Button>
            </div>
          </>
        )}

        {screen === "result" && (
          <ResultScreen
            questions={questions}
            answers={answers}
            score={score}
            levelLabel={levelLabel}
            keywords={keywords}
            onRestart={handleRestart}
          />
        )}
      </main>

      <Separator className="my-8" />

      <footer className="text-muted-foreground text-center text-sm">
        <p>作成日：2026年6月20日</p>
      </footer>
    </div>
  );
}
