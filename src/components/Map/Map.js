import { useGetMapQuery } from "../../redux";
import "./Map.scss";

function Map() {
  const {data:map=[]}=useGetMapQuery()

  let x = map.length;

  let qurrentLocalion = map[x-1]?.station_name;

  return (
    <iframe
      title="map"
      src={`${qurrentLocalion}`}
      className="map"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Map;
