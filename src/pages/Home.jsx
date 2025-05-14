import React from "react";
import NavLayout from "../layouts/NavLayout/NavLayout";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <NavLayout></NavLayout>

      <section className="py-10 xl:py-20">
        <h1>This is home page!!!</h1>
      </section>
    </div>
  );
};

export default Home;
