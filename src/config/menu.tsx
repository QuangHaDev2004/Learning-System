import { BsBox } from "react-icons/bs";
import { FaRegCirclePlay, FaRegComment, FaRegCompass } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoBookOutline } from "react-icons/io5";

export const menuItems = [
  {
    id: 1,
    url: "/",
    title: "Khám phá",
    icon: <FaRegCompass className="size-5" />
  },
  {
    id: 2,
    url: "/study",
    title: "Khu vực học tập",
    icon: <IoBookOutline className="size-5" />
  },
  {
    id: 3,
    url: "/manage/course",
    title: "Quản lý khóa học",
    icon: <FaRegCirclePlay className="size-5" />
  },
  {
    id: 4,
    url: "/manage/member",
    title: "Quản lý thành viên",
    icon: <HiOutlineUsers className="size-5" />
  },
  {
    id: 5,
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <BsBox className="size-5" />
  },
  {
    id: 6,
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <FaRegComment className="size-5" />
  },
  
]