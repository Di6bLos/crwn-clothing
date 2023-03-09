import SignUpForm from "../components/SignUpForm";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import { signInWithGooglePopup, createUserDoc } from "../utils/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserDoc(response.user);
    }

        return (
            <div>
                <h1>Sign In Page</h1>
                <SignUpForm />
                <button onClick={logGoogleUser}>
                    Sign In with Google
                </button>
            </div>
        )


}

export default SignIn;