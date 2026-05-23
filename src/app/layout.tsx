import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FC 홈페이지 제작 신청",
  description: "유소년 축구 클럽 홈페이지 제작 신청서",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
