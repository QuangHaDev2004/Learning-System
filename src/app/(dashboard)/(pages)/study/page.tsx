import { CourseItem } from "@/app/components/course/CourseItem";
import { Title } from "@/app/components/title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khu vực học tập",
  description: "Mô tả chi tiết trang khu vực học tập",
};

export default function StudyPage() {
  return (
    <>
      <Title title="Khu vực học tập" />

      {/* List Course */}
      <div className="grid grid-cols-3 gap-[20px] mt-8">
        {/* Item */}
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </>
  )
}