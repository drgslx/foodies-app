"use client";

import React from "react";
import Image from "next/image";

import trainer from "/public/images/trainer-img3.png";
import icon1 from "/public/images/icon6.png";
import icon2 from "/public/images/icon7.png";
import icon3 from "/public/images/icon8.png";
import icon4 from "/public/images/icon9.png";

import shape2 from "/public/images/shape2.jpg";
import shape3 from "/public/images/shape3.jpg";
import shape4 from "/public/images/shape4.jpg";
import shape5 from "/public/images/shape5.jpg";

const HealthCoachDietPlan = () => {
	return (
		<>
			<div className="bg-[#F0F0F0] relative py-[50px] md:py-[60px] lg:py-[140px]">
				<div className="container mx-auto">
					<div className="relative z-10 text-center">
						<Image
							src={trainer}
							alt="trainer"
							className="inline-block"
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-duration="800"
							data-aos-once="true"
						/>

						{/* Make your body shape */}
						<div
							className="absolute bottom-[88px] 2xl:bottom-[245px] left-[53%] 2xl:left-[15%] hidden 2xl:block"
							data-aos="fade-in"
							data-aos-delay="200"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<p className="text-[#587886] text-[14px] font-medium absolute bottom-[-11px] left-[-110%]">
								Make your body shape
							</p>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="158"
								height="111"
								viewBox="0 0 158 111"
								fill="none"
							>
								<path
									d="M149.854 0.646447C149.658 0.451184 149.342 0.451184 149.146 0.646447L145.964 3.82843C145.769 4.02369 145.769 4.34027 145.964 4.53553C146.16 4.7308 146.476 4.7308 146.672 4.53553L149.5 1.70711L152.328 4.53553C152.524 4.7308 152.84 4.7308 153.036 4.53553C153.231 4.34027 153.231 4.02369 153.036 3.82843L149.854 0.646447ZM149.5 110.5V111H150V110.5H149.5ZM149 1V110.5H150V1H149ZM149.5 110H0.5V111H149.5V110Z"
									fill="#587886"
								/>
								<path
									d="M141 9L149.5 1L157 9"
									stroke="#587886"
									strokeWidth="1.3"
								/>
							</svg>
						</div>

						{/* Flexor Radialis Shape */}
						<div
							className="absolute bottom-[88px] 2xl:bottom-[58%] right-[53%] 2xl:right-[10%] hidden 2xl:block"
							data-aos="fade-in"
							data-aos-delay="300"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<p className="text-[#587886] text-[14px] font-medium absolute bottom-[-11px] right-[-100%]">
								Flexor Radialis Shape
							</p>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="164"
								height="158"
								viewBox="0 0 164 158"
								fill="none"
							>
								<path
									d="M0.64644 8.14645C0.451178 8.34171 0.451178 8.65829 0.64644 8.85355L3.82842 12.0355C4.02368 12.2308 4.34027 12.2308 4.53553 12.0355C4.73079 11.8403 4.73079 11.5237 4.53553 11.3284L1.7071 8.5L4.53553 5.67157C4.73079 5.4763 4.73079 5.15973 4.53553 4.96446C4.34027 4.76921 4.02368 4.76921 3.82842 4.96446L0.64644 8.14645ZM163.5 8.49999L164 8.49999L164 7.99999L163.5 7.99999L163.5 8.49999ZM0.999994 9L163.5 8.99999L163.5 7.99999L0.999993 8L0.999994 9ZM163 8.49999L163 157.5L164 157.5L164 8.49999L163 8.49999Z"
									fill="#587886"
								/>
								<path
									d="M9 17L1 8.5L9 1"
									stroke="#587886"
									strokeWidth="1.3"
								/>
							</svg>
						</div>

						<h1
							className="text-[30px] sm:text-[60px] md:text-[70px] lg:text-[80px] sm:tracking-[-1.2px] leading-none mb-[30px] md:mb-[50px] mx-auto lg:max-w-[870px]"
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-duration="800"
							data-aos-once="true"
						>
							Health Coaches look at exercise, eating etc
						</h1>
					</div>

					<div className="grid gap-[30px] grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
						<div
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<Image
								src={icon1}
								alt="icon"
								className="mb-[20px]"
							/>
							<h3 className="text-[20px] md:text-[22px] mb-[10px] leading-[1.3]">
								Healthy daily life
							</h3>
							<ul>
								<li className="relative mt-[5px] pl-[20px] rtl:pl-0 rtl:pr-[20px] before:content-[''] before:bg-[#262626] before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:left-0 rtl:before:left-auto rtl:before:right-0 before:top-[7px]">
									Movement is key to a healthy life
								</li>
								<li className="relative mt-[5px] pl-[20px] rtl:pl-0 rtl:pr-[20px] before:content-[''] before:bg-[#262626] before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:left-0 rtl:before:left-auto rtl:before:right-0 before:top-[7px]">
									Have a bed time routine
								</li>
							</ul>
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<Image
								src={icon2}
								alt="icon"
								className="mb-[20px]"
							/>
							<h3 className="text-[20px] md:text-[22px] mb-[10px] leading-[1.3]">
								Fitness & performance
							</h3>
							<ul>
								<li className="relative mt-[5px] pl-[20px] rtl:pl-0 rtl:pr-[20px] before:content-[''] before:bg-[#262626] before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:left-0 rtl:before:left-auto rtl:before:right-0 before:top-[7px]">
									Eat the right food and portion
								</li>
								<li className="relative mt-[5px] pl-[20px] rtl:pl-0 rtl:pr-[20px] before:content-[''] before:bg-[#262626] before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:left-0 rtl:before:left-auto rtl:before:right-0 before:top-[7px]">
									Get enough sleep everyday
								</li>
							</ul>
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="300"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<Image
								src={icon3}
								alt="icon"
								className="mb-[20px]"
							/>
							<h3 className="text-[20px] md:text-[22px] mb-[10px] leading-[1.3]">
								Exercise Program
							</h3>
							<ul>
								<li className="relative mt-[5px] pl-[20px] rtl:pl-0 rtl:pr-[20px] before:content-[''] before:bg-[#262626] before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:left-0 rtl:before:left-auto rtl:before:right-0 before:top-[7px]">
									Work your full-range of motion
								</li>
								<li className="relative mt-[5px] pl-[20px] rtl:pl-0 rtl:pr-[20px] before:content-[''] before:bg-[#262626] before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:left-0 rtl:before:left-auto rtl:before:right-0 before:top-[7px]">
									Enjoy the physically activities
								</li>
							</ul>
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<Image
								src={icon4}
								alt="icon"
								className="mb-[20px]"
							/>
							<h3 className="text-[20px] md:text-[22px] mb-[10px] leading-[1.3]">
								Improving Health
							</h3>
							<ul>
								<li className="relative mt-[5px] pl-[20px] rtl:pl-0 rtl:pr-[20px] before:content-[''] before:bg-[#262626] before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:left-0 rtl:before:left-auto rtl:before:right-0 before:top-[7px]">
									Movement is key to a healthy life
								</li>
								<li className="relative mt-[5px] pl-[20px] rtl:pl-0 rtl:pr-[20px] before:content-[''] before:bg-[#262626] before:absolute before:w-[10px] before:h-[10px] before:rounded-full before:left-0 rtl:before:left-auto rtl:before:right-0 before:top-[7px]">
									Mixing up the exercises
								</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Shape Images */}
				<Image
					src={shape2}
					alt="shape2"
					className="absolute -top-[95px] left-[180px] hidden 2xl:block"
					data-aos="fade-in"
					data-aos-delay="100"
					data-aos-duration="800"
					data-aos-once="true"
				/>
				<Image
					src={shape3}
					alt="shape3"
					className="absolute top-[60px] left-[100px] hidden 2xl:block"
					data-aos="fade-in"
					data-aos-delay="200"
					data-aos-duration="800"
					data-aos-once="true"
				/>
				<Image
					src={shape4}
					alt="shape4"
					className="absolute -top-[95px] right-[250px] hidden 2xl:block"
					data-aos="fade-in"
					data-aos-delay="300"
					data-aos-duration="800"
					data-aos-once="true"
				/>
				<Image
					src={shape5}
					alt="shape5"
					className="absolute top-[46%] right-[100px] hidden 2xl:block"
					data-aos="fade-in"
					data-aos-delay="400"
					data-aos-duration="800"
					data-aos-once="true"
				/>
			</div>
		</>
	);
};

export default HealthCoachDietPlan;
