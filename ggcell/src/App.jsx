import Header from "./header/header"
import Footer from "./footer/footer";
import Home from "./body/Home/home";
import Products from "./body/products/products";
import Social from "./body/social/social";
import Contact from "./body/contact/contact";


function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Products/>
      <Social/>
      <Contact/>
      <Footer/> 
    </>
  );
}

export default App;
