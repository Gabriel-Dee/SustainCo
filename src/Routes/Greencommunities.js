import Navbar from '../Components/Navbar/Navbar';
import Hero from "../Components/Hero/Hero";
import GcImg from '../Assets/e.jpg';
import Footer from "../Components/Footer/Footer";
import Newcommunities from '../Components/Home/NewCommunities/Newcommunities';

function Greencommunities() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={GcImg} /* This has been imported above*/
        title="About"
        // text="Join a Green space in your local community Today !"
        // btnText = "Join !"
        btnClass = "hide"
        url = "/"
      />
      <Newcommunities/>
      <Footer/>
    </>
  );
}

export default Greencommunities;
