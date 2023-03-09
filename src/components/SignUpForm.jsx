import { useState } from "react";
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
  console.log(formFields);

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
      await createUserDoc(user, {displayName});

      resetFormFields();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="form-container">
      <h1>Sign Up With Email</h1>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <fieldset>
          <label htmlFor="display-name-input">Name</label>
          <input
            type="text"
            id="display-name-input"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email-input">Email</label>
          <input
            type="email"
            id="email-input"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password-input">Password</label>
          <input
            type="password"
            id="password-input"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirm-password-input">Confirm Password</label>
          <input
            type="password"
            id="confirm-password-input"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
