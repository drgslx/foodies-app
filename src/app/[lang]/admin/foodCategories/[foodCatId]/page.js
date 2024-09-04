import React from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { redirectIfNotAdmin } from "@/utils/admin";
import TopNav from "../TopNav";
import AdminSidebar from "../../AdminSidebar";
import { getFoodCategoryById } from "@/actions/admin/getFoodCategories";
import UpdateForm from "./UpdateForm";

const page = async ({ params }) => {
	const currentUser = await getCurrentUser();
	redirectIfNotAdmin(currentUser, params);
	const { foodCategory } = await getFoodCategoryById(params);
	return (
		<div className="bg-[#F0F0F0] py-[50px]">
			<div className="container mx-auto">
				<div className="grid gap-[20px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4">
					<AdminSidebar />
					<div className="lg:col-span-3 space-y-[30px]">
						<TopNav />
						<UpdateForm foodCategory={foodCategory} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
