import { useState } from "react";

import form from "Data/logInForm";
import InputField from "Components/InputField";

export default function LogIn() {
	const [email, setEmail] = useState("tshepi.tech@gmail.com");
	const [password, setPassword] = useState("123456");
	const [students, setStudents] = useState([]);

	function handleEmail(event) {
		setEmail(event.target.value);
	}
	function handlePassword(event) {
		setPassword(event.target.value);
	}

	function onLogin() {
		console.log("loggin in ...");
	}
	return (
		<div>
			{" "}
			<form onSubmit={onLogin}>
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
				<button>Log In</button>
			</form>
		</div>
	);
}
