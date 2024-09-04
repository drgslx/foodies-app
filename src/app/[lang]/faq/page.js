import PageBannerTitle from "@/components/Shared/PageBannerTitle";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import FaqContent from "@/components/Faq/FaqContent";

export default function FaqPage() {
	return (
		<>
			<PageBannerTitle
				title="FAQ's"
				homeText="Home"
				homeUrl="/"
				image="/images/page-banner1.jpg"
				image2="/images/page-banner2.jpg"
				image3="/images/page-banner3.jpg"
			/>

			<div className="bg-[#F0F0F0]">
				<FaqContent />

				
			</div>
		</>
	);
}
