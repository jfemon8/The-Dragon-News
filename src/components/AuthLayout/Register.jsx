import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
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
        navigate("/");
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
          Register your account
        </h1>
        <hr className="my-5 xl:my-10 border border-[#E7E7E7]" />
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label font-semibold xl:text-xl text-[#403F3F] mb-2 xl:mb-4">
            Your Name
          </label>
          <input
            type="text"
            className="input bg-[#F3F3F3] w-full mb-3 xl:mb-6"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label className="label font-semibold xl:text-xl text-[#403F3F] mb-2 xl:mb-4">
            Photo URL
          </label>
          <input
            type="text"
            className="input bg-[#F3F3F3] w-full mb-3 xl:mb-6"
            placeholder="Enter your Photo URL"
            name="photo"
            required
          />
          <label className="label font-semibold xl:text-xl text-[#403F3F] mb-2 xl:mb-4">
            Email Address
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

          <label className="label text-[#706F6F] text-xs xl:text-base">
            <input
              type="checkbox"
              className="checkbox checkbox-error"
              required
            />
            Accept <span className="font-semibold">Term & Conditions</span>
          </label>

          <button className="btn btn-neutral mt-4 bg-[#403F3F] text-white hover:text-[#403F3F] hover:bg-white">
            Register
          </button>
        </form>
        <p className="mt-3 xl:mt-6 text-center text-[#706F6F] font-semibold text-xs xl:text-base">
          Already Have An Account?{" "}
          <Link to={"/auth/login"} className="text-[#F75B5F]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
