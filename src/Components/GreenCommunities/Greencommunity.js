import React from "react";

function Greencommunity() {
  return (
    <div className="green-com">
      <h1>Locate Your Community</h1>
      <p> </p>
      <iframe
        style={{width:"100%", height:"600px"}}
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Google%20Headquarters&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
}

export default Greencommunity;
