import { CourseItem } from "../components/course/CourseItem";
import { Title } from "../components/title/Title";

export default function Home() {
  return (
    <>
      <Title title="Khám phá" />

      {/* List Course */}
      <div className="grid grid-cols-3 gap-[20px] mt-8">
        {/* Item */}
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </>
  );
}
