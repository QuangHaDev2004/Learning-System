"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

export const MenuItem = (
  props: {
    url: string,
    title: string,
    icon?: React.ReactNode
  }
) => {
  const { url, title, icon } = props;

  const pathname = usePathname();
  const isActive = url === pathname;

  return (
    <>
      <Link
        href={url}
        className={
          `font-[500] p-3 rounded-[6px] flex items-center gap-3 transition-all 
            ${isActive
            ? "text-white bg-primary"
            : "hover:text-primary hover:bg-primary/10"
          }`
        }
      >
        {icon}
        {title}
      </Link>
    </>
  )
}