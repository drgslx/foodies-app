import PageBannerTitle from "@/components/Shared/PageBannerTitle";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import ServicesList from "@/components/Services/ServicesList";

export default function ServicesPage({ params: { lang } }) {
	return (
		<>
			<PageBannerTitle
				title="Services"
				homeText="Home"
				homeUrl={`/${lang}`}
				image="/images/page-banner1.jpg"
				image2="/images/page-banner2.jpg"
				image3="/images/page-banner3.jpg"
			/>

			<div className="bg-[#F0F0F0]">
				<ServicesList />

				
			</div>
		</>
	);
}
