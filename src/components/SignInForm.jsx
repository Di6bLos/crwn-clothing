import FormInput from "./FormInput";
import ButtonInput from "./ButtonInput";
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmail,
} from "../utils/firebase.utils";
const defaultFormFields = {
  email: "",
  password: "",
};


const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password} = formFields;
  console.log(formFields);
// Clears the form fields after submission
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
// Handles the change in the form so the values represent what is being typed
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Fetching Data")
      const response = await signInAuthUserWithEmail(email, password);
      console.log(response.user.uid);

      resetFormFields();
    } catch(error) {
      if(error.code === "auth/wrong-password") {
        alert("Wrong Password");
      } 
    }
  };

  const submitGoogleSignIn = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div className="form-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
 
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

        <div className="buttons-container">
          <ButtonInput buttonType={undefined} type="submit" value="Sign In" />
          <ButtonInput onClick={submitGoogleSignIn} buttonType={"google"} type="button" value="Google sign in" />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
