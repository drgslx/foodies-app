"use client";

import React from "react";
import Image from "next/image";

import about from "/public/images/online-training-coach/about.jpg";

const AboutUs = () => {
	return (
		<>
			<div className="container mx-auto overflow-hidden">
				<div className="bg-[#FCA120] 2xl:rounded-t-[300px] px-[20px] md:px-[60px] lg:px-[80px] xl:px-[120px] pt-[50px] md:pt-[60px] lg:pt-[140px] 2xl:pt-[240px]">
					<div>
						<div className="lg:flex items-center mb-[20px] md:mb-[30px] space-y-[30px] lg:space-y-[0] lg:space-x-[50px] rtl:space-x-reverse">
							<Image
								src={about}
								alt="about"
								data-aos="fade-in"
								data-aos-delay="100"
								data-aos-duration="800"
								data-aos-once="true"
							/>

							<h2
								className="text-[#F8F1E1] text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[75px] font-bold leading-[1.2] lg:leading-none"
								data-aos="fade-in"
								data-aos-delay="200"
								data-aos-duration="800"
								data-aos-once="true"
							>
								The story behind our coaching center
							</h2>
						</div>

						<div
							className="text-[#F8F1E1BF] max-w-[864px] ml-auto space-y-[15px]"
							data-aos="fade-in"
							data-aos-delay="300"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<p>
								Learn about how them you went down prying the
								wedding ring off his cold, dead finger. I don’t
								know what you did, Fry, but once again, you
								screwed up! Now all the planets are gonna start
								cracking wise about our mamas.
							</p>
						</div>
					</div>

					<div className="py-[50px] md:py-[60px] lg:py-[140px]">
						<div className="grid gap-[30px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
							<div
								data-aos="fade-in"
								data-aos-delay="100"
								data-aos-duration="800"
								data-aos-once="true"
							>
								<h2 className="text-[#F8F1E1] text-[50px] md:text-[55px] xl:text-[80px] leading-none">
									97+
								</h2>
								<p className="text-[#F8F1E1]">
									We Award Wining
								</p>
							</div>

							<div
								data-aos="fade-in"
								data-aos-delay="200"
								data-aos-duration="800"
								data-aos-once="true"
							>
								<h2 className="text-[#F8F1E1] text-[50px] md:text-[55px] xl:text-[80px] leading-none">
									965+
								</h2>
								<p className="text-[#F8F1E1]">Total Courses</p>
							</div>

							<div
								data-aos="fade-in"
								data-aos-delay="300"
								data-aos-duration="800"
								data-aos-once="true"
							>
								<h2 className="text-[#F8F1E1] text-[50px] md:text-[55px] xl:text-[80px] leading-none">
									100%
								</h2>
								<p className="text-[#F8F1E1]">
									Our Satisfection Rate
								</p>
							</div>

							<div
								data-aos="fade-in"
								data-aos-delay="400"
								data-aos-duration="800"
								data-aos-once="true"
							>
								<h2 className="text-[#F8F1E1] text-[50px] md:text-[55px] xl:text-[80px] leading-none">
									753k
								</h2>
								<p className="text-[#F8F1E1]">Total Student</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutUs;
