import FormInput from "./FormInput";
import ButtonInput from "./ButtonInput";
import { useState } from "react";
// import { UserContext } from "../contexts/User.context";

import {
  createAuthUserWithEmailAndPassword,
  createUserDoc,
} from "../utils/firebase.utils";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
//   const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords dont Match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      
    //   setCurrentUser(user);
      
      await createUserDoc(user, { displayName });

      resetFormFields();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Sign Up With Email</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          label="Name"
          type="text"
          id="display-name-input"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          type="email"
          id="email-input"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          id="password-input"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          type="password"
          id="confirm-password-input"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <ButtonInput buttonType={undefined} type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUpForm;
