import { League_Spartan, Poppins } from "next/font/google";
import "swiper/css/bundle";
import "../../../public/css/navbar.css";
import "remixicon/fonts/remixicon.css";
import "../globals.css";
import TosterProvider from "@/providers/TosterProvider";
import AosProvider from "@/providers/AosProvider";
import BackToTop from "@/components/Layout/BackToTop";
import TopHeader from "@/components/Layout/TopHeader";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { getCurrentUser } from "@/actions/getCurrentUser";
import LanguageSwitcher from "@/components/Layout/LangSwitcher";

// For all heading font
const league_spartan = League_Spartan({
	subsets: ["latin"],
	variable: "--font-league-spartan",
	display: "swap",
});

// For all body text font
const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata = {
	title: "TechFit - Tailwind Nextjs 14+ Coaching & Online Courses Template",
	description: "Tailwind Nextjs 14+ Coaching & Online Courses Template",
};

export default async function RootLayout({ children, params: { lang } }) {
	const currentUser = await getCurrentUser();
	// console.log(currentUser);
	return (
		<html
			lang={lang}
			dir={lang === "ar" ? "rtl" : "ltr"}
			className={`${league_spartan.variable} ${poppins.variable}`}
		>
			<body className={poppins.variable} suppressHydrationWarning={true}>
				<TosterProvider />
				<TopHeader />
				<Navbar currentUser={currentUser} />
				{children}
				<AosProvider />
				<BackToTop />
				<Footer />
				<LanguageSwitcher />
			</body>
		</html>
	);
}
