import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function GET(request) {
	try {
		const currentUser = await getCurrentUser();
		if (!currentUser) {
			return NextResponse.json(
				{
					message: "Unauthorized user.",
				},
				{ status: 401 }
			);
		}

		const foodCategories = await prisma.foodCategory.findMany({
			orderBy: {
				name: "asc",
			},
		});

		return NextResponse.json(foodCategories);
	} catch (error) {
		console.error("Error:", error);
		return NextResponse.json(
			{
				message: "An error occurred.",
			},
			{ status: 500 }
		);
	}
}
