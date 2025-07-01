import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Learning System",
  description: "Nền tảng học lập trình trực tuyến số 1 Việt Nam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
