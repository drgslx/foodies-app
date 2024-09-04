"use client";
import StudentsRaw from "@/components/Admin/StudentsRaw";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const StudentsTable = ({ users }) => {
	const router = useRouter();
	const handleAdmin = async (userId, role) => {
		console.log(role);
		try {
			const data = { admin: role };
			const response = await axios.post(
				`/api/admin/users/${userId}`,
				data
			);
			toast.success(response.data.message);
			router.refresh();
		} catch (err) {
			let {
				response: {
					data: { message },
				},
			} = err;
			toast.error(message);
		}
	};
	return (
		<div className="relative overflow-x-auto">
			<table className="w-full text-sm text-left rtl:text-right text-gray-500">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
						<th scope="col" className="px-6 py-3">
							Name
						</th>
						<th scope="col" className="px-6 py-3">
							Email
						</th>
						<th scope="col" className="px-6 py-3">
							Phone
						</th>
						<th scope="col" className="px-6 py-3">
							Status
						</th>

						<th scope="col" className="px-6 py-3">
							Make Admin
						</th>
					</tr>
				</thead>
				<tbody>
					{users.length > 0 ? (
						users.map((user) => (
							<StudentsRaw
								key={user.id}
								{...user}
								onAdmin={() => handleAdmin(user.id, user.role)}
							/>
						))
					) : (
						<tr className="bg-white border-b">
							<td colSpan="7" className="text-center py-3">
								Empty!
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default StudentsTable;
