import { useGetMapQuery } from '../../redux';
import './Map.scss';

function Map() {
  return (
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1462.5798257186636!2d74.587686!3d42.84836200000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d8319b4ead%3A0x35283f9b848f49a!2sselim.kg!5e0!3m2!1sen!2sus!4v1676493509400!5m2!1sen!2sus"
      className="map"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Map;
