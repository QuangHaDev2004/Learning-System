import { auth } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "QuangHaDev",
  description: "Nền tảng học lập trình trực tuyến số 1 Việt Nam",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = await auth();

  if (!userId) return redirect("/sign-in");

  return (
    <>
      <div className="">
        {children}
      </div>
    </>
  );
}
