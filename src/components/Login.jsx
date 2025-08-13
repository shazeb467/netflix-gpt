import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />

      <div className="absolute w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="login-background"
          className="w-full h-full object-cover"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-4/12 py-8 px-16 bg-black mx-auto my-36 rounded-sm right-0 left-0 opacity-90 text-white"
      >
        <h1 className="text-3xl font-bold my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-4 w-full text-white rounded-sm border-2"
          />
        )}

        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-3 my-4 w-full text-white rounded-sm border-2"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4  w-full rounded-sm border-2"
        />

        <button className="p-3 my-4 bg-red-600 text-white font-bold w-full rounded-sm cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="my-12">
            {isSignInForm ? 'New to Netflix ?  ' : 'Already registered ?  '}
          <span
            className="cursor-pointer font-bold underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? 'Sign up now.' : 'Sign In'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
