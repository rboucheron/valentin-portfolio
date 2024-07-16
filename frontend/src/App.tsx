import React from "react";
import images from "./assets/images/images";
import Button from "./components/Button";
import PhoneCard from "./components/PhoneCard";
const App: React.FC = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="fixed inset-0 h-screen bg-center bg-[url('https://valentinlamour.website/assets/images/bg.jpg')] bg-zoom opacity-5 z-0">
      
      </div>
      <div className="relative z-10 mt-0 pt-32">
        <div className="w-1/2 m-auto grid justify-items-center ">
          <img src={images.nameTitle} alt="Title" />

          <h2 className="text-4xl mt-4 text-primary font-silverGarden italic">
            UX/UI Designer Junior
          </h2>
          <Button>Contactez moi</Button>
        </div>
        <PhoneCard /> 
      </div>

  
    </div>
  );
};

export default App;