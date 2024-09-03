import Navbar from "./components/navbar.js";

function App() {
  return (

    <div>

      <Navbar/>

    <div className="flex items-center justify-center h-screen bg-black">
       <div className="w-[900px] h-[900px] bg-white fixed rounded-full -z-10"></div>
      <h1 className="font-extrabold text-5xl text-white"> We are <span className="text-blue-700" >Launching</span> Soon</h1>
    </div>

    </div>

    
  );
}

export default App;
