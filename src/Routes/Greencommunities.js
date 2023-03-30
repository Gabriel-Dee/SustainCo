import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import GcImg from "../Assets/community.jpg";
import Footer from "../Components/Footer/Footer";
import Newcommunities from "../Components/Home/NewCommunities/Newcommunities";
import Greencommunity from "../Components/GreenCommunities/Greencommunity";


function Greencommunities() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={GcImg} /* This has been imported above*/
        title="About"
        btnClass="hide"
        url="/"
      />
      <Newcommunities />
      <Greencommunity/>
      <Footer />
    </>
  );
}

export default Greencommunities;
