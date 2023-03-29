import Navbar from '../Components/Navbar/Navbar';
import Hero from "../Components/Hero/Hero";
import ResrcImg from '../Assets/c.jpg';
import Footer from "../Components/Footer/Footer";
import Resource from "../Components/Resources/Resource";

function Resources() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={ResrcImg} /* This has been imported above*/
        title="About"
        btnClass = "hide"
        url = "/"
      />
      <Resource/>
      <Footer/>
    </>
  );
}

export default Resources;
