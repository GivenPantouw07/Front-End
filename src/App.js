import Header from "./components/Header";
import Hero from "./components/Hero";
import Client from "./components/Client";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Client />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;