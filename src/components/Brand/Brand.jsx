import React from "react";
import Brands from "../static/brands";
import "./brand.scss";

const Brand = () => {
   return (
      <section class="brand" id="brand">
         <div class="container brand__wrapper">
            {Brands.map((brand) => (
               <div class="brand__card">
                  <div class="brand__image">
                     <img src={brand.image} alt="" />
                  </div>
                  <div class="brand__body">
                     <h3>{brand.name}</h3>
                     <p>{brand.desc}</p>
                  </div>
               </div>
            ))}
         </div>

         <div class="title" id="title">
            <div class="title__wrapper">
               <a href="#">Find your favourite smart watch.</a>
               <h3>Our Latest Products</h3>
            </div>
         </div>
      </section>
   );
};

export default Brand;
