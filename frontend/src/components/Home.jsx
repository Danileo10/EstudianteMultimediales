import React from "react";
import Navbar from "./Navbar";
import Bienestar from "../assets/bienestar.png"

function Home() {
  return (
    <>
      <Navbar />
      <section class="main-container">
        <div class="cards-container">
          <img src={Bienestar} alt="logo bienestar" height="300px" width="400px"/>
        </div>
      </section>
    </>
  );
}

export default Home;

