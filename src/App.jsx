import Advantages from "./components/Advantages/Advantages";
import Demo from "./components/Demo/Demo";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Learn from "./components/Learn/Learn";
import Operations from "./components/Operations/Operations";
import Partners from "./components/Partners/Partners";
import Reviews from "./components/Reviews/Reviews";
import img from "/Video/video.png";
import data from "./DATA/reviews.json";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <Learn />
      <Operations />
      <section>
        <img src={img} className="w-full" alt="" />
      </section>
      <Advantages />
      <Demo />
      <Reviews data={data} />
    </>
  );
}

export default App;
