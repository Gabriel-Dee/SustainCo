import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import HomeImg from '../Assets/a.jpg';
import Homecont from '../Components/Home/Homecont';
import Newcommunities from "../Components/Home/NewCommunities/Newcommunities";
import Footer from "../Components/Footer/Footer";


function Home() {
  return (
    <>
      <Navbar />
       <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Green spaces for sustainable and Resilient communities"
        text="Join a Green space in your local community Today !"
        btnText = "Join Us"
        btnClass = "show"
        url = "/register"
      />
      <Homecont/>
      <Newcommunities/>
      <Footer/>
    </>
  )
}

export default Home;
