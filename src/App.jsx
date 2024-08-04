import "./css/style.css";


import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="dark-mode ">
        <div className="flex h-screen overflow-auto">
          <SideNav/>

          <div className="w-[95%] ml-[5%]">
          <Navbar/>
          <div className="p-3">
          <h3 className="text-white text-lg font-bold mb-4">Dashboard</h3>
          <Main/>
          </div>
          

          </div>

        </div>
      </div>
    </>
  );
}

export default App;
