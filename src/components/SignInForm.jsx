import FormInput from "./FormInput";
import ButtonInput from "./ButtonInput";
import { useState } from "react";
// import { UserContext } from "../contexts/User.context";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmail,
  createUserDoc,
} from "../utils/firebase.utils";



const defaultFormFields = {
  email: "",
  password: "",
};


const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password} = formFields;

// Clears the form fields after submission
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
// Handles the change in the form so the values represent what is being typed
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmail(email, password);
      // setCurrentUser(user);

      resetFormFields();
    } catch(error) {
      if(error.code === "auth/wrong-password") {
        alert("Wrong Password");
      } 
    }
  };

  const submitGoogleSignIn = async () => {
    await signInWithGooglePopup();
    // createUserDoc(user);
    // setCurrentUser(user);
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
