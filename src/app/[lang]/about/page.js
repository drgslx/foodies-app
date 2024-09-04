import PageBannerTitle from "@/components/Shared/PageBannerTitle";
import Services from "@/components/Shared/Services";
import AboutMe from "@/components/About/AboutMe";
import AboutUs from "@/components/About/AboutUs";
import WorkingProcess from "@/components/Shared/WorkingProcess";
import FeedbackSlider from "@/components/Shared/FeedbackSlider";
import OurLatestBlogPosts from "@/components/Shared/OurLatestBlogPosts";
import NewsletterBox from "@/components/Shared/NewsletterBox";

export default function AboutUsPage({ params: { lang } }) {
	return (
		<>
			<PageBannerTitle
				title="About Us"
				homeText="Home"
				homeUrl={`/${lang}`}
				image="/images/page-banner1.jpg"
				image2="/images/page-banner2.jpg"
				image3="/images/page-banner3.jpg"
			/>

			<div className="bg-[#F0F0F0]">
				<div className="pt-[50px] md:pt-[80px] lg:pt-[140px]">
					<AboutMe />

					<AboutUs />
				</div>

				<Services />

				<WorkingProcess />

				<FeedbackSlider />

				<div className="pb-[50px] md:pb-[60px] lg:pb-[140px]">
					<OurLatestBlogPosts />
				</div>

				
			</div>
		</>
	);
}
