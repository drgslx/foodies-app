"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import heroImg from "/public/images/hero1.png";
import orangeSupplement from "/public/images/orange-supplement.png";
import { useParams } from "next/navigation";

const HeroBanner = ({ currentUser }) => {
  const { lang } = useParams();
  return (
    <>
      <div className="bg-[#F0F0F0] pt-[50px] md:pt-[60px] lg:pt-[80px]">
        <div className="container mx-auto max-w-[1570px]">
          <div className="relative">
            <h1
              className="text-[#fca120] large-heading text-[50px] sm:text-[95px] md:text-[128px] lg:text-[165px] xl:text-[200px] 2xl:text-[280px] sm:tracking-[-5.6px] font-semibold leading-none md:absolute md:-top-[10px] md:left-0 md:z-0 text-center md:text-start"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Foodies
            </h1>

            <div className="grid items-center gap-[40px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 relative">
              <div className="text-center md:text-start">
                <h4
                  className="text-black text-[20px] md:text-[30px] lg:text-[35px] xl:text-[40px] 2xl:text-[46px] font-bold leading-none mb-[15px]"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  Hi, Welcome to
                </h4>

                <h1
                  className="text-black text-[35px] md:text-[50px] lg:text-[54px] xl:text-[70px] 2xl:text-[120px] font-bold leading-none mb-[25px] mb:md-[40px] lg:mb-[50px]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  Foodies
                  <Image
                    src={orangeSupplement}
                    alt="orangeSupplement"
                    className="rounded-full border-4 border-[#fff] hidden lg:inline-block"
                  />{" "}
                  Blog and Recipes!
                </h1>

                <div
                  className="space-x-[5px] sm:space-x-[20px] md:space-x-[10px] lg:space-x-[20px] rtl:space-x-reverse"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  {!currentUser ? (
                    <Link
                      href={`/${lang}/login`}
                      className="primaryBg text-white text-[12px] sm:text-[13px] lg:text-[14px] font-medium inline-block rounded-full py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none transition duration-500 ease-in-out hover:bg-[#FCA120]"
                    >
                      Get Started Now
                    </Link>
                  ) : (
                    <Link
                      href={`/${lang}/about`} // Changed href for demonstration
                      className="primaryBg text-white text-[12px] sm:text-[13px] lg:text-[14px] font-medium inline-block rounded-full py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none transition duration-500 ease-in-out hover:bg-[#FCA120]"
                    >
                      How it works
                    </Link>
                  )}

                  <Link
                    href={`/${lang}/courses`}
                    className="text-black text-[12px] sm:text-[13px] lg:text-[14px] font-medium inline-block rounded-full py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#23274A] transition duration-500 ease-in-out hover:bg-[#262626] hover:border-[#262626] hover:text-[#fff]"
                  >
                    View All Courses
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div
                className="lg:text-end"
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src={heroImg}
                  alt="Hero Image"
                  className="inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
