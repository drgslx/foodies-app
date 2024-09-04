import { NextResponse } from "next/server";
import { getCurrentUser } from "@/actions/getCurrentUser";
import prisma from "@/libs/prismadb";

export async function POST(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { foodId } = params;

	if (!foodId) {
		throw new Error("Invalid ID");
	}

	const favExist = await prisma.favouriteFood.findFirst({
		where: {
			userId: currentUser.id,
			foodId: parseInt(foodId),
		},
	});

	if (favExist) {
		throw new Error("Already exist!");
	}

	const fav = await prisma.favouriteFood.create({
		data: {
			userId: currentUser.id,
			foodId: parseInt(foodId),
		},
	});

	return NextResponse.json(fav);
}

export async function DELETE(request, { params }) {
	const currentUser = await getCurrentUser();
	if (!currentUser) {
		return NextResponse.error();
	}
	const { foodId } = params;
	if (!foodId) {
		throw new Error("Invalid ID");
	}

	const findFavorite = await prisma.favouriteFood.findFirst({
		where: {
			userId: currentUser.id,
			foodId: parseInt(foodId),
		},
	});
	if (!findFavorite) {
		throw new Error("Not found!");
	}
	const deletedFavorite = await prisma.favouriteFood.delete({
		where: {
			id: findFavorite.foodId,
		},
	});

	return NextResponse.json(deletedFavorite);
}
