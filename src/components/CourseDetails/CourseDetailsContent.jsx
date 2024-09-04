"use client";

import React, { useState } from "react";
import OverviewContent from "./OverviewContent";
import CurriculumContent from "./CurriculumContent";
import InstructorContent from "./InstructorContent";
import ReviewsContent from "./ReviewsContent";
import Image from "next/image";
import Sidebar from "./Sidebar/Sidebar";

const CourseDetailsContent = ({ course, currentUser }) => {
	const [activeTab, setActiveTab] = useState(0);
	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	return (
		<>
			<div className="py-[50px] md:py-[60px] lg:py-[140px]">
				<div className="container mx-auto">
					<div className="grid gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
						<div className="lg:col-span-2">
							<div className="space-y-[30px]">
								<div className="relative">
									<Image
										src={course.image}
										width={900}
										height={790}
										alt="course"
									/>

									<div className="headingFontFamily absolute bottom-[20px] left-[20px] rtl:left-auto rtl:right-[20px] z-1 primaryBg text-white font-semibold text-[16px] lg:text-[22px] pt-[14px] pb-[10px] px-[16px] leading-none">
										<span className="discount-price line-through text-[13px] lg:text-[18px] mr-2 rtl:mr-0 rtl:ml-2">
											${course.before_price}
										</span>{" "}
										${course.regular_price}
									</div>
								</div>

								{/* Tab */}
								<div>
									{/* Tab menu */}
									<ul className="space-y-[10px] space-x-[20px] sm:space-x-[30px] md:space-x-[40px] lg:space-x-[45px] xl:space-x-[50px] 2xl:space-x-[65px] rtl:space-x-reverse">
										<li
											onClick={() => handleTabClick(0)}
											className={`inline-block cursor-pointer font-bold text-[18px] md:text-[22px] hover:text-[#051F0D] ${
												activeTab === 0
													? "text-[#051F0D] border-b border-[#051F0D]"
													: "text-[#859D8B]"
											}`}
										>
											Overview
										</li>

										<li
											onClick={() => handleTabClick(1)}
											className={`inline-block cursor-pointer font-bold text-[18px] md:text-[22px] hover:text-[#051F0D] ${
												activeTab === 1
													? "text-[#051F0D] border-b border-[#051F0D]"
													: "text-[#859D8B]"
											}`}
										>
											Curriculum
										</li>
										<li
											onClick={() => handleTabClick(2)}
											className={`inline-block cursor-pointer font-bold text-[18px] md:text-[22px] hover:text-[#051F0D] ${
												activeTab === 2
													? "text-[#051F0D] border-b border-[#051F0D]"
													: "text-[#859D8B]"
											}`}
										>
											Instructor
										</li>
										<li
											onClick={() => handleTabClick(3)}
											className={`inline-block cursor-pointer font-bold text-[18px] md:text-[22px] hover:text-[#051F0D] ${
												activeTab === 3
													? "text-[#051F0D] border-b border-[#051F0D]"
													: "text-[#859D8B]"
											}`}
										>
											Reviews
										</li>
									</ul>

									{/* Tab content */}
									<div>
										{activeTab === 0 && (
											<OverviewContent {...course} />
										)}
										{activeTab === 1 && (
											<CurriculumContent {...course} />
										)}
										{activeTab === 2 && (
											<InstructorContent {...course} />
										)}
										{activeTab === 3 && (
											<ReviewsContent
												{...course}
												currentUser={currentUser}
											/>
										)}
									</div>
								</div>
							</div>
						</div>

						<div>
							{/* Sidebar */}
							<Sidebar />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseDetailsContent;
