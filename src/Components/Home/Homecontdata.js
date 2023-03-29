// import  Space1 from '../../Assets/a.jpg';
// import  Space2 from '../../Assets/b.jpg';
// import  Space3 from '../../Assets/c.jpg';
// import  Space4 from '../../Assets/d.jpg';
import { Component } from "react";
import "./Homecont.css";

class HomecontData extends Component {
    render () {
        return(
            <div className={this.props.className}>
                <div className="content-text">
                    <h2>
                    {this.props.heading}
                    </h2>
                    <p>
                    {this.props.text}
                    </p>
                </div>

                <div className="image">
                    <img alt = 'img' src={this.props.img1}/>
                    <img alt = 'img' src={this.props.img2}/>
                </div>
            </div>
        )
    }
}

export default HomecontData;