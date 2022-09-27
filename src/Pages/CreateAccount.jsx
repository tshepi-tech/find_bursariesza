//NPM packages
import { useState } from "react";

//Project Files
import form from "Data/createAccountForm"
import InputField from "Components/InputField";

export default function CreateAccount() {

    const [name, setName] = useState("tshepi");
    const [email, setEmail] = useState("tshepi.lehutjo@gmail.com");
    const [password, setPassword] = useState("12345abcd");
    const [student, setStudent] = useState("true");

    function onCreateAccount (){
        console.log("account created")
    }
  return (
    <div>
        <form onSubmit={onCreateAccount}>
        <InputField setup={form.name} state={[name, setName]} />
        <InputField setup={form.email} state={[email, setEmail]} />
        <InputField setup={form.password} state={[password, setPassword]} />
        <button>create Account</button>
      </form>
    </div>
  )
}
