import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Greencommunity.css";

export default function Greencommunity() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey : process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    //   libraries: ["places"],
    });
  
    if (!isLoaded) return <div>Loading .....</div>;
    return <Map />;
  }

  function Map() {
    const centre = useMemo(() => ({ lat: 44, lng: -80 }), []);
    return (
        <GoogleMap
            zoom={10}
            center={{lat: 44, lng: 80}}
            mapContainerClassName="map-container"
        >
            <Marker position={centre} />
        </GoogleMap>
    )
  }
