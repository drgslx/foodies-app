"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import user1 from "/public/images/user1.png";
import { useParams } from "next/navigation";
import HeartButton from "../HeartButton";
import { calculateAverageRating } from "@/utils/generateStars";

const CourseCard = ({
	id,
	title,
	slug,
	image,
	foodCategory,
	lessons,
	user,
	currentUser,
	buy,
	reviews,
	backgroundClass = "",
}) => {
	const { averageRating } = calculateAverageRating(reviews);
	const { lang } = useParams();

	let courseUrl = "";
	if (buy) {
		courseUrl = `/${lang}/profile/course/${slug}/${id}`;
	} else {
		courseUrl = `/${lang}/course/${slug}`;
	}
	return (
		<div>
			<div className={`${backgroundClass} relative group`}>
				<div>
					<Link href={courseUrl}>
						<Image
							src={image}
							alt="course"
							width={900}
							height={790}
						/>
					</Link>
					<div className="absolute top-[20px] right-[20px]">
						<HeartButton courseId={id} currentUser={currentUser} />
					</div>
				</div>

				{/* <div className="headingFontFamily absolute top-[20px] left-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
					<span className="discount-price line-through text-[13px] lg:text-[18px] mr-2 rtl:mr-0 rtl:ml-2">
						${before_price}
					</span>{" "}
					${regular_price}
				</div> */}

				<div className="bg-[#F0F0F0] py-[30px] sm:py-[35px] px-[20px] sm:px-[25px] -mt-[1px] border border-[#051F0D] group-hover:bg-[#262626] transition duration-500 ease-in-out group-hover:border-[#262626]">
					<ul className="mb-[20px] space-x-[10px] lg:space-x-[15px] rtl:space-x-reverse">
						<li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
							<i className="ri-star-fill text-[#FCA120] text-[18px] mr-[3px]"></i>{" "}
							{averageRating ? averageRating : "0.0"}
						</li>
						<li className="inline-block text-[13px] lg:text-[15px] transition duration-500 ease-in-out group-hover:text-white">
							<i className="ri-stack-fill primaryText text-[18px] mr-[3px] group-hover:text-white"></i>{" "}
							{foodCategory.name}
						</li>
					</ul>

					<h3 className="text-[20px] lg:text-[22px] leading-[1.3] mb-[20px]">
						<Link
							href={courseUrl}
							className="transition duration-500 ease-in-out hover:text-[#262626] group-hover:text-white"
						>
							{title}
						</Link>
					</h3>

					<div className="flex items-center border-t border-[#051F0D] pt-[25px] space-x-[15px] rtl:space-x-reverse">
						<Image
							src={user.image ? user.image : user1}
							alt="user"
							className="w-[40px] h-[40px] rounded-full"
							width={150}
							height={150}
						/>
						<div>
							<h3 className="text-[17px] lg:text-[19px]">
								<div className="transition duration-500 ease-in-out hover:text-[#262626] group-hover:text-white">
									{user.name}
								</div>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
