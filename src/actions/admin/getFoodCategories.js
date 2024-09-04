import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

export async function getFoodCategories() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { categories: [] }; // Ensure to return an empty array if redirected
  }

  try {
    const categories = await prisma.foodCategory.findMany({});
    return { categories };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { categories: [] }; // Return an empty array if there's an error
  }
}

export async function getFoodCategoryById(params) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { category: null }; // Ensure to return null if redirected
  }

  const { catId } = params;

  try {
    const category = await prisma.foodCategory.findUnique({
      where: { id: parseInt(catId) },
    });

    return { category };
  } catch (error) {
    console.error("Error fetching category:", error);
    return { category: [] }; // Return null if there's an error
  }
}
