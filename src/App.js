import "./App.css";
import FifthSection from "./components/FifthSection";
import FooterSection from "./components/FooterSection";
import ForthSection from "./components/ForthSection";
import Hearder from "./components/Header";
import HeroSection from "./components/HeroSection";
import SecondSection from "./components/SecondSection";
import SevenSection from "./components/SevenSection";
import SixSection from "./components/SixSection";
import ThirdSection from "./components/ThirdSection";

function App() {
  return (
    <div className="App relative">
      <Hearder />
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixSection />
      <SevenSection />
      <FooterSection />
    </div>
  );
}

export default App;
