import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function POST(request, { params }) {
	const { foodCatId } = params;
	if (foodCatId == "") {
		return NextResponse.json(
			{
				message: "foodCatId is required!",
			},
			{ status: 404 }
		);
	}
	const body = await request.json();
	const { name } = body;

	if (name == "") {
		return NextResponse.json(
			{
				message: "Name is required!",
			},
			{ status: 404 }
		);
	}

	const cat = await prisma.foodCategory.findFirst({
		where: {
			name: name,
		},
	});
	if (cat) {
		return NextResponse.json(
			{ message: "foodCategory already exist." },
			{ status: 402 }
		);
	}

	await prisma.foodCategory.update({
		where: { id: parseInt(foodCatId) },
		data: {
			name,
		},
	});

	return NextResponse.json(
		{ message: "foodCategory updated successfully." },
		{ status: 200 }
	);
}

export async function DELETE(request, { params }) {
	const { foodCatId } = params;

	if (foodCatId == "") {
		return NextResponse.json(
			{
				message: "foodCatId is required!",
			},
			{ status: 404 }
		);
	}

	await prisma.foodCategory.delete({
		where: { id: parseInt(foodCatId) },
	});

	return NextResponse.json(
		{ message: "foodCategory deleted successfully." },
		{ status: 200 }
	);
}
