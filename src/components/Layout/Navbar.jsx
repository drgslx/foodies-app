"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { useCartStore } from "@/store/cart";
import logo from "/public/images/logo.png";
import Profile from "./Profile";
import { menuData } from "@/libs/menuData";

const Navbar = ({ currentUser }) => {
	const currentRoute = usePathname();
	const { lang } = useParams();
	const { count } = useCartStore();
	// console.log(currentUser);

	// Sticky Navbar
	useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId?.classList.add("isSticky");
			} else {
				elementId?.classList.remove("isSticky");
			}
		});

		return () => {
			document.removeEventListener("scroll", () => {
				if (window.scrollY > 170) {
					elementId?.classList.add("isSticky");
				} else {
					elementId?.classList.remove("isSticky");
				}
			});
		};
	}, []);

	// Toggle active class
	const [isActive, setActive] = useState(false);
	const handleToggleSearchModal = () => {
		setActive(!isActive);
	};

	return (
		<>
			<div
				id="navbar"
				className="navbar-area bg-[#262626] relative z-[2] py-[20px] lg:py-[25px] xl:py-0"
			>
				<div className="container mx-auto max-w-[1570px]">
					<nav
						className={`navbar relative flex flex-wrap ${
							isActive ? "active" : ""
						}`}
					>
						<div className="self-center">
							<Link href={`/${lang}`}>
								<Image
									src={logo}
									height={50}
									width={50}
									className="inline"
									alt="logo"
								/>
							</Link>
						</div>

						{/* Toggle button */}
						<button
							className="navbar-toggler absolute ml-auto right-0 rtl:right-auto rtl:left-0 top-[2px] xl:hidden"
							type="button"
							onClick={handleToggleSearchModal}
						>
							<span className="burger-menu text-white cursor-pointer leading-none text-[30px]">
								<i className="ri-menu-line"></i>
							</span>
						</button>

						<div className="navbar-collapse flex self-center grow basis-auto">
							<ul className="navbar-nav self-center flex-row mx-auto xl:flex">
								{menuData.map((item, index) => (
									<li
										key={index}
										className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[38px] relative group last:mr-0 first:ml-0"
									>
										<Link
											href={`/${lang}${item.link}`}
											className="text-white text-[16px] font-medium transition-all hover:text-[#FCA120] "
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>

							{/* Other options */}
							<div className="flex items-center other-options self-center border border-[#fff] py-[5px] xl:py-[12px] px-[15px] xl:px-[20px] space-x-[15px] xl:space-x-[20px] rtl:space-x-reverse absolute xl:relative top-0 right-[50px] rtl:right-auto rtl:left-[40px] xl:right-[0] rtl:xl:right-auto rtl:xl:left-[0]">
								{/* Profile */}
								{currentUser ? (
									<Profile user={currentUser} />
								) : (
									<Link
										href="/register/"
										className="user text-[16px] xl:text-[22px] text-white"
									>
										<i className="ri-user-line"></i>
									</Link>
								)}

							</div>
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Navbar;
