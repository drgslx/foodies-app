"use client";

import React from "react";
import GoogleMap from "./GoogleMap";

const Sidebar = () => {
	return (
		<>
			<div className="bg-[#FCA120] py-[30px] md:py-[45px] lg:py-[30px] xl:py-[45px] px-[20px] md:px-[35px] lg:px-[20px] xl:px-[35px] space-y-[30px] md:space-y-[45px]">
				<div>
					<ul>
						<li className="flex items-center border-b border-[#000] pb-[12px] mb-[12px] last:border-none last:pb-[0] last:mb-[0]">
							<p className="font-semibold text-black w-[100px]">
								Date:
							</p>
							<p>28 Jul 2023</p>
						</li>

						<li className="flex items-center border-b border-[#000] pb-[12px] mb-[12px] last:border-none last:pb-[0] last:mb-[0]">
							<p className="font-semibold text-black w-[100px]">
								Time:
							</p>
							<p>8:00 am - 5:00 pm</p>
						</li>

						<li className="flex items-center border-b border-[#000] pb-[12px] mb-[12px] last:border-none last:pb-[0] last:mb-[0]">
							<p className="font-semibold text-black w-[100px]">
								Venue:
							</p>
							<p>New york Education</p>
						</li>

						<li className="flex items-center border-b border-[#000] pb-[12px] mb-[12px] last:border-none last:pb-[0] last:mb-[0]">
							<p className="font-semibold text-black w-[100px]">
								Organizer:
							</p>
							<p>Wiliam Smith</p>
						</li>

						<li className="flex items-center border-b border-[#000] pb-[12px] mb-[12px] last:border-none last:pb-[0] last:mb-[0]">
							<p className="font-semibold text-black w-[100px]">
								Phone:
							</p>
							<p>1-212-1234567</p>
						</li>

						<li className="flex items-center border-b border-[#000] pb-[12px] mb-[12px] last:border-none last:pb-[0] last:mb-[0]">
							<p className="font-semibold text-black w-[100px]">
								Address:
							</p>
							<p>Hilton, UK, Times</p>
						</li>

						<li className="flex items-center border-b border-[#000] pb-[12px] mb-[12px] last:border-none last:pb-[0] last:mb-[0]">
							<p className="font-bold text-[#262626] text-[25px] lg:text-[30px] mt-1">
								$890.00
							</p>
						</li>
					</ul>
				</div>

				{/* GoogleMap */}
				<GoogleMap />
			</div>
		</>
	);
};

export default Sidebar;
