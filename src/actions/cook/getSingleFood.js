import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

export async function getSingleCourse(foodId) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { food: [], course_videos: [], course_assets: [] }; // Return fallback values if redirected
  }

  try {
    const food = await prisma.food.findUnique({
      where: { id: parseInt(foodId) },
    });

    const course_videos = await prisma.video.findMany({
      where: { foodId: parseInt(foodId) },
      orderBy: { short_id: "asc" },
    });

    const course_assets = await prisma.asset.findMany({
      where: { foodId: parseInt(foodId) },
    });

    return { food, course_videos, course_assets };
  } catch (error) {
    console.error("Error fetching food data:", error);
    return { food: [], course_videos: [], course_assets: [] }; // Return fallback values if there's an error
  }
}
