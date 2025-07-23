import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Boho House - a home away from home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
