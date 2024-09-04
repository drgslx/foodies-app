import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

export async function getfoodsAdmin() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { foods: [] }; // Return an empty array if redirected
  }

  try {
    const foods = await prisma.food.findMany({
      where: { approved: true },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        videos: {
          select: {
            id: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });

    return { foods };
  } catch (error) {
    console.error("Error fetching foods:", error);
    return { foods: [] || null }; // Return an empty array if there's an error
  }
}

export async function getNewfoods() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { foods: [] }; // Return an empty array if redirected
  }

  try {
    const foods = await prisma.food.findMany({
      where: { approved: false },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        videos: {
          select: {
            id: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });

    return { foods };
  } catch (error) {
    console.error("Error fetching foods:", error);
    return { foods: [] }; // Return an empty array if there's an error
  }
}
