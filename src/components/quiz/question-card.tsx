"use client";

import { ChevronDown } from "lucide-react";
import type { Choice, Question } from "@/data/quiz";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: Question;
  selected?: Choice;
  onSelect: (choice: Choice) => void;
}

const choiceLabels: Choice[] = ["A", "B", "C", "D"];

export function QuestionCard({ question, selected, onSelect }: QuestionCardProps) {
  const isAnswered = selected !== undefined;
  const isCorrect = selected === question.correctAnswer;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{question.chapterLabel}</Badge>
          <CardDescription className="font-semibold">Q{question.id}</CardDescription>
        </div>
        <CardTitle className="text-lg leading-relaxed">{question.text}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div
          role="radiogroup"
          aria-label={`Q${question.id} の選択肢`}
          className="flex flex-col gap-3"
        >
          {choiceLabels.map((label) => {
            const isSelected = selected === label;
            const isCorrectChoice = label === question.correctAnswer;

            return (
              <button
                key={label}
                type="button"
                role="radio"
                aria-checked={isSelected}
                disabled={isAnswered}
                onClick={() => onSelect(label)}
                className={cn(
                  "hover:bg-accent/50 flex w-full cursor-pointer items-start gap-3 rounded-lg border p-4 text-left transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-default",
                  isAnswered && isCorrectChoice && "border-green-300 bg-green-50 dark:bg-green-950/20",
                  isAnswered && isSelected && !isCorrectChoice && "border-red-300 bg-red-50 dark:bg-red-950/20",
                  !isAnswered && isSelected && "border-primary bg-primary/5",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border shadow-xs",
                    isSelected ? "border-primary" : "border-input",
                  )}
                >
                  {isSelected && <span className="bg-primary size-2 rounded-full" />}
                </span>
                <div className="space-y-1">
                  <span className="text-primary font-bold">{label}</span>
                  <p className="text-sm leading-relaxed font-normal">{question.choices[label]}</p>
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <Collapsible defaultOpen>
            <CollapsibleTrigger className="bg-muted hover:bg-muted/80 flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold">
              解答・解説
              <ChevronDown className="size-4 transition-transform [[data-state=open]_&]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-3 px-1 pt-4">
              <Badge variant={isCorrect ? "secondary" : "destructive"} className="text-sm">
                {isCorrect ? "正解！" : `不正解 — 正解は ${question.correctAnswer} です`}
              </Badge>
              {question.explanation.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </CollapsibleContent>
          </Collapsible>
        )}
      </CardContent>
    </Card>
  );
}
