// import Header from "./Header.jsx";
// import Food from "./Food.jsx";
// import Footer from "./Footer.jsx";
//import Card from "./Card.jsx";
//import Button from "./Button.jsx";
//import Students from "./Students.jsx";
import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    <>
      {/* <Header />
      <Food />
      <Footer /> */}
      {/* <Card />
      <Card />
      <Card /> */}
      {/* <Button /> */}
      {/* <Students name="Gabriel" age={25} isStudent={true} />
      <Students name="Ferreira" age={24} isStudent={false} />
      <Students />
      <Students name="Gabriel2" />
      <Students age={25} />
      <Students isStudent={true} /> */}
      <UserGreeting isLoggedIn={false} username={"Gabriel"} />
      <UserGreeting isLoggedIn={true} username={"Ferreira"} />
      <UserGreeting />
      <UserGreeting isLoggedIn={true} />
    </>
  );
}

export default App;
