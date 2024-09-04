import { getCurrentUser } from "../getCurrentUser";
import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";

export async function getCoursesAdmin() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { courses: [] }; // Return an empty array if redirected
  }

  try {
    const courses = await prisma.course.findMany({
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
        courseCategory: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });

    return { courses };
  } catch (error) {
    console.error("Error fetching courses:", error);
    return { courses: [] }; // Return an empty array if there's an error
  }
}

export async function getNewCourses() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { courses: [] }; // Return an empty array if redirected
  }

  try {
    const courses = await prisma.course.findMany({
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
        courseCategory: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });

    return { courses };
  } catch (error) {
    console.error("Error fetching courses:", error);
    return { courses: [] }; // Return an empty array if there's an error
  }
}
