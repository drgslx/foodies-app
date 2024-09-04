"use client";
import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const CourseCategorySelect = ({ value, onChange }) => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		const fetchCategories = async () => {
			const response = await axios.get("/api/categories");

			const modifiedData = response.data.map((courseCategory) => ({
				value: courseCategory.id,
				label: courseCategory.name,
			}));

			setCategories(modifiedData);
		};

		fetchCategories();
	}, []);

	const selectedOption = categories.find(
		(courseCategory) => courseCategory.value === value
	);

	return (
		<Select
			placeholder="Select Course Category"
			required
			isClearable
			isSearchable={true}
			options={categories}
			value={selectedOption || value}
			onChange={(value) => onChange(value)}
			formatOptionLabel={(option) => (
				<div className="flex flex-row items-center gap-3">
					<div>{option.label}</div>
				</div>
			)}
			theme={(theme) => ({
				...theme,
				borderRadius: 6,
				colors: {
					...theme.colors,
					primary: "green",
					primary25: "#ffe4e6",
				},
			})}
		/>
	);
};

export default CourseCategorySelect;
