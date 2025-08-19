 import CourseDetailBanner from "@/component/course-detail/Banner";
import CourseContent from "@/component/course-detail/CourseContent";
import CourseDetails from "@/component/course-detail/CourseDetail";
import CourseHero from "@/component/course-detail/CourseDetailHero";

export default function CourseDetail() {
  return (
     <>
     <CourseDetailBanner/>
      <div className="min-h-screen ">
      <div className="container px-4 py-6 mx-auto max-w-[89rem] ">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 lg:col-span-2">
            <CourseHero />
            <CourseContent/>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CourseDetails/>
          </div>
        </div>
      </div>
    </div>
     </>
  );
}