import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const { forgotPassword } = useContext(AuthContext);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    forgotPassword(email)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "A password reset email sent to your mail!",
          showConfirmButton: false,
          timer: 5000,
        });
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
        <form onSubmit={handleForgotPassword} className="fieldset">
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
          <button className="btn btn-neutral mt-4 bg-[#403F3F] text-white hover:text-[#403F3F] hover:bg-white">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
