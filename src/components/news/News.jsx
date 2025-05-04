import React from "react";
import watch1 from "../assets/watch1.png";
import "./news.scss";

const News = () => {
   return (
      <section class="news">
         <div class="container news__wrapper">
            <div class="news__body">
               <h3>Subscribe To Newsletter</h3>
               <p>Get free guide about smart watches daily.</p>
               <div class="input">
                  <input type="text" placeholder="Enter Email Address" />
                  <button>Subscribe</button>
               </div>
            </div>

            <div class="news__image">
               <img src={watch1} alt="" />
            </div>
         </div>
      </section>
   );
};

export default News;
