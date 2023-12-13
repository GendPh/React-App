//import styles from "./Button.module.css";

export default function Button() {

  const style = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "1rem 2rem",
    borderRadius: "0.3rem",
    border: "none",
    cursor: "pointer",
  };

  // return <button className="btn">Click Me</button>;
  
  return <button style={style}>Click Me</button>;
}
