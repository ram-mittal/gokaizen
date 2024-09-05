import Navbar from "./components/navbar.js";
import Lefttext from "./components/lefttextbar.js"
import Social from "./components/socials.js"
import Circle from "./components/circle.js"

function App() {
  return (

    <div>
    <Navbar/>

    <Circle/>
    <div className="flex items-center justify-between h-screen bg-black">
    <Lefttext/>
      <div>
        <h2 className="text-white">We are <span className="text-violet-600">Launching</span> soon</h2>
        <h1 className="font-extrabold text-5xl text-white">ALMOST  THERE</h1>
        <h3 className="text-2xl text-white">You're Gonna Like Our Website</h3>
      </div>

     <Social/> 

    </div>

    </div>
  );
}

export default App;
