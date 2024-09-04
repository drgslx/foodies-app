"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import eventImg1 from "/public/images/event-img4.jpg";
import eventImg2 from "/public/images/event-img5.jpg";
import eventImg3 from "/public/images/event-img6.jpg";
import eventImg4 from "/public/images/event-img7.jpg";
import eventImg5 from "/public/images/event-img8.jpg";
import eventImg6 from "/public/images/event-img9.jpg";
import eventImg7 from "/public/images/event-img10.jpg";
import eventImg8 from "/public/images/event-img11.jpg";
import eventImg9 from "/public/images/event-img12.jpg";
import eventImg10 from "/public/images/event-img13.jpg";
import eventImg11 from "/public/images/event-img14.jpg";
import eventImg12 from "/public/images/event-img15.jpg";

const EventsList = () => {
	return (
		<>
			<div className="pt-[50px] md:pt-[60px] lg:pt-[140px]">
				<div className="container mx-auto">
					<div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="50"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg1} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									Medicine Life editation improve your mental
									health in winter
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									27 January 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg2} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									How meditation improve your mental health in
									winter season?
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									28 January 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="150"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg3} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									Links to the station social media profiles
									allow users to
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									29 January 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg4} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									How meditation improve your mental health in
									winter season?
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									30 January 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="250"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg5} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									How meditation improve your mental health in
									winter season?
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									1 February 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="300"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg6} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									Many stations repurpose their content in
									podcast episodes
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									2 February 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="350"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg7} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									Learn about how them you went down prying
									the ring off his
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									3 February 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="400"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg8} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									Our online courses cover a wide range of
									topics, from personal
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									4 February 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="450"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg9} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									Learn about how them you went down prying
									the ring off his
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									5 February 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="500"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg10} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									Our online courses cover a wide range of
									topics, from personal
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									6 February 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="550"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg11} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									How meditation improve your mental health in
									winter season?
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									7 February 2023
								</li>
							</ul>
						</div>

						<div
							className="group"
							data-aos="fade-up"
							data-aos-delay="600"
							data-aos-duration="500"
						>
							<div className="relative overflow-hidden mb-[25px]">
								<Link href="/events/event-details/">
									<Image src={eventImg12} alt="event" />
								</Link>

								<div
									className="absolute top-0 left-[-100%] w-full h-full text-center flex items-center justify-center group-hover:left-0"
									style={{
										backgroundColor:
											"rgba(5, 31, 13, 0.31)",
									}}
								>
									<Link
										href="/events/event-details/"
										className="bg-[#262626] text-white text-[16px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									>
										Get Ticket{" "}
										<i className="ri-arrow-right-up-line"></i>
									</Link>
								</div>
							</div>

							<h3 className="text-[20px] md:text-[22px] leading-[1.2] mb-[10px]">
								<Link
									href="/events/event-details/"
									className="transition duration-500 ease-in-out hover:text-[#262626]"
								>
									Learn about how them you went down prying
									the ring off his
								</Link>
							</h3>

							<ul className="space-y-[6px]">
								<li className="text-[15px] flex items-center">
									<i className="ri-map-pin-fill text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									Hilton road NY/93 New York, USA
								</li>
								<li className="text-[15px] flex items-center">
									<i className="ri-calendar-line text-[#262626] text-[17px] mr-2 rtl:mr-0 rtl:ml-2"></i>{" "}
									8 February 2023
								</li>
							</ul>
						</div>
					</div>

					{/* Pagination */}
					<nav aria-label="Page navigation example">
						<ul className="space-x-[5px] rtl:space-x-reverse text-center mt-[30px] md:mt-[45px]">
							<li className="inline-block">
								<a
									href="#"
									className="flex items-center justify-center border border-[#051F0D] h-[36px] w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
								>
									<i className="ri-arrow-left-line"></i>
								</a>
							</li>

							<li className="inline-block">
								<a
									href="#"
									className="flex items-center justify-center border border-[#051F0D] h-[36px] w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
								>
									1
								</a>
							</li>

							<li className="inline-block">
								<a
									href="#"
									className="flex items-center justify-center border border-[#051F0D] h-[36px] w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
								>
									2
								</a>
							</li>

							<li className="inline-block">
								<a
									href="#"
									className="flex items-center justify-center border border-[#051F0D] h-[36px] w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
								>
									3
								</a>
							</li>

							<li className="inline-block">
								<a
									href="#"
									className="flex items-center justify-center border border-[#051F0D] h-[36px] w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
								>
									<i className="ri-arrow-right-line"></i>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};

export default EventsList;
