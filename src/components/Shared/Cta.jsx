"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import shape1 from "/public/images/shape1.png";

const Cta = () => {
	return (
		<>
			<div className="primaryBg py-[50px] md:py-[60px]">
				<div className="container mx-auto relative">
					<div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
						<div>
							<h2 className="text-[30px] font-semibold text-white leading-[1.2]">
								We’re ready to give our users the best, but you must 
								follow our rules!
							</h2>
						</div>

						<div className="md:text-end">
							<Link
								href="/contact-us"
								className="text-white text-[14px] font-medium inline-block py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#ffffff] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
							>
								Learn More{" "}
								<i className="ri-arrow-right-up-line"></i>
							</Link>
						</div>
					</div>

					{/* shape */}
					<Image
						src={shape1}
						alt="shape"
						className="absolute -bottom-[60px] right-[30%] hidden md:block"
					/>
				</div>
			</div>
		</>
	);
};

export default Cta;
