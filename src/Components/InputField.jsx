export default function InputField({ setup, handleChange, value }) {
	const { label, placeholder, type, required } = setup;

	return (
		<label className="input-field">
			{label}
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required={required}
			/>
		</label>
	);
}
