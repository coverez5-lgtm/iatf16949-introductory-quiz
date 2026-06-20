import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IATF 16949 初心者向け理解度クイズ",
  description:
    "IATF 16949（自動車産業の品質マネジメントシステム規格）について、初めて学ぶ方向けの理解度クイズです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
