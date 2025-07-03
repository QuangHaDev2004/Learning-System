import Image from "next/image"
import Link from "next/link"
import { FaRegEye, FaRegStar } from "react-icons/fa6"

export const CourseItem = () => {
  return (
    <>
      <div className="bg-white dark:bg-darker border border-gray-200 dark:border-gray-200/10 p-[16px] rounded-[8px]">
        <Link
          href="#"
          className="block h-[200px] relative"
        >
          <Image
            src="https://cdn-main.28tech.com.vn/thumbs/anh-khoa-hoc/anh_dai_dien_khoa_hoc/l%E1%BA%ADp%20tr%C3%ACnh%20web%20%20fullstack%20nodejs_thumb_500.png"
            alt=""
            fill
            className="w-full h-full object-cover rounded"
            sizes="@media (min-width: 576px) 300px, 100vw"
            priority
          />
          <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-green-500
            text-xs">
            New
          </span>
        </Link>
        <div className="mt-4">
          <h3 className="mb-4">
            <Link href="#" className="font-bold text-[16px] min-h-[44px] line-clamp-2">
              Lập trình Fullstack 2025
            </Link>
          </h3>
          <div className="flex items-center gap-4 mb-5 text-[14px] text-gray-500">
            <div className="flex items-center gap-1">
              <FaRegEye className="size-4" />
              <span className="">
                1000
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FaRegStar className="size-4" />
              <span className="">
                5.0
              </span>
            </div>
            <span className="font-bold text-primary text-[16px] ml-auto">
              12.800.000đ
            </span>
          </div>
          <Link href="#" className="w-full h-[50px] bg-primary rounded-lg text-white flex items-center justify-center font-bold">
            Xem chi tiết
          </Link>
        </div>
      </div>
    </>
  )
}