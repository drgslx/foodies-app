"use client";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "@/components/FormHelpers/Input";

const CreateForm = () => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			name: "",
		},
	});
	const onSubmit = async (data) => {
		try {
			const url = `/api/admin/foodCategories`;

			const response = await axios.post(url, data);
			toast.success(response.data.message);
			router.push("/admin/foodCategories");
		} catch (err) {
			let {
				response: {
					data: { message },
				},
			} = err;
			toast.error(message);
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-[25px]">
			<div>
				<label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
					Food Category Name
				</label>
				<Input
					placeholder="Food Category Name"
					id="name"
					disabled={isSubmitting}
					register={register}
					errors={errors}
				/>
			</div>
			<div>
				<button
					type="submit"
					disabled={!isValid || isSubmitting}
					className="
                                    bg-[#262626] 
                                    text-[#fff] 
                                    text-[16px] 
                                    font-semibold 
                                    block 
                                    w-full 
                                    py-[15px] 
                                    sm:py-[17px] 
                                    px-[21px] 
                                    sm:px-[30px] 
                                    leading-none 
                                    border 
                                    border-[#262626] 
                                    transition 
                                    duration-500 
                                    ease-in-out 
                                    hover:bg-[#000] 
                                    hover:border-[#000] 
                                    hover:text-[#fff]
                                "
				>
					{isSubmitting ? "Please wait..." : "Add Category"}
				</button>
			</div>
		</form>
	);
};

export default CreateForm;
