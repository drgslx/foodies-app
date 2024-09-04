"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import trainer from "/public/images/trainer.png";
import thumbImg from "/public/images/thumb-img.jpg";
import playIcon from "/public/images/play-icon.png";

const AboutMe = () => {
	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState(false);

	return (
		<>
			{/* Use here youtube Embed video link */}
			<FsLightbox
				toggler={toggler}
				sources={[
					"https://www.youtube.com/embed/dJlFmxiL11s?si=jWErMyFyMqBp0T7K",
				]}
			/>

			<div className="bg-[#FCA120] relative pt-[50px] md:pt-[80px] lg:pt-[0px] lg:before:bg-[#F0F0F0] lg:before:content-[''] lg:before:absolute lg:before:top-0 lg:before:left-0 lg:before:w-full lg:before:h-[310px] xl:before:h-[400px]">
				<div className="container mx-auto">
					<div className="grid items-end gap-[30px] md:gap-[30px] lg:gap-[80px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 relative">
						<div
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<Image src={trainer} alt="trainer" />
						</div>

						<div
							data-aos="fade-up"
							data-aos-delay="200"
							data-aos-duration="800"
							data-aos-once="true"
						>
							<div className="mb-[30px] lg:mb-[150px] xl:mb-[180px] 2xl:mb-[260px]">
								<h2 className="text-[30px] md:text-[35px] lg:text-[50px] xl:text-[80px] md:tracking-[-1.2px] leading-none mb-[15px] text-white lg:text-black">
									About me
								</h2>
								<p className="text-white lg:text-black">
									Learn about how them you went down prying
									the wedding ring off his cold, dead finger.
									I don’t know what you did, Fry, but once
									again, you screwed up! Now all the planets
									are gonna start cracking wise about.
								</p>
							</div>

							<div className="relative pr-[30px] sm:pr-[70px] md:pr-[50px] lg:pr-[70px]">
								<Image src={thumbImg} alt="thumb" />

								<div
									className="cursor-pointer absolute top-1/2 -translate-y-2/4 right-0"
									onClick={() => setToggler(!toggler)}
								>
									<Image
										src={playIcon}
										alt="playIcon"
										className="w-[80px] h-[80px] sm:w-[140px] sm:h-[140px] md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px]"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutMe;
