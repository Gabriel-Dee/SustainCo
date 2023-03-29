import Navbar from '../Components/Navbar/Navbar'
import Hero from "../Components/Hero/Hero";
import EventsImg from '../Assets/event.jpg';
import Footer from "../Components/Footer/Footer";
import Event from "../Components/Events/Event";

function Events() {
  return (
    <>
    <Navbar/>
    <Hero
        cName="hero-mid"
        heroImg={EventsImg} /* This has been imported above*/
        title="About"
        // text="Join a Green space in your local community Today !"
        // btnText = "Join !"
        btnClass = "hide"
        url = "/"
      />
      <Event/>
      <Footer/>
    </>
  );
}

export default Events;
