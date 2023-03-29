import Navbar from '../Components/Navbar/Navbar';
import Hero from "../Components/Hero/Hero";
import ResrcImg from '../Assets/g.jpg';
import Footer from "../Components/Footer/Footer";

function Resources() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={ResrcImg} /* This has been imported above*/
        title="About"
        // text="Join a Green space in your local community Today !"
        // btnText = "Join !"
        btnClass = "hide"
        url = "/"
      />
      <Footer/>
    </>
  );
}

export default Resources;
