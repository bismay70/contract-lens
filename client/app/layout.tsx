import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContractLens | Enterprise Intelligence",
  description: "Evidence-based AI dashboard for enterprise contract intelligence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
