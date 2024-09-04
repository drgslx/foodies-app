"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageBannerTitle = ({
	title,
	homeText,
	homeUrl,
	image,
	image2,
	image3,
}) => {
	return (
		<div className="bg-[#F3F3F3] py-[24px] md:py-[42px] lg:py-[84px]">
			<div className="container mx-auto relative">
				<div className="relative text-center">
					<h2 className="text-black text-[25px] md:text-[35px] lg:text-[40px] xl:text-[48px] leading-[1.1] mb-[5px]">
						{title}
					</h2>

					<ul className="space-x-[25px] rtl:space-x-reverse">
						<li className="inline-block text-[#262626] relative before:content-['/'] before:absolute before:right-[-17px] rtl:before:right-auto rtl:before:left-[-17px] before:top-0">
							<Link
								href={homeUrl}
								className="text-black hover:text-[#262626]"
							>
								{homeText}
							</Link>
						</li>
						<li className="inline-block text-[#262626] relative before:content-['/'] before:absolute before:right-[-17px] rtl:before:right-auto rtl:before:left-[-17px] before:top-0 last:before:hidden">
							{title}
						</li>
					</ul>
				</div>

				{/* Images */}
				<Image
					src={image}
					alt="Page banner"
					width={178}
					height={100}
					className="absolute left-[42px] top-[-24px] hidden lg:block"
				/>
				<Image
					src={image2}
					alt="Page banner"
					width={180}
					height={107}
					className="absolute left-0 top-[20px] hidden lg:block"
				/>
				<Image
					src={image3}
					alt="Page banner"
					width={226}
					height={132}
					className="absolute right-0 top-[-25px] hidden lg:block"
				/>
			</div>
		</div>
	);
};

export default PageBannerTitle;
