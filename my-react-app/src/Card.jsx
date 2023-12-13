import ReactIcon from "./assets/react.svg";
import profilePic from "./assets/react.svg";

export default function Card() {
  return (
    <>
      <div className="card">
        <img src={profilePic} alt="" className="card-img" />
        <h2 className="title">Gabriel Ferreira</h2>
        <p className="desc">Im studying React</p>
      </div>
    </>
  );
}
