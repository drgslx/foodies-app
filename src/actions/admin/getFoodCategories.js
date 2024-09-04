import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

export async function getFoodCategories() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { foodCategories: [] }; // Ensure to return an empty array if redirected
  }

  try {
    const foodCategories = await prisma.foodCategory.findMany({});
    return { foodCategories };
  } catch (error) {
    console.error("Error fetching foodCategories:", error);
    return { foodCategories: [] }; // Return an empty array if there's an error
  }
}

export async function getFoodCategoryById(params) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { foodCategory: null }; // Ensure to return null if redirected
  }

  const {foodCatId } = params;

  try {
    const foodCategory = await prisma.foodCategory.findUnique({
      where: { id: parseInt(foodCatId) },
    });

    return { foodCategory };
  } catch (error) {
    console.error("Error fetching foodCategory:", error);
    return { foodCategory: [] || null }; // Return null if there's an error
  }
}
