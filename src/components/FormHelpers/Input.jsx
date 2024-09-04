"use client";

import React from "react";

const Input = ({
	id,
	type = "text",
	placeholder,
	disabled,
	register,
	required,
}) => {
	return (
		<input
			id={id}
			type={type}
			className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
			placeholder={placeholder}
			{...register(id, { required })}
			disabled={disabled}
			required
		/>
	);
};

export default Input;
