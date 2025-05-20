import React from "react";
import Navbar from "../components/NavLayout/Navbar";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 p-8 xl:p-16 items-center">
        <img
          className="rounded-2xl shadow-xl shadow-gray-300"
          src={about}
          alt="About"
        />
        <div className="text-justify">
          <p className="xl:text-lg">
            At{" "}
            <span className="text-[#D72050] font-medium">The Dragon News</span>,
            we believe in the power of truth. In an era of noise,
            misinformation, and bias, we stand firm as an independent voice
            committed to honest, balanced, and fearless journalism.
            <br />
            Founded with the vision of empowering the public through credible
            reporting, The Dragon News covers stories that matter — with
            integrity, accuracy, and depth. From breaking headlines to
            thoughtful analysis, our team of passionate journalists is dedicated
            to uncovering the facts and presenting them without distortion or
            agenda.
            <br />
            We don’t chase trends — we chase the truth. Whether it’s holding
            power to account, giving voice to the unheard, or spotlighting
            global and local issues, our commitment remains the same: to serve
            the public interest, not private interests.
          </p>
          <h1 className="text-[#D72050] xl:text-2xl font-bold mt-4">
            Our Mission
          </h1>
          <p className="xl:text-lg">
            To inform, inspire, and engage readers through independent
            journalism that challenges injustice, fosters accountability, and
            upholds the values of a free press.
          </p>
          <h1 className="text-[#D72050] xl:text-2xl font-bold mt-4">
            Our Promise
          </h1>
          <p className="xl:text-lg">
            We will never be silenced, swayed, or sold. We report without fear
            or favour — always.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
