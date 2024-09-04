"use client";

import React from "react";
import Image from "next/image";

import trainer from "/public/images/trainer-img2.png";

const Trainer = () => {
	return (
		<>
			<div className="py-[50px] md:py-[60px] lg:py-[140px]">
				<div className="container mx-auto lg:max-w-[1570px]">
					<div className="relative">
						<h1 className="large-heading text-[#fca120] text-[50px] sm:text-[95px] md:text-[128px] lg:text-[165px] xl:text-[200px] 2xl:text-[280px] sm:tracking-[-5.6px] font-semibold leading-none md:absolute md:-top-[10px] md:left-0 rtl:md:left-auto rtl:md:right-0 md:right-0 md:mx-auto text-center md:z-0">
							Foodies App
						</h1>

						<div className="grid items-end gap-[40px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 relative">
							<div className="text-center lg:text-end">
								<Image
									src={trainer}
									alt="trainer"
									className="inline-block"
								/>
							</div>

							<div className="lg:max-w-[700px]">
								<h1 className="text-black text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[80px] font-bold leading-none mb-[25px] mb:md-[40px] lg:mb-[30px] xl:mb-[50px]">
									I help people set & attain their perfect
									weight
								</h1>

								<p>
									Our online courses cover a wide range of
									topics, from personal development and
									wellness to professional skills like
									leadership, communication, and for the
									entrepreneurship Our online courses cover a
									wide range of topics, from person and
									wellness to professional skills like
									leadership.
								</p>

								<div className="sm:flex items-center space-y-[30px] sm:space-y-[0px] sm:space-x-[30px] md:space-x-[70px] rtl:space-x-reverse relative mt-[30px] lg:mt-[0] xl:mt-[30px] lg:-left-[100px] rtl:lg:-left-auto rtl:lg:-right-[100px] xl:-left-[130px] rtl:xl:-left-auto rtl:xl:-right-[130px] lg:-bottom-[30px]">
									<div className="bg-[#F0F0F0] sm:w-[500px] p-[30px] md:p-[40px] font-semibold text-black text-[16px] xl:text-[18px]">
										“Learn about how them you went down
										prying the ring off his cold, his dead
										finger. I don’t know what you a did,
										Fry, but once again, you screwed up!”
									</div>

									<div className="text-center">
										<h2 className="primaryText font-bold text-[30px] md:text-[40px] lg:text-[50px] xl:text-[80px] leading-none">
											643+
										</h2>
										<p>Students Satisfied</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Trainer;
