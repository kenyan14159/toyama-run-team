import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "富山県ランニングクラブ連絡会 | Toyama Running Club Association",
  description: "富山マラソン開催をきっかけに県内の市民ランナークラブが集まり結成。富山県内のランニング文化を醸成する為活動しています。",
  keywords: "富山, ランニング, マラソン, クラブ, スポーツ, 練習会, ペースランナー",
  authors: [{ name: "富山県ランニングクラブ連絡会" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
