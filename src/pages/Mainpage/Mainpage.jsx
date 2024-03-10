import { BrowserRouter as Router } from "react-router-dom";
import Carousel from "./Layout/Home/ContentPage";
import BottomNavigation from "./components/bottomNavigation/BottomNavigation";
import Navbar from "./components/navbar/Navbar";
import "./mainpage.css";

const Mainpage = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Carousel />
        <BottomNavigation />
      </div>
    </Router>
  );
};

export default Mainpage;
