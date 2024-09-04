import HeroBanner from "@/components/Index/HeroBanner";
import Services from "@/components/Index/Services";
import AboutMe from "@/components/Index/AboutMe";
import Cta from "@/components/Shared/Cta";
import PopularCourses from "@/components/Index/PopularCourses";
import Trainer from "@/components/Index/Trainer";
import PromoVideo from "@/components/Shared/PromoVideo";
import FeedbackSlider from "@/components/Shared/FeedbackSlider";
import HealthCoachDietPlan from "@/components/Index/HealthCoachDietPlan";
import OurNextEvents from "@/components/Shared/OurNextEvents";
import OurLatestBlogPosts from "@/components/Shared/OurLatestBlogPosts";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { getTestimonials } from "@/actions/admin/getTestimonials";
import { getHomepageCourses } from "@/actions/getCourses";
// import { getDictionary } from "./dictionaries";

export const metadata = {
	title: "Home | TechFit - Tailwind Nextjs Coaching & Online Courses Template",
};

export default async function Home({ params: { lang } }) {
	// const dict = await getDictionary(lang);
	const currentUser = await getCurrentUser();
	const { testimonials } = await getTestimonials();
	return (
		<>
			<div className="bg-[#F0F0F0]">
				<HeroBanner currentUser={currentUser} />

				<Services />

				<AboutMe />


				<Cta />

				<Trainer />

				<PromoVideo />

				<FeedbackSlider testimonials={testimonials} />

				<HealthCoachDietPlan />

				<OurNextEvents />

				<div className="py-[50px] md:py-[60px] lg:py-[140px]">
					<OurLatestBlogPosts />
				</div>

				
			</div>
		</>
	);
}
