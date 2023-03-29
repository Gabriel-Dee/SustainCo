import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={ props.cName}>
        <img alt="herpimage" src={props.heroImg}></img>

        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p> 
            <a href={props.url} className={props.btnClass}>
                {props.btnText}
            </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
