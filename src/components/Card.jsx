import equilibrium from "/images/image-equilibrium.jpg";
import ethereum from "/images/icon-ethereum.svg";
import clock from "/images/icon-clock.svg";
import avatar from "/images/image-avatar.png";
import "./card.css";
export default function Card() {
  return (
    <div className="container">
      <img src={equilibrium} alt="equilibrium image" className="equilibium" />
      <h1 className="title">Equilibrium #3439</h1>
      <p className="text">
        {" "}
        our equilibrium collection promotes balance and calm
      </p>
      <div className="info-container">
        <div className="eth">
          <img src={ethereum} alt="" />
          <span>0.041 ETH</span>
        </div>
        <div className="clock">
          <img src={clock} alt="" />
          <span>3 days left</span>
        </div>
      </div>
      <div className="avatar">
        <img src={avatar} alt="" />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}
