"use client";

import React, { useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

const SetPrice = ({ id, disabled, required, register, value, onChange }) => {
	// const [value, setValue] = useState(0);

	const handleInput = (event) => {
		// Check if the entered value is negative
		const inputValue = parseInt(event.target.value, 10);
		const newValue = inputValue < 0 ? 0 : inputValue;

		// Update the state with the non-negative value
		onChange(newValue);
	};

	return (
		<input
			type="number"
			id={id}
			value={value}
			onInput={handleInput}
			disabled={disabled}
			{...register(id, { required })}
			className="bg-transparent text-[#4A4E4B] border border-[#051F0D] h-[54px] block w-full py-[5px] px-[25px] focus:outline-none placeholder-[#4A4E4B]"
		/>
	);
};

export default SetPrice;
