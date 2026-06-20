"use client";

import { BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Chapter {
  id: string;
  label: string;
  subtitle: string;
  difficulty: string;
}

interface StartScreenProps {
  chapters: Chapter[];
  onStart: () => void;
}

export function StartScreen({ chapters, onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="size-5" />
            使い方
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="text-muted-foreground list-decimal space-y-2 pl-5 text-sm leading-relaxed">
            <li>まず第1章（基礎編）から順番に解いてください。</li>
            <li>選択肢を選んだあと、解答・解説を読んで理解を確認します。</li>
            <li>全20問を解き終えたら採点表で自己採点してください。</li>
            <li>8割以上なら第2章（応用編）の理解も十分な目安です。</li>
          </ol>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        {chapters.map((chapter) => (
          <Card key={chapter.id}>
            <CardHeader>
              <CardDescription className="text-primary flex items-center gap-1 font-bold">
                <Star className="size-3.5" />
                {chapter.difficulty}
              </CardDescription>
              <CardTitle className="text-base">{chapter.label}</CardTitle>
              <CardDescription>{chapter.subtitle}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Button type="button" size="lg" className="w-full" onClick={onStart}>
        クイズを始める
      </Button>
    </div>
  );
}
