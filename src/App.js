import "./App.scss";
import Brand from "./components/Brand/Brand";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Reviews from "./components/Reviews/Reviews";
import News from "./components/news/News";

function App() {
   return (
      <div className="App">
         <Header />
         <Hero />
         <Brand />
         <Products />
         <Reviews />
         <News />
         <Footer />
      </div>
   );
}

export default App;
