import './Event.css';

function EventData (props) {
    return (
        <div className='n-card'>
            <div className='n-image'>
                <img alt="img" src={props.image}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <button>
                Get a Look
            </button>
        </div>
    )
}

export default  EventData;