import Header from './header/header';
import Footer from './footer/footer';
import Home from './body/Home/home';
import Products from './body/products/products';
import Social from './body/social/social';
import Contact from './body/contact/contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="products" className="min-h-screen bg-gray-100">
          <Products />
        </section>
        <section id="social" className="min-h-screen bg-gray-200">
          <Social />
        </section>
        <section id="contact" className="min-h-screen bg-gray-300">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
