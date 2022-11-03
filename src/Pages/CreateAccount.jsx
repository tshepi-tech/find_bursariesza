import { useState } from "react";

import form from "Data/createAccountForm";
import InputField from "Components/InputField";

export default function CreateAccount() {
	const [name, setName] = useState("tshepi");
	const [email, setEmail] = useState("tshepi.lehutjo@gmail.com");
	const [password, setPassword] = useState("12345abcd");
	const [student, setStudent] = useState("true");

	function handleName(event) {
		setName(event.target.value);
	}

	function handleEmail(event) {
		setEmail(event.target.value);
	}
	function handlePassword(event) {
		setPassword(event.target.value);
	}

	function onCreateAccount() {
		console.log("account created");
	}
	return (
		<div>
			<form onSubmit={onCreateAccount}>
				<InputField setup={form.name} handleChange={handleName} value={name} />
				<InputField
					setup={form.email}
					value={email}
					handleChange={handleEmail}
				/>
				<InputField
					setup={form.password}
					value={password}
					handleChange={handlePassword}
				/>
				<button>create Account</button>
			</form>
		</div>
	);
}
