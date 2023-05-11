import { Outlet } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";


const App = () => {
  return (
    <div>
      <Header/>
      <h1 className="text-6xl text-purple-600"></h1>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;