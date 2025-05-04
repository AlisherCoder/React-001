import React from "react";
import "./hero.scss";
import hero from "../assets/hero.png";

const Hero = () => {
   return (
      <section className="hero">
         <div className="container hero__wrapper">
            <div className="hero__content">
               <h1>Discover Most Suitable Watches</h1>
               <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
               <div className="hero__search">
                  <input type="text" placeholder="Find the best brands" />
                  <button>Search</button>
               </div>
            </div>
            <div className="hero__image">
               <img src={hero} alt="" />
            </div>
         </div>
      </section>
   );
};

export default Hero;
