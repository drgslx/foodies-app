import prisma from "@/libs/prismadb";
import { redirect } from "next/navigation";
import { getCurrentUser } from "../getCurrentUser";

export async function getTestimonials() {
  try {
    const testimonials = await prisma.testimonial.findMany({});
    return { testimonials };
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return { testimonials: [] }; // Return an empty array if there's an error
  }
}

export async function getTestimonialsById(params) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/");
    return { testimonial: null }; // Return null if redirected
  }

  const { testId } = params;

  try {
    const testimonial = await prisma.testimonial.findUnique({
      where: { id: parseInt(testId) },
    });

    return { testimonial };
  } catch (error) {
    console.error("Error fetching testimonial:", error);
    return { testimonial: null }; // Return null if there's an error
  }
}
