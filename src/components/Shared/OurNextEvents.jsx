"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import eventImg1 from "/public/images/event-img1.jpg";
import eventImg2 from "/public/images/event-img2.jpg";
import eventImg3 from "/public/images/event-img3.jpg";

const OurNextEvents = () => {
	return (
		<>
			<div className="pt-[50px] md:pt-[60px] lg:pt-[140px]">
				<div className="container mx-auto">
					<h1 className="text-[30px] sm:text-[60px] md:text-[70px] lg:text-[80px] sm:tracking-[-1.2px] leading-none mb-[30px] md:mb-[50px] lg:max-w-[727px]">
						Our next events
					</h1>

					<div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
						<div
							data-aos="fade-in"
							data-aos-delay="100"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<div className="relative md:pl-[50px] mb-[25px]">
								<Link href="/events/event-details">
									<Image src={eventImg1} alt="event" />
								</Link>

								<div className="bg-[#262626] absolute left-0 bottom-[40px] text-white text-center w-[100px] h-[100px] leading-none text-[14px]">
									<span className="text-[40px] block font-semibold mb-1 mt-[20px]">
										26
									</span>{" "}
									January
								</div>
							</div>

							<h3 className="text-[20px] md:text-[23px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									How meditation improve your mental health in
									winter season?
								</Link>
							</h3>

							<ul>
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2 "></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
							</ul>
						</div>

						<div className="space-y-[25px]">
							<div
								className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
								data-aos="fade-in"
								data-aos-delay="200"
								data-aos-duration="800"
								data-aos-once="true"
							>
								<div>
									<Link href="/events/event-details">
										<Image src={eventImg2} alt="event" />
									</Link>
								</div>

								<div>
									<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
										<Link
											href="/events/event-details"
											className="transition duration-500 ease-in-out hover:text-[#262626]"
										>
											How meditation improve your mental
											health in winter season?
										</Link>
									</h3>

									<p>
										Our online courses cover a wide range of
										topics, from personal.
									</p>

									<ul className="border-t border-[#051F0D] space-y-[5px] mt-[15px] pt-[15px]">
										<li className="text-[15px] flex items-center">
											<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
											Hilton road NY/93 New York, USA
										</li>
										<li className="text-[15px] flex items-center">
											<i className="ri-calendar-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
											23 December 2023
										</li>
									</ul>
								</div>
							</div>

							<div
								className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2"
								data-aos="fade-in"
								data-aos-delay="300"
								data-aos-duration="800"
								data-aos-once="true"
							>
								<div>
									<Link href="/events/event-details">
										<Image src={eventImg3} alt="event" />
									</Link>
								</div>

								<div>
									<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
										<Link
											href="/events/event-details"
											className="transition duration-500 ease-in-out hover:text-[#262626]"
										>
											How meditation improve your mental
											health in winter season?
										</Link>
									</h3>

									<p>
										Our online courses cover a wide range of
										topics, from personal.
									</p>

									<ul className="border-t border-[#051F0D] space-y-[5px] mt-[15px] pt-[15px]">
										<li className="text-[15px] flex items-center">
											<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
											Hilton road NY/93 New York, USA
										</li>
										<li className="text-[15px] flex items-center">
											<i className="ri-calendar-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
											23 December 2023
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OurNextEvents;
