import './Card.scss';

function Card({ icon, text }) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={icon} alt="" />
      </div>
      <p className="card__text">{text}</p>
    </div>
  );
}

export default Card;
