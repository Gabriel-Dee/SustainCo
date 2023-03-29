import Navbar from '../Components/Navbar/Navbar';
import Hero from "../Components/Hero/Hero";
import AboutImg from '../Assets/b.jpg';
import Footer from "../Components/Footer/Footer";
import Aboutuss from '../Components/Aboutus/Aboutuss';

function Aboutus() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={AboutImg} /* This has been imported above*/
        title="About"
        // text="Join a Green space in your local community Today !"
        // btnText = "Join !"
        btnClass = "hide"
        url = "/"
      />
      <Aboutuss/>
      <Footer/>
    </>
  );
}

export default Aboutus;
