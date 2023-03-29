import Navbar from '../Components/Navbar/Navbar';
import Hero from "../Components/Hero/Hero";
import BlogImg from '../Assets/c.jpg'
import Footer from "../Components/Footer/Footer";

function Blog() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={BlogImg} /* This has been imported above*/
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

export default Blog;
