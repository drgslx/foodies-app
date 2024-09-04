import prisma from "@/libs/prismadb";

export async function getSingleCourse(params) {
	const { slug } = params;

	try {
		const course = await prisma.course.findUnique({
			where: { slug: slug },
			include: {
				user: {
					include: {
						profile: true,
					},
				},
				videos: true,
				courseCategory: {
					select: {
						id: true,
						name: true,
					},
				},
				enrolments: {
					select: {
						id: true,
					},
				},
				reviews: {
					orderBy: {
						created_at: "desc",
					},
					include: {
						user: {
							select: {
								name: true,
								image: true,
							},
						},
					},
				},
			},
		});

		const related = await prisma.course.findMany({
			where: { catId: course.courseCategory.id },
			take: 4,
			include: {
				user: true,
				reviews: true,
				courseCategory: {
					select: {
						name: true,
					},
				},
			},
		});

		return { course, related };
	} catch (error) {
		console.error("Error fetching counts:", error);
	}
}
