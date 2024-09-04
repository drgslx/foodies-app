import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

export async function getCourseCategories() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { courseCategories: [] }; // Ensure to return an empty array if redirected
  }

  try {
    const courseCategories = await prisma.courseCategory.findMany({});
    return { courseCategories };
  } catch (error) {
    console.error("Error fetching courseCategories:", error);
    return { courseCategories: [] }; // Return an empty array if there's an error
  }
}

export async function getCourseCategoryById(params) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { courseCategory: null }; // Ensure to return null if redirected
  }

  const { catId } = params;

  try {
    const courseCategory = await prisma.courseCategory.findUnique({
      where: { id: parseInt(catId) },
    });

    return { courseCategory };
  } catch (error) {
    console.error("Error fetching courseCategory:", error);
    return { courseCategory: null }; // Return null if there's an error
  }
}
