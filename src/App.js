import { Navbar } from "./Components/Navbar";
import "./App.css";
import { CoverPage } from "./Components/CoverPage";
import { Dashboard } from "./Components/Dashboard";
import { Slider } from "./Components/Slider";
import { CardsContainer } from "./Components/CardsContainer";
import { WhoWeAre } from "./Components/Who_We_Are";
import { OurService } from "./Components/OurService";



export const App = () => {
  return (
    <>
      <Navbar />
      <CoverPage />
      <Dashboard/>
      <Slider/>
      <CardsContainer/>
      <WhoWeAre/>
      <OurService/>
      <CardsContainer/>
    </>
  );
};
