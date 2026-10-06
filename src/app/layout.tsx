import type { Metadata } from "next";
import { Bricolage_Grotesque, Literata } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${literata.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-serif">
        <div className="mx-auto flex w-full flex-1 flex-col px-5 sm:px-10 lg:px-16 xl:px-24">
          <SiteHeader />
          <main className="flex-1 py-10 sm:py-14">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
