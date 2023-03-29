import  Space1 from '../../Assets/a.jpg';
import  Space2 from '../../Assets/b.jpg';
import  Space3 from '../../Assets/c.jpg';
import  Space4 from '../../Assets/d.jpg';
import './Homecont.css';
import HomecontData from './Homecontdata';

const home = () => {
    return(
        <div className="home">
            <h1>

            </h1>
            <p>
                
            </p>
        <HomecontData
        className = "first-content"
        heading = ""
        text = ""
        img1 = {Space1}
        img2 = {Space2}
        />

        <HomecontData
        className = "first-content-reverse"
        heading = ""
        text = ""
        img3 = {Space3}
        img4 = {Space4}
        />
        </div>
    )
};

export default home;