import PageBannerTitle from "@/components/Shared/PageBannerTitle";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import PrivacyPolicyContent from "@/components/PrivacyPolicy/PrivacyPolicyContent";

export default function PrivacyPolicyPage() {
	return (
		<>
			<PageBannerTitle
				title="Privacy Policy"
				homeText="Home"
				homeUrl="/"
				image="/images/page-banner1.jpg"
				image2="/images/page-banner2.jpg"
				image3="/images/page-banner3.jpg"
			/>

			<div className="bg-[#F0F0F0]">
				<PrivacyPolicyContent />

				
			</div>
		</>
	);
}
