import "./Newcommunities.css";
import NewcommunitiesData from "./NewcommunitiesData";
import NC1 from "../../../Assets/community.jpg";
import NC2 from "../../../Assets/communityy.jpg";
import NC3 from "../../../Assets/communityyy.jpg";

function Newcommunities() {
  return (
    <div className="new-com">
      <h1>New Communities</h1>
      <p>Discover our vibrant new communities! </p>
      <div className="nc-card">
        <NewcommunitiesData 
        image={NC1} 
        heading="The Ecogenius" 
        text="" 
        />

        <NewcommunitiesData 
        image={NC2} 
        heading="Green Park" 
        text="" 
        />

        <NewcommunitiesData 
        image={NC3} 
        heading="The Vibrants" 
        text="" 
        />
      </div>
    </div>
  );
}

export default Newcommunities;
