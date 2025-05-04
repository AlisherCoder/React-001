import { FaStar } from "react-icons/fa";
import prd1 from "../assets/prd1.png";
import prd2 from "../assets/prd2.png";
import prd3 from "../assets/prd3.png";
import prd4 from "../assets/prd4.png";
import prd5 from "../assets/prd5.png";
import prd6 from "../assets/prd6.png";

const Products = [
   {
      image: prd1,
      name: "Apple Smart I",
      price: 300.0,
      star: <FaStar />,
   },
   {
      image: prd2,
      name: "Apple Smart II",
      price: 300.0,
      star: <FaStar />,
   },
   {
      image: prd3,
      name: "Apple Smart III",
      price: 300.0,
      star: <FaStar />,
   },
   {
      image: prd4,
      name: "Apple Smart IV",
      price: 300.0,
      star: <FaStar />,
   },
   {
      image: prd5,
      name: "Samsung Watch Pro",
      price: 300.0,
      star: <FaStar />,
   },
   {
      image: prd6,
      name: "Fitbit Max",
      price: 300.0,
      star: <FaStar />,
   },
];

export default Products;
