import PageBannerTitle from "@/components/Shared/PageBannerTitle";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";

export default function BlogDetailsPage() {
	return (
		<>
			<PageBannerTitle
				title="Blog setails"
				homeText="Home"
				homeUrl="/"
				image="/images/page-banner1.jpg"
				image2="/images/page-banner2.jpg"
				image3="/images/page-banner3.jpg"
			/>

			<div className="bg-[#F0F0F0]">
				<BlogDetailsContent />

				
			</div>
		</>
	);
}
