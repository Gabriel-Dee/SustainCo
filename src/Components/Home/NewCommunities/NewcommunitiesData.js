import './Newcommunities.css';

function NewCommunitiesData (props) {
    return (
        <div className='n-card'>
            <div className='n-image'>
                <img alt="img" src={props.image}/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default  NewCommunitiesData;