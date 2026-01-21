import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://toyama-run-team.pages.dev";

export const metadata: Metadata = {
  title: {
    default: "富山県ランニングクラブ連絡会 | Toyama Running Club Association",
    template: "%s | 富山県ランニングクラブ連絡会",
  },
  description: "富山マラソン開催をきっかけに県内の市民ランナークラブが集まり結成。富山県内のランニング文化を醸成する為活動しています。25のランニングクラブが加盟し、初心者から上級者まで楽しく走れる環境を提供しています。",
  keywords: [
    "富山県",
    "ランニング",
    "マラソン",
    "ランニングクラブ",
    "富山マラソン",
    "市民ランナー",
    "練習会",
    "ペースランナー",
    "スポーツ",
    "富山県ランニングクラブ連絡会",
  ],
  authors: [{ name: "富山県ランニングクラブ連絡会" }],
  creator: "富山県ランニングクラブ連絡会",
  publisher: "富山県ランニングクラブ連絡会",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    title: "富山県ランニングクラブ連絡会 | Toyama Running Club Association",
    description: "富山マラソン開催をきっかけに県内の市民ランナークラブが集まり結成。富山県内のランニング文化を醸成する為活動しています。",
    siteName: "富山県ランニングクラブ連絡会",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "富山県ランニングクラブ連絡会",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "富山県ランニングクラブ連絡会 | Toyama Running Club Association",
    description: "富山マラソン開催をきっかけに県内の市民ランナークラブが集まり結成。富山県内のランニング文化を醸成する為活動しています。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console verification code を追加する場合はここに記載
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "富山県ランニングクラブ連絡会",
    alternateName: "Toyama Running Club Association",
    url: "https://toyama-run-team.pages.dev",
    description:
      "富山マラソン開催をきっかけに県内の市民ランナークラブが集まり結成。富山県内のランニング文化を醸成する為活動しています。",
    areaServed: {
      "@type": "Place",
      name: "富山県",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "toyamakenrun@gmail.com",
      contactType: "Customer Service",
      availableLanguage: ["Japanese"],
    },
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
