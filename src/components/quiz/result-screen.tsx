"use client";

import type { Choice, Question } from "@/data/quiz";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Keyword {
  term: string;
  desc: string;
}

interface ResultScreenProps {
  questions: Question[];
  answers: Record<number, Choice>;
  score: number;
  levelLabel: string;
  keywords: Keyword[];
  onRestart: () => void;
}

export function ResultScreen({
  questions,
  answers,
  score,
  levelLabel,
  keywords,
  onRestart,
}: ResultScreenProps) {
  const percentage = Math.round((score / questions.length) * 100);
  const basicScore = questions
    .filter((q) => q.chapter === "basic")
    .reduce((total, q) => total + (answers[q.id] === q.correctAnswer ? 1 : 0), 0);
  const advancedScore = questions
    .filter((q) => q.chapter === "advanced")
    .reduce((total, q) => total + (answers[q.id] === q.correctAnswer ? 1 : 0), 0);

  return (
    <div className="flex flex-col gap-6">
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-muted-foreground text-base font-normal">
            あなたのスコア
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-primary text-5xl font-bold tracking-tight">
            {score}
            <span className="text-muted-foreground text-2xl font-semibold">
              {" "}
              / {questions.length}
            </span>
          </p>
          <p className="text-xl font-bold">{percentage}%</p>
          <div className="bg-primary/10 text-primary rounded-lg px-4 py-3 text-sm font-medium">
            {levelLabel}
          </div>
          <div className="text-muted-foreground flex justify-center gap-6 text-sm">
            <p>基礎編：{basicScore} / 10</p>
            <p>応用編：{advancedScore} / 10</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>採点表</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>章</TableHead>
                <TableHead>問題</TableHead>
                <TableHead>正解</TableHead>
                <TableHead>あなたの回答</TableHead>
                <TableHead>正誤</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map((q) => {
                const userAnswer = answers[q.id];
                const correct = userAnswer === q.correctAnswer;
                return (
                  <TableRow key={q.id}>
                    <TableCell>{q.chapterLabel}</TableCell>
                    <TableCell>Q{q.id}</TableCell>
                    <TableCell>{q.correctAnswer}</TableCell>
                    <TableCell>{userAnswer ?? "—"}</TableCell>
                    <TableCell>
                      <Badge
                        variant={correct ? "secondary" : "destructive"}
                        className={cn(!correct && "font-bold")}
                      >
                        {correct ? "○" : "×"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>復習用：キーワード早見表</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-3 sm:grid-cols-2">
            {keywords.map((kw) => (
              <div key={kw.term} className="bg-muted/50 rounded-lg border p-3">
                <dt className="mb-1 text-sm font-bold">{kw.term}</dt>
                <dd className="text-muted-foreground text-sm">{kw.desc}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>

      <Button type="button" size="lg" className="w-full" onClick={onRestart}>
        もう一度挑戦する
      </Button>
    </div>
  );
}
