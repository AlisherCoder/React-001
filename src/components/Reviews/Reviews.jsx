import React from "react";
import "./reviews.scss";
import { FaStar } from "react-icons/fa";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";

const Reviews = () => {
   return (
      <section class="reviews">
         <div class="container reviews__wrapper">
            <div class="reviews__content">
               <div class="reviews__item">
                  <div class="item__image">
                     <img src={user1} alt="" />
                  </div>
                  <div class="item__body">
                     <h3>Hamza Faizi</h3>
                     <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                     <div class="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                     </div>
                  </div>
               </div>

               <div class="reviews__item">
                  <div class="item__image">
                     <img src={user2} alt="" />
                  </div>
                  <div class="item__body">
                     <h3>Hafiz Huzaifa</h3>
                     <p>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                     <div class="stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                     </div>
                  </div>
               </div>
            </div>

            <div class="reviews__dots">
               <div class="dot"></div>
               <div class="dot"></div>
               <div class="dot"></div>
               <div class="dot"></div>
               <div class="dot"></div>
            </div>
         </div>
      </section>
   );
};

export default Reviews;
