"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Input from "../FormHelpers/Input";
import { errorAlert } from "@/providers/customAlert";

const LoginForm = () => {
	const router = useRouter();
	const { lang } = useParams();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		signIn("credentials", {
			...data,
			redirect: false,
		}).then((callback) => {
			if (!callback?.error) {
				toast.success("Logged in");
				router.refresh();
			}

			if (callback?.error) {
				errorAlert(callback.error);
			}
		});
	};

	return (
		<>
			<div className="py-[50px] md:py-[60px] lg:py-[140px]">
				<div className="container mx-auto max-w-[650px]">
					<div className="bg-[#FCA120] p-[30px] sm:p-[55px]">
						<div className="space-y-[20px] mb-[15px]">
							<h2 className="font-bold text-[25px] md:text-[35px] lg:text-[40px] xl:text-[48px] leading-[1.1]">
								Login now
							</h2>
						</div>

						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-[25px]"
						>
							<div>
								<label
									htmlFor="email"
									className="font-bold text-black text-[14px] md:text-[16px] block mb-[10px]"
								>
									Your Email
								</label>
								<Input
									placeholder="Email"
									id="email"
									type="email"
									disabled={isSubmitting}
									register={register}
									errors={errors}
									required
								/>
							</div>

							<div>
								<label
									htmlFor="password"
									className="font-bold text-black text-[14px] md:text-[16px] block mb-[10px]"
								>
									Password*
								</label>
								<Input
									placeholder="Password"
									id="password"
									type="password"
									disabled={isSubmitting}
									register={register}
									errors={errors}
									required
								/>
							</div>

							<div className="flex items-center">
								<input
									id="default-checkbox"
									type="checkbox"
									value=""
									className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
								/>
								<label
									htmlFor="default-checkbox"
									className="ml-2 rtl:ml-0 rtl:mr-2 text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>

							<div>
								<button
									type="submit"
									className="bg-[#262626] text-[#fff] text-[15px] sm:text-[16px] font-semibold block w-full py-[15px] sm:py-[17px] px-[21px] sm:px-[30px] leading-none border border-[#262626] transition duration-500 ease-in-out hover:bg-[#000] hover:border-[#000] hover:text-[#fff]"
									disabled={!isValid || isSubmitting}
								>
									{isSubmitting
										? "Please wait..."
										: "Login Now"}{" "}
									<i className="ri-arrow-right-up-line"></i>
								</button>
							</div>

							<p>
								Didn’t create an account?{" "}
								<Link
									href={`/${lang}/register`}
									className="font-medium hover:text-[#262626]"
								>
									Register Now
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginForm;
