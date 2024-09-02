import Logo from "./Assets/FULL-LOGO.png";

function App() {
  return (

    <div className="flex items-center justify-center h-screen bg-black">
      <img className="absolute top-12 w-52 left-24" src={Logo} alt="" />
       <div className="w-[900px] h-[900px] bg-white fixed rounded-full -z-10"></div>
      <h1 className="font-extrabold text-5xl text-white"> We are <span className="text-blue-700" >Launching</span> Soon</h1>
    </div>
  );
}

export default App;
