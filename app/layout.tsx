import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diallock.ai"),
  title: {
    default: "Diallockai – AI-Powered Sales Assistant",
    template: "%s | Diallockai",
  },
  description:
    "Supercharge your sales outreach with Diallockai – an intelligent B2B outbound automation agent for faster conversions.",
  keywords: [
    "AI Sales Assistant",
    "B2B Lead Generation",
    "Sales Outreach Automation",
    "Diallockai",
    "AI for Sales",
    "Cold Emailing Tool",
    "Outbound Sales Automation",
    "Sales Enablement Platform",
  ],
  authors: [{ name: "DialLock AI Team", url: "https://diallock.ai" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://diallock.ai",
    title: "Diallockai – Supercharge Your B2B Sales Outreach",
    description:
      "AI-powered outbound sales agent that accelerates lead engagement and boosts conversions with automation.",
    siteName: "Diallockai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diallockai",
    description:
      "AI-powered outbound assistant to automate and scale your sales.",
    site: "@diallockai",
    creator: "@diallockai",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.className}`}
      suppressHydrationWarning
    >
      <head>
        {/* Canonical link for SEO */}
        <link rel="canonical" href="https://diallock.ai" />

        {/* Structured Data: Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Diallockai",
              url: "https://diallock.ai",
              logo: "https://diallock.ai/favicon.ico",
              sameAs: ["https://www.linkedin.com/company/diallockai/"],
              description:
                "AI-powered outbound sales agent that accelerates lead engagement and boosts conversions with automation.",
            }),
          }}
        />
      </head>

      {/* Google Analytics Scripts */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-5M2VF7EMR3"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5M2VF7EMR3', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <body className="bg-[#f4f5f7] antialiased font-sans min-h-screen flex flex-col relative">
        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main id="main-content" className="flex-grow w-full relative z-20">
          {children}
        </main>

        {/* FOOTER */}
        <footer
          className="relative text-black px-6 py-12"
          style={{
            backgroundColor: "rgba(197, 192, 189, 1)",
            backgroundImage:
              "linear-gradient(rgba(150, 145, 140, 0.4), rgba(180, 175, 170, 0.6))",
          }}
        >
          <div className="absolute inset-0 bg-white opacity-60 pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
            {/* Explore */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">Explore</h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                Explore our features, services, and marketing content.
              </p>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                Connect With Us
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Follow us for updates, insights, and growth strategies:
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.linkedin.com/company/diallockai/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-blue-700 hover:text-blue-500 transition"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 
                        0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11.5 
                        19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 
                        1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 
                        1.75zm13 12.268h-3v-5.604c0-1.337-.026-3.062-1.865-3.062-1.867 
                        0-2.153 1.459-2.153 2.963v5.703h-3v-11h2.885v1.5h.042c.402-.76 
                        1.384-1.563 2.85-1.563 3.05 0 3.615 2.007 3.615 4.617v6.446z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Our Products */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                Our Products
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "Diallockai DeepAgent",
                  "Diallockai Growth",
                  "Diallockai HyperReach",
                  "Diallockai Forms",
                  "Diallockai Testimonials",
                  "Diallockai Optinly",
                  "Diallockai Content.Ai",
                  "Diallockai Engage",
                  "Diallockai Notify",
                ].map((item) => (
                  <li
                    key={item}
                    className="hover:text-blue-400 cursor-pointer font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-500">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="hover:text-blue-400 cursor-pointer font-medium">
                  <Link href="/features">Products Feature Updates</Link>
                </li>
                <li className="hover:text-blue-400 cursor-pointer font-medium">
                  <Link href="/partner-program">Partner Program</Link>
                </li>
                <li className="hover:text-blue-400 cursor-pointer font-medium">
                  <Link href="/referral-program">Referral Program</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative z-20 max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 flex flex-col items-center text-center space-y-2">
            <p className="text-xs text-gray-900 font-medium">
              © {new Date().getFullYear()} Diallockai. Made with ❤️ from India to{" "}
              <a
                href="https://yourportfolio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-500"
              >
                World
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
