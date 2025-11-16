import { Navbar } from "./components/Navbar";
import { Slider } from "./components/Slider";
import { Features } from "./components/Features";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Slider />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
