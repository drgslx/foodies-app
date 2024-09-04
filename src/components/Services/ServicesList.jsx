"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import service1 from "/public/images/service1.jpg";
import service2 from "/public/images/service2.jpg";
import service3 from "/public/images/service3.jpg";
import service4 from "/public/images/service4.jpg";
import service5 from "/public/images/service5.jpg";
import service6 from "/public/images/service6.jpg";
import service7 from "/public/images/service7.jpg";
import service8 from "/public/images/service8.jpg";
import service9 from "/public/images/service9.jpg";
import { useParams } from "next/navigation";

const ServicesList = () => {
	const { lang } = useParams();
	return (
		<>
			<div className="py-[50px] md:py-[60px] lg:py-[140px]">
				<div className="container mx-auto">
					<div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
						<div className="relative group">
							<div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#FCA120]">
								<Link
									href={`/${lang}/services/service-details/`}
									className="relative"
								>
									<Image src={service1} alt="service" />
								</Link>
							</div>

							<div className="pl-[25px] pt-[25px]">
								<h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
									<Link
										href={`/${lang}/services/service-details/`}
										className="transition duration-500 ease-in-out hover:text-[#FCA120]"
									>
										Executive Coaching Sessions
									</Link>
								</h3>

								<p className="mb-[25px]">
									I want to come with you to Alderaan. There
									nothing for me here now. I want to learn the
									ways of the Force.
								</p>

								<Link
									href={`/${lang}/services/service-details/`}
									className="text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#FCA120] hover:border-[#FCA120] hover:text-[#fff]"
								>
									More Details{" "}
									<i className="ri-arrow-right-up-line"></i>
								</Link>
							</div>
						</div>

						<div className="relative group">
							<div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#FCA120]">
								<Link
									href={`/${lang}/services/service-details/`}
									className="relative"
								>
									<Image src={service2} alt="service" />
								</Link>
							</div>

							<div className="pl-[25px] pt-[25px]">
								<h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
									<Link
										href={`/${lang}/services/service-details/`}
										className="transition duration-500 ease-in-out hover:text-[#FCA120]"
									>
										Business Education In This Sector
									</Link>
								</h3>

								<p className="mb-[25px]">
									I want to come with you to Alderaan. There
									nothing for me here now. I want to learn the
									ways of the Force.
								</p>

								<Link
									href={`/${lang}/services/service-details/`}
									className="text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#FCA120] hover:border-[#FCA120] hover:text-[#fff]"
								>
									More Details{" "}
									<i className="ri-arrow-right-up-line"></i>
								</Link>
							</div>
						</div>

						<div className="relative group">
							<div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#FCA120]">
								<Link
									href={`/${lang}/services/service-details/`}
									className="relative"
								>
									<Image src={service3} alt="service" />
								</Link>
							</div>

							<div className="pl-[25px] pt-[25px]">
								<h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
									<Link
										href={`/${lang}/services/service-details/`}
										className="transition duration-500 ease-in-out hover:text-[#FCA120]"
									>
										Learn Sychologycal Science Sector
									</Link>
								</h3>

								<p className="mb-[25px]">
									I want to come with you to Alderaan. There
									nothing for me here now. I want to learn the
									ways of the Force.
								</p>

								<Link
									href={`/${lang}/services/service-details/`}
									className="text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#FCA120] hover:border-[#FCA120] hover:text-[#fff]"
								>
									More Details{" "}
									<i className="ri-arrow-right-up-line"></i>
								</Link>
							</div>
						</div>

						<div className="relative group">
							<div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#FCA120]">
								<Link
									href={`/${lang}/services/service-details/`}
									className="relative"
								>
									<Image src={service4} alt="service" />
								</Link>
							</div>

							<div className="pl-[25px] pt-[25px]">
								<h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
									<Link
										href={`/${lang}/services/service-details/`}
										className="transition duration-500 ease-in-out hover:text-[#FCA120]"
									>
										Learn Business Orientaton
									</Link>
								</h3>

								<p className="mb-[25px]">
									I want to come with you to Alderaan. There
									nothing for me here now. I want to learn the
									ways of the Force.
								</p>

								<Link
									href={`/${lang}/services/service-details/`}
									className="text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#FCA120] hover:border-[#FCA120] hover:text-[#fff]"
								>
									More Details{" "}
									<i className="ri-arrow-right-up-line"></i>
								</Link>
							</div>
						</div>

						<div className="relative group">
							<div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#FCA120]">
								<Link
									href={`/${lang}/services/service-details/`}
									className="relative"
								>
									<Image src={service5} alt="service" />
								</Link>
							</div>

							<div className="pl-[25px] pt-[25px]">
								<h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
									<Link
										href={`/${lang}/services/service-details/`}
										className="transition duration-500 ease-in-out hover:text-[#FCA120]"
									>
										Career In Orientation Subject
									</Link>
								</h3>

								<p className="mb-[25px]">
									I want to come with you to Alderaan. There
									nothing for me here now. I want to learn the
									ways of the Force.
								</p>

								<Link
									href={`/${lang}/services/service-details/`}
									className="text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#FCA120] hover:border-[#FCA120] hover:text-[#fff]"
								>
									More Details{" "}
									<i className="ri-arrow-right-up-line"></i>
								</Link>
							</div>
						</div>

						<div className="relative group">
							<div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#FCA120]">
								<Link
									href={`/${lang}/services/service-details/`}
									className="relative"
								>
									<Image src={service6} alt="service" />
								</Link>
							</div>

							<div className="pl-[25px] pt-[25px]">
								<h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
									<Link
										href={`/${lang}/services/service-details/`}
										className="transition duration-500 ease-in-out hover:text-[#FCA120]"
									>
										Business Management System
									</Link>
								</h3>

								<p className="mb-[25px]">
									I want to come with you to Alderaan. There
									nothing for me here now. I want to learn the
									ways of the Force.
								</p>

								<Link
									href={`/${lang}/services/service-details/`}
									className="text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#FCA120] hover:border-[#FCA120] hover:text-[#fff]"
								>
									More Details{" "}
									<i className="ri-arrow-right-up-line"></i>
								</Link>
							</div>
						</div>

						<div className="relative group">
							<div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#FCA120]">
								<Link
									href={`/${lang}/services/service-details/`}
									className="relative"
								>
									<Image src={service7} alt="service" />
								</Link>
							</div>

							<div className="pl-[25px] pt-[25px]">
								<h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
									<Link
										href={`/${lang}/services/service-details/`}
										className="transition duration-500 ease-in-out hover:text-[#FCA120]"
									>
										Health Care Fot The Next
									</Link>
								</h3>

								<p className="mb-[25px]">
									I want to come with you to Alderaan. There
									nothing for me here now. I want to learn the
									ways of the Force.
								</p>

								<Link
									href={`/${lang}/services/service-details/`}
									className="text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#FCA120] hover:border-[#FCA120] hover:text-[#fff]"
								>
									More Details{" "}
									<i className="ri-arrow-right-up-line"></i>
								</Link>
							</div>
						</div>

						<div className="relative group">
							<div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#FCA120]">
								<Link
									href={`/${lang}/services/service-details/`}
									className="relative"
								>
									<Image src={service8} alt="service" />
								</Link>
							</div>

							<div className="pl-[25px] pt-[25px]">
								<h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
									<Link
										href={`/${lang}/services/service-details/`}
										className="transition duration-500 ease-in-out hover:text-[#FCA120]"
									>
										Econimcs Is low Subject Season
									</Link>
								</h3>

								<p className="mb-[25px]">
									I want to come with you to Alderaan. There
									nothing for me here now. I want to learn the
									ways of the Force.
								</p>

								<Link
									href={`/${lang}/services/service-details/`}
									className="text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#FCA120] hover:border-[#FCA120] hover:text-[#fff]"
								>
									More Details{" "}
									<i className="ri-arrow-right-up-line"></i>
								</Link>
							</div>
						</div>

						<div className="relative group">
							<div className="relative pt-[20px] pl-[20px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#051F0D] before:w-[95%] before:h-[95%] group-hover:before:bg-[#FCA120]">
								<Link
									href={`/${lang}/services/service-details/`}
									className="relative"
								>
									<Image src={service9} alt="service" />
								</Link>
							</div>

							<div className="pl-[25px] pt-[25px]">
								<h3 className="text-[20px] lg:text-[26px] leading-[1.3] mb-[10px]">
									<Link
										href={`/${lang}/services/service-details/`}
										className="transition duration-500 ease-in-out hover:text-[#FCA120]"
									>
										Learn Business Orientaton
									</Link>
								</h3>

								<p className="mb-[25px]">
									I want to come with you to Alderaan. There
									nothing for me here now. I want to learn the
									ways of the Force.
								</p>

								<Link
									href={`/${lang}/services/service-details/`}
									className="text-black text-[14px] font-semibold inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#FCA120] hover:border-[#FCA120] hover:text-[#fff]"
								>
									More Details{" "}
									<i className="ri-arrow-right-up-line"></i>
								</Link>
							</div>
						</div>
					</div>

					{/* Pagination */}
					<nav aria-label="Page navigation example">
						<ul className="space-x-[5px] rtl:space-x-reverse mt-[30px] md:mt-[50px]">
							<li className="inline-block">
								<a
									href="#"
									className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
								>
									<i className="ri-arrow-left-line"></i>
								</a>
							</li>

							<li className="inline-block">
								<a
									href="#"
									className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
								>
									1
								</a>
							</li>

							<li className="inline-block">
								<a
									href="#"
									className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
								>
									2
								</a>
							</li>

							<li className="inline-block">
								<a
									href="#"
									className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
								>
									3
								</a>
							</li>

							<li className="inline-block">
								<a
									href="#"
									className="flex items-center justify-center text-[14px] md:text-[16px] border border-[#051F0D] h-[36px] w-[40px] md:w-[55px] leading-tight rounded-[30px] font-semibold text-[##051F0D] hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
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

export default ServicesList;
