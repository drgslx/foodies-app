"use client";
import React from "react";

const TextArea = ({
	id,
	type = "text",
	placeholder,
	disabled,
	register,
	required,
}) => {
	return (
		<>
			<textarea
				id={id}
				type={type}
				rows={10}
				className="bg-transparent text-[#4A4E4B] border border-[#051F0D] block w-full py-[10px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
				placeholder={placeholder}
				{...register(id, { required })}
				disabled={disabled}
				required
			/>
		</>
	);
};

export default TextArea;
