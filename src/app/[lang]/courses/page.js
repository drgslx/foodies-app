import PageBannerTitle from "@/components/Shared/PageBannerTitle";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import CoursesList from "@/components/Courses/CoursesList";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getCourses } from "@/actions/getCourses";

export const metadata = {
	title: "Courses | TechFit - Tailwind Nextjs Coaching & Online Courses Template",
};

export default async function CoursesPage({ params: { lang }, searchParams }) {
	const currentUser = await getCurrentUser();
	const { courses, totalPages, totalCourses } = await getCourses(
		searchParams
	);
	return (
		<>
			<PageBannerTitle
				title="Courses"
				homeText="Home"
				homeUrl="/"
				image="/images/page-banner1.jpg"
				image2="/images/page-banner2.jpg"
				image3="/images/page-banner3.jpg"
			/>

			<div className="bg-[#F0F0F0]">
				<CoursesList
					courses={courses}
					totalCourses={totalCourses}
					totalPages={totalPages}
					currentUser={currentUser}
				/>

				
			</div>
		</>
	);
}
