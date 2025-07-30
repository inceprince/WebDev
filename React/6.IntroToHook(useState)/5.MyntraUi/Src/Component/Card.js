function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt={props.cloth} />
      <div className="card-text">
        <h3>{props.cloth}</h3>
        <p className="offer-text">{props.offer} OFF</p>
        <p className="offer-text">₹{props.price}</p>
        <button className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
}

export default Card;