//NPM packages
import { useState } from "react";

//Project files
import form from "Data/logInForm";
import InputField from "Components/InputField";

export default function LogIn() {
  const [email, setEmail] = useState("tshepi.tech@gmail.com");
  const [password, setPassword] = useState("123456");
  const [students, setStudents] = useState([]);

  function onLogin() {
    console.log("loggin in ...");
  }
  return (
    <div>
      {" "}
      <form onSubmit={onLogin}>
        <InputField setup={form.email} state={[email, setEmail]} />
        <InputField setup={form.password} state={[password, setPassword]} />
        <button>Log In</button>
      </form>
    </div>
  );
}
