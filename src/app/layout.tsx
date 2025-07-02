import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "./components/sidebar/Sidebar";


export const metadata: Metadata = {
  title: "QuangHaDev",
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
        <div className="grid grid-cols-[300px_minmax(0,_1fr)]">
          {/* Sidebar */}
          <Sidebar /> 

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
