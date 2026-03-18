import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cais Investimentos",
  description:
    "Sua casa de investimentos. Assessoria de investimentos personalizada para pessoas físicas e empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
