import PageBannerTitle from "@/components/Shared/PageBannerTitle";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";
import { getSingleCourse } from "@/actions/instructor/getSingleCourse";
import Asset from "./Asset";

export default async function CreateCoursePage({ params: { courseId, lang } }) {
	const { course_assets } = await getSingleCourse(courseId);
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		redirect(`/${lang}`);
	}
	return (
		<>
			<PageBannerTitle
				title={`Upload Assets`}
				homeText="Home"
				homeUrl={`/${lang}`}
				image="/images/page-banner1.jpg"
				image2="/images/page-banner2.jpg"
				image3="/images/page-banner3.jpg"
			/>

			<div className="bg-[#F0F0F0]">
				<Asset courseId={courseId} assets={course_assets} />

				
			</div>
		</>
	);
}
