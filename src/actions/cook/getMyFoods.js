import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

export async function getMyfoods() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { foods: [] }; // Return an empty array if redirected
  }

  try {
    const foods = await prisma.food.findMany({
      where: { userId: currentUser.id },
      include: {
        user: {
          select: {
            name: true,
            image: true,
            role: true,
          },
        },
        reviews: true,
        foodCategory: {
          select: {
            name: true,
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
