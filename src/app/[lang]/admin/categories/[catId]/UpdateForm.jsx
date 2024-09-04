"use client";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useForm } from "react-hook-form";
import Input from "@/components/FormHelpers/Input";

const UpdateForm = ({ category }) => {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isSubmitting, isValid },
	} = useForm({
		defaultValues: {
			name: "",
		},
	});
	useEffect(() => {
		setValue("name", category.name);
	}, [category]);

	const onUpdate = async (data) => {
		try {
			const url = `/api/admin/categories/${category.id}`;
			const response = await axios.post(url, data);
			toast.success(response.data.message);
			router.push("/admin/categories");
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
		<form onSubmit={handleSubmit(onUpdate)} className="space-y-[25px]">
			<div>
				<label className="text-black text-[16px] md:text-[18px] font-semibold block mb-[10px]">
					Category Name
				</label>
				<Input
					placeholder="Category Name"
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
					{isSubmitting ? "Please wait..." : "Update Category"}
				</button>
			</div>
		</form>
	);
};

export default UpdateForm;
