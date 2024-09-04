"use client";

import React from "react";
import Image from "next/image";

import aboutMe from "/public/images/online-training-coach/about-me.jpg";

const AboutMe = () => {
	return (
		<>
			<div className="pb-[50px] md:pb-[60px] lg:pb-[140px] 2xl:pb-[0] otc-aboutme-content">
				<div className="otc-aboutme-content container 2xl:p-0 2xl:max-w-[1920px] mx-auto 2xl:mb-[-100px]">
					<div className="otc-aboutme-before relative 2xl:pt-[100px] 2xl:pr-[100px] rtl:2xl:pr-0 rtl:2xl:pl-[100px 2xl:before:content-[''] 2xl:before:bg-[#051F0D] 2xl:before:absolute 2xl:before:top-0 2xl:before:right-0 rtl:2xl:before:right-auto rtl:2xl:before:left-0 2xl:before:w-[817px] 2xl:before:h-[578px]">
						<div className="grid gap-[30px] md:gap-[30px] lg:gap-[80px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
							<div
								className="2xl:ml-auto rtl:2xl:ml-0 rtl:2xl:mr-auto 2xl:max-w-[570px] relative z-10"
								data-aos="fade-up"
								data-aos-delay="100"
								data-aos-duration="800"
								data-aos-once="true"
							>
								<h2 className="text-[30px] md:text-[35px] lg:text-[50px] xl:text-[80px] md:tracking-[-1.2px] leading-none mb-[15px] text-black">
									About me
								</h2>

								<p className="mb-[20px] text-[15px]">
									Learn about how them you went down prying
									the wedding ring off his cold, dead finger.
									I don’t know what you did, Fry, but once
									again, you screwed up! Now all the planets
									are gonna start cracking wise about our
									mamas.
								</p>

								<p className="mb-[20px] text-[15px]">
									Our personalized one-on-one coaching
									sessions provide you dedicated time and
									attention to explore your goals.
								</p>

								<div className="relative my-[30px] md:my-[40px] lg:my-[50px] xl:my-[70px] space-y-[30px] lg:space-y-[0]">
									<div>
										<h2 className="text-[#FF7A00] font-bold text-[30px] md:text-[40px] lg:text-[50px] xl:text-[80px] leading-none">
											643+
										</h2>
										<p>Students Satisfied</p>
									</div>

									<div className="primaryBg px-[30px] py-[25px] font-semibold text-white text-[16px] xl:text-[20px] lg:absolute lg:top-[-25px] lg:left-[225px] rtl:lg:left-auto rtl:lg:right-[225px] lg:w-[642px] lg:z-10">
										“Learn about how them you went down
										prying the ring off his cold, his dead
										finger. I don’t know what you a did,
										Fry, but once again, you screwed up!”
									</div>
								</div>

								<p className="text-[15px]">
									Our personalized one-on-one coaching
									sessions provide you dedicated time and
									attention to explore your goals.
								</p>
							</div>

							<div
								className="relative z-0"
								data-aos="fade-up"
								data-aos-delay="200"
								data-aos-duration="800"
								data-aos-once="true"
							>
								<Image src={aboutMe} alt="aboutMe" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
