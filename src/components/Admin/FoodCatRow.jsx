"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const FoodCatRow = ({ id, name, onDelete }) => {
	const { lang } = useParams();
	const router = useRouter();
	return (
		<tr className="bg-white border-b">
			<td className="px-6 py-4">{name}</td>

			<td className="px-6 py-4 space-x-2">
				<button
					onClick={() => onDelete(id)}
					type="button"
					className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Delete{" "}
				</button>

				<button
					type="button"
					className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					onClick={() => router.push(`/admin/foodCategories/${id}`)}
				>
					Edit{" "}
				</button>
			</td>
		</tr>
	);
};

export default FoodCatRow;
