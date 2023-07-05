import "./App.css";
import Approach from "./Components/Home/Approach";
import Banner from "./Components/Home/Banner";
import Contact from "./Components/Home/Contact";
import Content from "./Components/Home/Content";
import Slider from "./Components/Home/Slider";
// import Testimonial from "./Components/Home/Testimonial";
// import Data from "./Components/Home/data";
import Feature from "./Components/Home/feature";

function App() {
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <Slider></Slider>
      <Content></Content>
      <Approach></Approach>
      {/* <Testimonial></Testimonial> */}
      {/* <Data></Data> */}
      <Contact></Contact>
    </div>
  );
}

export default App;
