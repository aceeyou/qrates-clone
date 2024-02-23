import "./App.css";
import Navigation from "./components/Navigation";
import ForFans from "./pages/ForFans";
import ForArtists from "./pages/ForArtists";
import Hero from "./pages/Hero";
import ArtistToolkit from "./pages/ArtistToolkit";
import TryNow from "./pages/TryNow";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  return (
    <div
      className={`bg-[#f7f7f7] ${
        mobileMenuToggle ? "h-svh" : "h-full"
      } overflow-hidden`}
    >
      <header className="bg-[#fff] px-[30px] py-[22px]">
        <Navigation
          mobileMenuToggle={mobileMenuToggle}
          setMobileMenuToggle={setMobileMenuToggle}
        />
      </header>
      <main className="bg-white">
        <Hero />
        <ForFans />
        <ForArtists />
        <ArtistToolkit />
        <TryNow />
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
