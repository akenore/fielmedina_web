import type { Metadata } from "next";
import "./globals.css";
import { ApolloProvider } from "@/components/providers/ApolloProvider";

export const metadata: Metadata = {
  title: "FielMedina - Discover Sousse Medina",
  description: "Your AI-powered guide to explore the UNESCO World Heritage site with interactive stories, GPS navigation, and cultural insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ApolloProvider>
      {children}
    </ApolloProvider>
  );
}
