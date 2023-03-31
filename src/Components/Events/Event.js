import "./Event.css";
import EventData from "./EventData";
import Event1 from "../../Assets/event1.jpg";
import Event2 from "../../Assets/training.jpg";
import Event3 from "../../Assets/event3.jpg";

function Event() {
  return (
    <div className="new-com">
      <h1> Events </h1>
      <p> Here are some of the events Done in the communities ! </p>
      <div className="nc-card">
        <EventData
          image={Event1}
          heading="Gardening"
          text="Resilient communities often promote gardening as a way to 
          create green spaces and promote sustainability. 
          These green spaces can provide a variety of benefits, 
          such as improving air quality, reducing the urban heat island effect, 
          and creating opportunities for social interaction and community building.
          
          
          "
        />

        <EventData
          image={Event2}
          heading="Trainings"
          text="Resilient communities offer various trainings to build skills and 
          knowledge on sustainability, disaster preparedness, and community building. 
          These trainings may include workshops on gardening, composting, renewable energy, 
          emergency response, and conflict resolution. They can also offer leadership training, 
          cultural competency training, and other skills that support community resilience."
        />

        <EventData
          image={Event3}
          heading="Entertainment"
          text="Entertainment refers to activities that are designed to provide enjoyment 
          or amusement to individuals or groups. It can include a wide range of activities,
           such as watching movies, playing games, listening to music, attending events, 
           and participating in sports. Entertainment is an important part of human culture, 
          providing opportunities for relaxation, socialization, and personal growth."
        />
      </div>
    </div>
  );
}

export default Event;
