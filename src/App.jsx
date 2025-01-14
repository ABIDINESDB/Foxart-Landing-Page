import Branding from "./components/Branding";
import BulletPionts from "./components/BulletPionts";
import CallToAction from "./components/CallToAction";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Branding />
      <Features />
      <CallToAction />
      <BulletPionts />
      <Pricing />
      <CallToAction minify />
      <Footer />
    </>
  );
}

export default App;
