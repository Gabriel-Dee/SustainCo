import Space1 from "../../Assets/aa.jpg";
import Space2 from "../../Assets/bb.jpg";
import Space3 from "../../Assets/cc.jpg";
import Space4 from "../../Assets/dd.jpg";
import "./Homecont.css";
import HomecontData from "./Homecontdata";

const home = () => {
  return (
    <div className="home">
      {/* <h1></h1> */}
      <p></p>
      <HomecontData
        className="first-content"
        heading="Green Spaces"
        text="Green spaces, such as parks, gardens, and forests, 
        play a crucial role in our physical and mental well-being. 
        They provide a sanctuary for relaxation, exercise, and socialization, 
        and help to reduce stress, anxiety, and depression. Green spaces also 
        contribute to a healthier environment by purifying the air, reducing noise pollution, 
        and providing habitat for wildlife. In urban areas, green spaces can help mitigate 
        the heat island effect and reduce energy consumption. By prioritizing the preservation 
        and creation of green spaces, we can promote a more sustainable and livable future for 
        ourselves and generations to come."
        img1={Space1}
        img2={Space2}
      />

      <HomecontData
        className="first-content-reverse"
        heading="Sustainable Communities"
        text="Community resilience refers to a community's ability to adapt and recover from disasters,
         crises, and other challenges. Resilient communities have strong social networks, 
         effective communication systems, and access to resources and support. They also prioritize 
         planning and preparedness, and work collaboratively to address potential risks and hazards. 
         Building community resilience is crucial for mitigating the impacts of climate change, natural
         disasters, and other crises. By investing in community resilience, we can create more secure 
         and sustainable communities, and better prepare ourselves to face whatever challenges may come
         our way."
        img1={Space3}
        img2={Space4}
      />
    </div>
  );
};

export default home;
