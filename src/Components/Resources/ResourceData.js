import "./Resource.css";

function ResourcesData(props) {
  return (
    <div className="n-card">
      <div className="n-image">
        <a href="https://drive.google.com/drive/folders/1g11t0i6glYXhWxdLRqpfZBDy5R9x13NH?usp=share_link">
          <img alt="img" src={props.image} />
        </a>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <button>
        Download
      </button>
    </div>
  );
}

export default ResourcesData;
