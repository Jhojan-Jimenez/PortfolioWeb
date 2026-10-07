import type React from "react";
import type { Metadata } from "next";
import { Figtree, JetBrains_Mono } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jhojan Jimenez — Software Engineer & Cloud Architect",
  description:
    "Software Engineer specializing in Distributed Systems, Kubernetes Orchestration, and Applied AI.",
  keywords:
    "software engineer, cloud architect, kubernetes, nestjs, fastapi, pgvector, clip, distributed systems, argocd, jhojan jimenez",
  authors: [{ name: "Jhojan Jimenez" }],
  openGraph: {
    title: "Jhojan Jimenez — Software Engineer & Cloud Architect",
    description: "Software Engineer specializing in Distributed Systems & Cloud Architecture",
    type: "website",
  },
};

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "ytwe0d4uv7";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-WWLTJ9JJZ5";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`dark ${figtree.variable} ${jetbrainsMono.variable}`}
      >
        <body className="text-neutral-100 font-sans antialiased selection:bg-purple-900/50 selection:text-white">
          <LanguageProvider>{children}</LanguageProvider>

          {/* Microsoft Clarity */}
          {CLARITY_ID && (
            <Script id="microsoft-clarity" strategy="afterInteractive">
              {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_ID}");
              `}
            </Script>
          )}

          {/* Google Analytics (gtag.js) */}
          {GA_ID && (
            <>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `}
              </Script>
            </>
          )}
        </body>
      </html>
    </ViewTransitions>
  );
}
