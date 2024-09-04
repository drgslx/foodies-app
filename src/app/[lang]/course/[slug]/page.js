import PageBannerTitle from "@/components/Shared/PageBannerTitle";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import CourseDetailsContent from "@/components/CourseDetails/CourseDetailsContent";
import RelatedCourses from "@/components/Courses/RelatedCourses";
import { getSingleCourse } from "@/actions/getSingleCourse";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function generateMetadata({ params }) {
	const { course } = await getSingleCourse(params);
	return {
		title: course.title,
		openGraph: {
			images: [course.image],
		},
	};
}

export default async function CourseDetailsPage({ params }) {
	const { course, related } = await getSingleCourse(params);
	const currentUser = await getCurrentUser();
	// console.log(related);
	return (
		<>
			<PageBannerTitle
				title={course.title}
				homeText="Home"
				homeUrl="/"
				image="/images/page-banner1.jpg"
				image2="/images/page-banner2.jpg"
				image3="/images/page-banner3.jpg"
			/>

			<div className="bg-[#F0F0F0]">
				<CourseDetailsContent
					course={course}
					currentUser={currentUser}
				/>

				<RelatedCourses related={related} currentUser={currentUser} />

				
			</div>
		</>
	);
}
