import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastucture for the internet</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet a
            dolore magnam! Nulla vitae corrupti consequatur corporis molestias
            deserunt? Odio.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
