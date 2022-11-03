import { Link } from "react-router-dom";
import { useState } from "react";

import form from "Data/resetPasswordForm";
import InputField from "Components/InputField";

export default function ResetPassword() {
	const [email, setEmail] = useState("tshepi.lehutjo@gmail.com");

	function onReset() {
		console.log("resetting password");
	}

	return (
		<div>
			<p>
				Please fill in the email which you used to create the account of the
				password you want to reset. Instructions to reset the password will be
				sent to that email{" "}
			</p>
			<form onSubmit={onReset}>
				<InputField setup={form.email} state={[email, setEmail]} />
				<button>Submit</button>
			</form>
			<p>
				Did you remembered your password?
				<Link to="/login">Log in</Link> to go back the login page.
			</p>
			d
		</div>
	);
}
