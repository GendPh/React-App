import Header from "./Header/Header.tsx";
import Main from "./Main/Main.tsx";

export default function App() {
  return (
    <div className="h-screen flex flex-col lg:flex-row lg:items-stretch">
      <Header />
      <Main />
    </div>
  );
}
