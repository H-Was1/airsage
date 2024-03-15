import React from "react";
import Navbar from "../_frags/Navbar";
import Footer from "../_frags/footer";

function City() {
  return (
    <div className="flex flex-col relative">
      <Navbar />
      <main>
        <section className="lg:px-[10rem] px-8">
          <div className="flex w-[80%] h-full items-center justify-center blur-3xl opacity-10 absolute -z-10">
            <div className="bg-emerald-500 h-full w-full"></div>
          </div>
          <div></div>
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default City;
