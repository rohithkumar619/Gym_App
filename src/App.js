import "./App.css";
import Hero from "../src/components/Hero";
import Programs from "../src/components/programs/Programs";
import Reasons from "../src/components/Reasons/Reasons";
import Plans from "../src/components/plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Join from "../src/components/Join/Join";
import Footer from "../src/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
