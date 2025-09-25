import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "AI Email Assistant",
  description: "Generate professional emails with AI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
