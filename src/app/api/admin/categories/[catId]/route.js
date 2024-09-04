import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function POST(request, { params }) {
	const { catId } = params;
	if (catId == "") {
		return NextResponse.json(
			{
				message: "catId is required!",
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

	const cat = await prisma.courseCategory.findFirst({
		where: {
			name: name,
		},
	});
	if (cat) {
		return NextResponse.json(
			{ message: "courseCategory already exist." },
			{ status: 402 }
		);
	}

	await prisma.courseCategory.update({
		where: { id: parseInt(catId) },
		data: {
			name,
		},
	});

	return NextResponse.json(
		{ message: "courseCategory updated successfully." },
		{ status: 200 }
	);
}

export async function DELETE(request, { params }) {
	const { catId } = params;

	if (catId == "") {
		return NextResponse.json(
			{
				message: "catId is required!",
			},
			{ status: 404 }
		);
	}

	await prisma.courseCategory.delete({
		where: { id: parseInt(catId) },
	});

	return NextResponse.json(
		{ message: "courseCategory deleted successfully." },
		{ status: 200 }
	);
}
