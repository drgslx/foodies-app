"use client";

import React from "react";
import Link from "next/link";

const Tags = () => {
	return (
		<>
			<div>
				<h3 className="text-black font-bold text-[22px] leading-none mb-[15px]">
					Tags
				</h3>
				<ul className="space-y-[10px]">
					<li className="inline-block mr-[10px]">
						<Link
							href="#"
							className="text-[14px] inline-block border border-[#051F0D] py-[14px] px-[25px] leading-none rounded-[30px] hover:bg-[#262626] hover:text-[#fff] hover:border-[#262626]"
						>
							Digital
						</Link>
					</li>
					<li className="inline-block mr-[10px]">
						<Link
							href="#"
							className="text-[14px] inline-block border border-[#051F0D] py-[14px] px-[25px] leading-none rounded-[30px] hover:bg-[#262626] hover:text-[#fff] hover:border-[#262626]"
						>
							Data
						</Link>
					</li>
					<li className="inline-block mr-[10px]">
						<Link
							href="#"
							className="text-[14px] inline-block border border-[#051F0D] py-[14px] px-[25px] leading-none rounded-[30px] hover:bg-[#262626] hover:text-[#fff] hover:border-[#262626]"
						>
							Business
						</Link>
					</li>
					<li className="inline-block mr-[10px]">
						<Link
							href="#"
							className="text-[14px] inline-block border border-[#051F0D] py-[14px] px-[25px] leading-none rounded-[30px] hover:bg-[#262626] hover:text-[#fff] hover:border-[#262626]"
						>
							Coaching
						</Link>
					</li>
					<li className="inline-block mr-[10px]">
						<Link
							href="#"
							className="text-[14px] inline-block border border-[#051F0D] py-[14px] px-[25px] leading-none rounded-[30px] hover:bg-[#262626] hover:text-[#fff] hover:border-[#262626]"
						>
							Trainer
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Tags;
