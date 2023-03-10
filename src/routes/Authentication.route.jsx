import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const Authentication = () => {
  return (
    <div className="authentication">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
