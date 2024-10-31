import React, { useState } from "react";
import { Label, TextInput, Checkbox } from "flowbite-react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  return (
    <>
      <form
        className="max-w-sm mx-auto border p-6 relative overflow-hidden border-green-300"
        onSubmit={handleSubmit}
      >
        <div className='content-[""] block w-[100%] h-[100%] absolute bg-green-400 blur-3xl rounded-[50%] -top-16 -left-16'></div>
        <div className="login block h-full text-center uppercase font-mono font-bold text-3xl relative">
          <h1>Login</h1>
        </div>
        <div className="mb-5">
          <Label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white relative"
          >
            Your email
          </Label>
          <TextInput
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@flowbite.com"
            required
            className="w-full"
          />
        </div>
        <div className="mb-5">
          <Label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white relative"
          >
            Your password
          </Label>
          <TextInput
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full"
          />
        </div>
        <div className="flex items-start mb-5 w-full relative ">
          <div className="flex-1">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <Label
              htmlFor="remember"
              className="text-sm font-medium text-gray-900  dark:text-gray-300 relative"
            >
              Remember me
            </Label>
          </div>

          <Label className="relative ">
            <u>Forgot password</u>
          </Label>
        </div>
        <button
          className="bg-green-600 w-full relative  p-1 text-xl font-sans font-bold text-white  rounded-lg"
          type="submit"
        >
          Submit
        </button>
        <div className="other-log relative block w-full text-center py-6 cursor-pointer">
          <h2>Or Sign In with</h2>
          <div className="social flex justify-center gap-6 mt-4 ">
            <svg
              class="w-10 h-10 text-gray-800 dark:text-white hover:bg-green-700 rounded-[50%] transition-all ease-in-out  duration-200 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
                clip-rule="evenodd"
              />
            </svg>

            <svg
              class="w-10 h-10 text-gray-800 dark:text-white hover:bg-green-700 rounded-[50%] transition-all ease-in-out  duration-200 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              class="w-10 h-10 text-gray-800 dark:text-white hover:bg-green-700 rounded-[50%] transition-all ease-in-out  duration-200 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
            </svg>
          </div>
        </div>
        <hr className="bg-green-400 h-[2px]" />
        <div className="text-center mt-4">
          Not a membe?{" "}
          <Link to="/signup" className="text-blue-600">
            Sign Up
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
