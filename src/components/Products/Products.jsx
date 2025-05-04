import React from "react";
import ProductsArray from "../static/products";
import "./products.scss";

const Products = () => {
   return (
      <section class="products">
         <div class="container products__wrapper">
            {ProductsArray.map((prd) => (
               <div class="products__card">
                  <div class="products__image">
                     <img src={prd.image} alt={prd.name} />
                  </div>
                  <h3>{prd.name}</h3>
                  <div className="stars">{Array(5).fill(prd.star, 0)}</div>
                  <p>
                     <span>
                        <del>${prd.price}</del>
                     </span>{" "}
                     ${prd.price - prd.price * 0.15}
                  </p>
               </div>
            ))}
         </div>

         <div class="container products__button">
            <button>View More</button>
         </div>

         <div class="title" id="title">
            <div class="title__wrapper">
               <a href="#">Here are our some of the best clients.</a>
               <h3>What People Say About Us</h3>
            </div>
         </div>
      </section>
   );
};

export default Products;
