import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-2 gap-5 p-8 xl:p-16 items-center justify-center">
        <img
          className="rounded-full shadow-xl shadow-gray-300"
          src={user.photoURL}
          alt="Profile Picture"
        />
        <div className="text-justify">
          <p className="xl:text-lg">
            <span className="text-[#D72050] font-medium">Name: </span>
            {user.displayName}
          </p>
          <p className="xl:text-lg">
            <span className="text-[#D72050] font-medium">Email: </span>
            {user.email}
          </p>
          <p className="xl:text-lg">
            <span className="text-[#D72050] font-medium">Verified Email: </span>
            {user.emailVerified ? "Yes" : "No"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
