import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={ props.cName}>
        <img alt="herpimage" src={props.heroImg}></img>

        <div className="hero-text">
            <p className="heading">{props.title}</p>
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
