"use client";

import React from "react";

const CommentForm = () => {
	return (
		<>
			<div className="lg:pt-[30px]">
				<h3 className="text-black font-bold text-[20px] md:text-[22px] lg:text-[25px] leading-none mb-[15px]">
					Leave a reply
				</h3>
				<form className="space-y-[25px]">
					<div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
						<div>
							<input
								type="email"
								placeholder="Your email"
								className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
							/>
						</div>

						<div>
							<input
								type="text"
								placeholder="Your name"
								className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
							/>
						</div>
					</div>

					<div>
						<textarea
							placeholder="Your comment..."
							rows={5}
							className="bg-transparent text-[#4A4E4B] border border-[#051F0D] block w-full py-[10px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
						/>
					</div>

					<div>
						<button
							type="submit"
							className="bg-[#262626] text-[#fff] text-[16px] font-semibold block w-full py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
						>
							Leave A Comment{" "}
							<i className="ri-arrow-right-up-line"></i>
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default CommentForm;
