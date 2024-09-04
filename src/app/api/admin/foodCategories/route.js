import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";
import { slugify } from "@/utils/slugify";

export async function POST(request) {
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

	let slug = slugify(name);
	const slugExist = await prisma.foodCategory.findFirst({
		where: {
			slug: slug,
		},
	});

	if (slugExist) {
		slug = `${slug}-${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
	}

	await prisma.foodCategory.create({
		data: {
			name,
			slug,
		},
	});

	return NextResponse.json(
		{ message: "foodCategory created successfully." },
		{ status: 200 }
	);
}
