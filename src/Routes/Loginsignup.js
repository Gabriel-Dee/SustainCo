import Navbar from '../Components/Navbar/Navbar';
import Hero from "../Components/Hero/Hero";
import LsImg from '../Assets/c.jpg';

function Loginsignup() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={LsImg} /* This has been imported above*/
        title="About"
        // text="Join a Green space in your local community Today !"
        // btnText = "Join !"
        btnClass = "hide"
        url = "/"
      />
    </>
  );
}

export default Loginsignup;
