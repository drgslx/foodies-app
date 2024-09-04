"use client";

import React from "react";
const TopHeader = () => {
	return (
		<>
			<div className="bg-[#FCA120] py-[10px] overflow-hidden">
				<div className="container mx-auto max-w-[1570px]">
					<div className="grid items-center gap-[10px] lg:gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
						<div className="text-center lg:text-left rtl:lg:text-right">
							<p className="text-black text-[13px] lg:text-[16px]">
								<span className="font-semibold">
									<i className="ri-time-line"></i> Working
									Hours :
								</span>{" "}
								Monday - Friday, 10am - 05pm
							</p>
						</div>

						<div>
							<ul className="sm:flex items-center justify-center lg:justify-end text-center sm:text-left rtl:sm:text-right text-black text-[13px] lg:text-[16px] space-y-[5px] sm:space-x-[30px] rtl:space-x-reverse">
								<li className="relative sbefore:content-[''] sm:before:bg-[#000] before:absolute before:right-[-16px] rtl:before:right-auto rtl:before:left-[-16px] before:top-[3px] before:w-[1px] before:h-[16px] lg:before:h-[20px] last:before:bg-transparent">
									<a
										href="mailto:techfit@gmail.com"
										className="hover:text-[#262626]"
									>
										techfit@gmail.com
									</a>
								</li>

								<li className="relative before:content-[''] sm:before:bg-[#000] before:absolute before:right-[-16px] rtl:before:right-auto rtl:before:left-[-16px] before:top-[3px] before:w-[1px] before:h-[16px] lg:before:h-[20px] last:before:bg-transparent">
									<a
										href="tel:+49298289828"
										className="font-semibold hover:text-[#262626]"
									>
										+49 29828 9828
									</a>
								</li>

								<li className="text-[16px] lg:text-[18px] space-x-[10px] rtl:space-x-reverse relative before:content-[''] sm:before:bg-[#000] before:absolute before:right-[-16px] rtl:before:right-auto rtl:before:left-[-16px] before:top-[3px] before:w-[1px] before:h-[16px] lg:before:h-[20px] last:before:bg-transparent">
									<a
										href="https://www.facebook.com/"
										target="_blank"
									>
										<i className="ri-facebook-fill"></i>
									</a>
									<a
										href="https://www.twitter.com/"
										target="_blank"
									>
										<i className="ri-twitter-fill"></i>
									</a>
									<a
										href="https://www.linkedin.com/"
										target="_blank"
									>
										<i className="ri-linkedin-fill"></i>
									</a>
									<a
										href="https://www.youtube.com/"
										target="_blank"
									>
										<i className="ri-youtube-fill"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TopHeader;
