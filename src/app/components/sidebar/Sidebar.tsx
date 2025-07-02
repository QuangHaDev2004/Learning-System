import Link from "next/link"
import { MenuItem } from "../menuItem/MenuItem"
import { menuItems } from "@/app/contants/contants"

export const Sidebar = () => {
  return (
    <>
      <aside className="p-5 border-r border-r-gray-200 h-screen">
        {/* Logo */}
        <Link href="/" className="font-bold text-3xl block mb-[20px]">
          <span className="text-primary">QuangHa</span>
          Dev
        </Link>

        {/* Menu */}
        <nav>
          <ul className="flex flex-col gap-2">
            {menuItems.map(item => (
              <li key={item.id}>
                <MenuItem
                  url={item.url}
                  title={item.title}
                  icon={item.icon}
                />
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}