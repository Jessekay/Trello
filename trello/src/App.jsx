import Header from "./components/Header.jsx";
import SubHeader from "./components/SubHeader.jsx";
import bg from "./assets/bg.png";

export default function App() {
  return (
    <div
      className="flex min-h-screen flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Header />
      <SubHeader />
    </div>
  );
}