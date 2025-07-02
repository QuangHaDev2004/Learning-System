import type { Metadata } from "next";
import { Sidebar } from "../components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Hệ thống học tập online",
  description: "Nền tảng học lập trình trực tuyến số 1 Việt Nam",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className="grid grid-cols-[300px_minmax(0,_1fr)]">
      {/* Sidebar */}
      <Sidebar />

      <main className="p-5">{children}</main>
    </div>
  );
}
