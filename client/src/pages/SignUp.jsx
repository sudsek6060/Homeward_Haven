import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-bold text-2xl my-8">Sign UP</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="User Name"
          id="username"
        />
        <input
          className="border p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="Password"
          id="password"
        />
        <button className="bg-blue-500 text-slate-50 p-3 text-xl font-bold rounded-lg ">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-1">
        <p>Have an account ?</p>
        <Link className="text-blue-500 font-semibold" to="/sign-in">
          sing in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
