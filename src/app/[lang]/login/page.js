import PageBannerTitle from "@/components/Shared/PageBannerTitle";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import LoginForm from "@/components/Auth/LoginForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirect } from "next/navigation";

export default async function Login({ params: { lang } }) {
	const currentUser = await getCurrentUser();
	if (currentUser) {
		redirect(`/${lang}`);
	}
	return (
		<>
			<PageBannerTitle
				title="Login"
				homeText="Home"
				homeUrl="/"
				image="/images/page-banner1.jpg"
				image2="/images/page-banner2.jpg"
				image3="/images/page-banner3.jpg"
			/>

			<div className="bg-[#F0F0F0]">
				<LoginForm />

				
			</div>
		</>
	);
}
