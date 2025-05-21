import React from "react";
import career from "../assets/career.jpg";
import Navbar from "../components/NavLayout/Navbar";

const Career = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="grid grid-cols-1 gap-8 p-8 xl:p-16 items-center">
        <img
          className="rounded-2xl shadow-xl shadow-gray-300"
          src={career}
          alt="Career"
        />
        <div className="text-justify">
          <p className="xl:text-lg">
            Are you passionate about{" "}
            <span className="text-[#D72050] font-medium">
              storytelling, truth-seeking, and creating real impact
            </span>{" "}
            through journalism? At The Dragon News, we’re always looking for
            bold, curious, and driven individuals who believe in the power of
            facts and fearless reporting.
            <br />
            We are more than just a news outlet — we are a team of
            change-makers, watchdogs, and truth-tellers committed to journalism
            without fear or favour. Whether you're a writer, editor, developer,
            designer, or digital strategist, if you thrive in a fast-paced,
            mission-driven environment, we want to hear from you.
          </p>
          <h1 className="text-[#D72050] xl:text-2xl font-bold mt-4">
            💼 Why Work With Us?
          </h1>
          <p className="xl:text-lg">
            ✍️ Editorial Independence – Report freely and ethically with full
            creative control. <br />
            🌐 Impactful Work – Cover stories that matter and drive positive
            change. <br />
            🤝 Collaborative Culture – Work alongside passionate professionals
            in a supportive and inclusive newsroom. <br />
            🌱 Growth Opportunities – Learn, grow, and advance in your field
            with ongoing mentorship and development. <br />
            🌍 Remote Flexibility – Join our team from anywhere and work on your
            terms.
          </p>
          <h1 className="text-[#D72050] xl:text-2xl font-bold mt-4">
            📢 Current Openings
          </h1>
          <p className="xl:text-lg">
            We’re currently hiring for:
            <li>Investigative Journalists</li>
            <li>News Writers (Politics, Business, Tech, Culture)</li>
            <li>Video Content Creators</li>
            <li>Social Media & Community Managers</li>
            <li>Front-End and Full-Stack Developers</li>
            <li>UI/UX Designers</li>
            <li>SEO & Analytics Specialists</li>
            Don’t see your role? We welcome open applications from extraordinary
            talent. Tell us why you belong at The Dragon News.
          </p>
          <h1 className="text-[#D72050] xl:text-2xl font-bold mt-4">
            📩 How to Apply
          </h1>
          <p className="xl:text-lg">
            Send your resume, portfolio, or published work to{" "}
            <span className="text-[#D72050]">careers@thedragonnews.com</span>{" "}
            with the subject line: “
            <span className="font-bold">
              Application – [Your Desired Position]
            </span>
            ”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
