"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "/public/images/logo.png";
import { useParams } from "next/navigation";

const Footer = () => {
	const { lang } = useParams();
	return (
		<>
			<footer className="bg-[#FCA120] pt-[50px] md:pt-[60px] lg:pt-[140px]">
				<div className="container mx-auto">
					<div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
						<div
							className="lg:flex items-center space-y-[30px] lg:space-y-[0] lg:space-x-[50px] rtl:space-x-reverse"
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<Link href={`/${lang}`}>
								<Image src={logo} alt="logo" />
							</Link>

							<div className="flex items-center space-x-[10px] rtl:space-x-reverse">
								<p className="text-[#0a040499] text-[16px] lg:text-[20px]">
									Follow On:
								</p>

								<ul className="space-x-[10px] rtl:space-x-reverse">
									<li className="inline-block">
										<a
											href="https://www.facebook.com/"
											target="_black"
											className="bg-[#0a040414] text-[#0a0404] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#051F0D]"
										>
											<i className="ri-facebook-fill"></i>
										</a>
									</li>

									<li className="inline-block">
										<a
											href="https://www.twitter.com/"
											target="_black"
											className="bg-[#0a040414] text-[#0a0404] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#051F0D]"
										>
											<i className="ri-twitter-fill"></i>
										</a>
									</li>

									<li className="inline-block">
										<a
											href="https://www.linkedin.com/"
											target="_black"
											className="bg-[#0a040414] text-[#0a0404] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#051F0D]"
										>
											<i className="ri-linkedin-fill"></i>
										</a>
									</li>

									<li className="inline-block">
										<a
											href="https://www.instagram.com/"
											target="_black"
											className="bg-[#0a040414] text-[#0a0404] inline-block w-[32px] h-[32px] leading-[32px] text-center rounded-full transition duration-500 ease-in-out hover:bg-[#fff] hover:text-[#051F0D]"
										>
											<i className="ri-instagram-fill"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div
							className="md:text-end"
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<a
								href="mailto:techfit@gmail.com"
								className="primaryText font-semibold text-[20px] lg:text-[30px] transition duration-500 ease-in-out hover:text-[#fff]"
							>
								techfit@gmail.com
							</a>{" "}
							<br />
							<a
								href="tel:+838 9838 93909"
								className="primaryText font-semibold text-[20px] lg:text-[30px] transition duration-500 ease-in-out hover:text-[#fff]"
							>
								+838 9838 93909
							</a>
						</div>
					</div>

					<hr className="border-[#0a04041C] my-[50px] md:my-[60px] lg:my-[70px]" />

					<div className="grid gap-[30px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
						<div
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<h3 className="text-[#0a0404] text-[20px] mb-[30px] leading-none">
								Explore More
							</h3>

							<ul className="space-y-[14px]">
								<li>
									<Link
										href={`/${lang}/privacy-policy`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										Privacy Policy
									</Link>
								</li>

								<li>
									<Link
										href={`/${lang}/terms-conditions`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										Terms & Condition
									</Link>
								</li>

								<li>
									<Link
										href={`/${lang}/profile/info`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										My account
									</Link>
								</li>
							</ul>
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<h3 className="text-[#0a0404] text-[20px] mb-[30px] leading-none">
								Popular Searches
							</h3>

							<ul className="space-y-[14px]">
								<li>
									<Link
										href={`/${lang}/courses?q=Muscle`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										Build Muscle
									</Link>
								</li>

								<li>
									<Link
										href={`/${lang}/courses?q=gym`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										Gym
									</Link>
								</li>

								<li>
									<Link
										href={`/${lang}/courses?q=Transformation`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										Body Transformation
									</Link>
								</li>
							</ul>
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="300"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<h3 className="text-[#0a0404] text-[20px] mb-[30px] leading-none">
								Quick Links
							</h3>

							<ul className="space-y-[14px]">
								<li>
									<Link
										href={`/${lang}/courses`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										All Courses
									</Link>
								</li>

								<li>
									<Link
										href={`/${lang}/contact`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										Contact
									</Link>
								</li>

								<li>
									<Link
										href={`/${lang}/about`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										About
									</Link>
								</li>
							</ul>
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<h3 className="text-[#0a0404] text-[20px] mb-[30px] leading-none">
								Help & support
							</h3>

							<ul className="space-y-[14px]">
								<li>
									<Link
										href={`/${lang}/faq`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										FAQ’s
									</Link>
								</li>

								<li>
									<Link
										href={`/${lang}/contact`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										Online Support
									</Link>
								</li>

								<li>
									<Link
										href={`/${lang}/blog`}
										className="text-[#0a040499] transition duration-500 ease-in-out hover:text-[#fff]"
									>
										Blog
									</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Copyright */}
					<div className="text-center border-t border-[#0a04041C] py-[25px] mt-[50px] md:mt-[80px] lg:mt-[140px]">
						<p className="text-[#0a040499]">
							&copy; Foodies app 2024. All Rights reserved by{" "}
							<a
								href="https://google.com/"
								target="_blank"
								className="text-[#FF7A00]"
							>
								Dragos Alexa
							</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
