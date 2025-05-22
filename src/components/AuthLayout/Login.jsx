import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, setUser } = use(AuthContext);

  let navigate = useNavigate();

  const location = useLocation();

  const redirectPath = location.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        navigate(redirectPath);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: `${errorCode}`,
          text: `${errorMessage}`,
          showConfirmButton: false,
          timer: 5000,
        });
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="card-body w-11/12 xl:w-1/2 mx-auto p-8 xl:p-16 bg-white mt-10 xl:mt-20">
        <h1 className="text-xl xl:text-4xl font-semibold text-[#403F3F] text-center">
          Login your account
        </h1>
        <hr className="my-5 xl:my-10 border border-[#E7E7E7]" />
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label font-semibold xl:text-xl text-[#403F3F] mb-2 xl:mb-4">
            Email address
          </label>
          <input
            type="email"
            className="input bg-[#F3F3F3] w-full mb-3 xl:mb-6"
            placeholder="Enter your email address"
            name="email"
            required
          />
          <label className="label font-semibold xl:text-xl text-[#403F3F] mb-2 xl:mb-4">
            Password
          </label>
          <input
            type="password"
            className="input bg-[#F3F3F3] w-full mb-3 xl:mb-6"
            placeholder="Enter your password"
            name="password"
            required
          />
          <div>
            <Link
              to={"/auth/forgot-password"}
              className="link link-hover xl:text-base text-[#FF8C47]"
            >
              Forgot password?
            </Link>
          </div>
          <button className="btn btn-neutral mt-4 bg-[#403F3F] text-white hover:text-[#403F3F] hover:bg-white">
            Login
          </button>
        </form>
        <p className="mt-3 xl:mt-6 text-center text-[#706F6F] font-semibold text-xs xl:text-base">
          Don’t Have An Account?{" "}
          <Link to={"/auth/register"} className="text-[#F75B5F]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
