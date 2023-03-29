import "./Newcommunities.css";
import NewcommunitiesData from "./NewcommunitiesData";
import NC1 from "../../../Assets/c.jpg";
import NC2 from "../../../Assets/d.jpg";
import NC3 from "../../../Assets/e.jpg";

function Newcommunities() {
  return (
    <div className="new-com">
      <h1> </h1>
      <p> </p>
      <div className="nc-card">
        <NewcommunitiesData 
        image={NC1} 
        heading="" 
        text="" 
        />

        <NewcommunitiesData 
        image={NC2} 
        heading="" 
        text="" 
        />

        <NewcommunitiesData 
        image={NC3} 
        heading="" 
        text="" 
        />
      </div>
    </div>
  );
}

export default Newcommunities;
