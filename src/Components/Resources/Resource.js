import "./Resource.css";
import ResourcesData from "./ResourceData";
import Resource1 from "../../Assets/community.jpg";
import Resource2 from "../../Assets/communityy.jpg";
import Resource3 from "../../Assets/communityyy.jpg";

function Resources() {
  return (
    <div className="new-com">
      <h1> Books And Videos</h1>
      <p> Here are some resources used in various communities! </p>
      <div className="nc-card">
        <ResourcesData 
        image={Resource1} 
        heading="Community Leadership" 
        text="This book provides a comprehensive guide to developing l
        eadership skills within a community setting. It covers topics such as effective communication, 
        conflict resolution, and community building strategies." 
        />

        <ResourcesData 
        image={Resource2} 
        heading="Green Spaces by 2030" 
        text="This book explores the importance of creating and maintaining green spaces 
        in urban environments by the year 2030. It provides a roadmap for achieving this goal, 
        including strategies for community engagement, urban planning, and sustainability." 
        />

        <ResourcesData 
        image={Resource3} 
        heading="The Art of Resilience in Communities" 
        text="This book examines the ways in which communities can build resilience in the face of 
        challenges such as natural disasters, economic downturns, and social unrest. It provides 
        practical tips and strategies for fostering resilience, 
        including building social connections, developing coping mechanisms, and promoting self-care." 
        />
      </div>
    </div>
  );
}

export default Resources;
