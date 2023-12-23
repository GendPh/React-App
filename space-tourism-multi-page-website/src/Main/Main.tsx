import Crew from "./Crew/Crew";
import Destination from "./Destination/Destination";
import Home from "./Home/Home";
import Technologies from "./Technologies/Technologies";

export default function Main() {
  const gsapOut = {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "bottom",
    duration: 0.5,
    stagger: 0.1,
  };
  const gsapIn = {
    opacity: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    duration: 0.5,
    stagger: 0.1,
    delay: 0.5,
  };

  const changeInfoTimer = 500;

  return (
    <main>
      <Home />
      <Destination entry={gsapIn} out={gsapOut} timer={changeInfoTimer} />
      <Crew entry={gsapIn} out={gsapOut} timer={changeInfoTimer} />
      <Technologies entry={gsapIn} out={gsapOut} timer={changeInfoTimer} />
    </main>
  );
}
