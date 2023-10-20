import HomeAbout from "./about/HomeAbout";
import Category from "./category/Category";
import Header from "./header/Header";
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <Header />
      <Category />
      <HomeAbout />
    </>
  );
};

export default Home;
