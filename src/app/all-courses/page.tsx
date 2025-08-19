import AllCoursesBanner from "@/component/all-courses/AllCourses";
import CourseBottomSection from "@/component/all-courses/CourseBottomSection";
import CoursesContent from "@/component/all-courses/CourseContents";
import CourseCards from "@/component/all-courses/CoursesCard";

export default function AllCourses() {
  return (
     <>
      <AllCoursesBanner/>
      <CoursesContent/>
      <CourseCards/>
      <CourseBottomSection/>
     </>
  );
}