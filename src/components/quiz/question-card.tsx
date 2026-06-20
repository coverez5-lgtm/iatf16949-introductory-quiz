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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
        <RadioGroup
          value={selected}
          onValueChange={(value) => onSelect(value as Choice)}
          disabled={isAnswered}
          className="gap-3"
        >
          {choiceLabels.map((label) => {
            const isSelected = selected === label;
            const isCorrectChoice = label === question.correctAnswer;

            return (
              <Label
                key={label}
                htmlFor={`q${question.id}-${label}`}
                className={cn(
                  "hover:bg-accent/50 flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors",
                  isAnswered && isCorrectChoice && "border-green-300 bg-green-50 dark:bg-green-950/20",
                  isAnswered && isSelected && !isCorrectChoice && "border-red-300 bg-red-50 dark:bg-red-950/20",
                  !isAnswered && isSelected && "border-primary bg-primary/5",
                  isAnswered && "cursor-default",
                )}
              >
                <RadioGroupItem
                  value={label}
                  id={`q${question.id}-${label}`}
                  className="mt-0.5"
                />
                <div className="space-y-1">
                  <span className="text-primary font-bold">{label}</span>
                  <p className="text-sm leading-relaxed font-normal">{question.choices[label]}</p>
                </div>
              </Label>
            );
          })}
        </RadioGroup>

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
