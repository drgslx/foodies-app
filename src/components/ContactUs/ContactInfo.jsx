"use client";

import React from "react";

const ContactInfo = () => {
	return (
		<>
			<div className="pt-[50px] md:pt-[60px] lg:pt-[140px]">
				<div className="container mx-auto">
					<div className="max-w-[650px] mb-[30px]">
						<h2 className="text-bold text-[25px] md:text-[30px] lg:text-[40px] xl:text-[48px] leading-none mb-[15px]">
							Contact with us for details
						</h2>
						<p>
							This story, dazzling in its powerful simplicity and
							soul-stirring wisdom, is about an Andalusian
							shepherd boy named Santiago who travels.
						</p>
					</div>

					<div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
						<div className="bg-[#FCA120] p-[20px] md:p-[35px] flex items-center space-x-[20px] md:space-x-[30px] rtl:space-x-reverse transition duration-500 ease-in-out group hover:bg-[#262626]">
							<div className="bg-[#F0F0F0] text-[#262626] text-[45px] w-[84px] h-[84px] inline-block shrink-0 text-center leading-[84px] group-hover:bg-[#F0F0F030] group-hover:text-[#fff]">
								<i className="ri-message-2-line"></i>
							</div>
							<div className="space-y-[5px]">
								<a
									href="mailto:hellobranco@gmail.com"
									className="break-all block font-bold text-black text-[15px] md:text-[18px] hover:text-[#262626] group-hover:text-[#fff]"
								>
									hellobranco@gmail.com
								</a>
								<a
									href="mailto:techfit@gmail.com"
									className="break-all block font-bold text-black text-[15px] md:text-[18px] hover:text-[#262626] group-hover:text-[#fff]"
								>
									techfit@gmail.com
								</a>
							</div>
						</div>

						<div className="bg-[#FCA120] p-[20px] md:p-[35px] flex items-center space-x-[20px] md:space-x-[30px] rtl:space-x-reverse transition duration-500 ease-in-out group hover:bg-[#262626]">
							<div className="bg-[#F0F0F0] text-[#262626] text-[45px] w-[84px] h-[84px] inline-block shrink-0 text-center leading-[84px] group-hover:bg-[#F0F0F030] group-hover:text-[#fff]">
								<i className="ri-phone-line"></i>
							</div>
							<div className="space-y-[5px]">
								<a
									href="tel:+48 93939 0239"
									className="block font-bold text-black text-[15px] md:text-[18px] hover:text-[#262626] group-hover:text-[#fff]"
								>
									+48 93939 0239
								</a>
								<a
									href="tel:+48 93979 02375"
									className="block font-bold text-black text-[15px] md:text-[18px] hover:text-[#262626] group-hover:text-[#fff]"
								>
									+48 93979 02375
								</a>
							</div>
						</div>

						<div className="bg-[#FCA120] p-[20px] md:p-[35px] flex items-center space-x-[20px] md:space-x-[30px] rtl:space-x-reverse transition duration-500 ease-in-out group hover:bg-[#262626]">
							<div className="bg-[#F0F0F0] text-[#262626] text-[45px] w-[84px] h-[84px] inline-block shrink-0 text-center leading-[84px] group-hover:bg-[#F0F0F030] group-hover:text-[#fff]">
								<i className="ri-map-pin-line"></i>
							</div>
							<div className="space-y-[5px]">
								<p className="block font-bold text-black text-[15px] md:text-[18px] hover:text-[#262626] group-hover:text-[#fff]">
									1234 East 27th Street, New York, NY 101010
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactInfo;
