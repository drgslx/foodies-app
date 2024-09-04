import prisma from "@/libs/prismadb";

export async function getFoods(params) {
	const { q, sort, page = 1, pageSize = 9 } = params;

	const getOrderByClause = () => {
		switch (sort) {
			default:
				return { created_at: "desc" }; // Default sorting option
		}
	};


	try {
		let where = {};
		if (q) {
			where.OR = [
				{
					title: {
						contains: q,
					},
				},
				{
					overview: {
						contains: q,
					},
				},
			];
		}

		const totalFoods = await prisma.food.count({
			where,
		});
		const totalPages = Math.ceil(totalFoods / parsedPageSize);

		const foods = await prisma.food.findMany({
			where,
			orderBy: getOrderByClause(),
			include: {
				user: true,
				reviews: true,
				category: {
					select: {
						name: true,
					},
				},
			},
		});

		// console.log(foods);

		return { foods, totalPages, totalFoods };
	} catch (error) {
		console.error("Error fetching counts:", error);
		return { foods: [], totalPages: 0, totalFoods: 0 };
	}
}

export async function getHomepagefoods() {
	try {
		const home_foods = await prisma.food.findMany({
			take: 5,
			orderBy: {
				id: "asc",
			},
			include: {
				user: true,
				reviews: true,
				category: {
					select: {
						name: true,
					},
				},
			},
		});

		// console.log(foods);

		return { home_foods };
	} catch (error) {
		return { home_foods: [] };
		console.error("Error fetching counts:", error);
	}
}
