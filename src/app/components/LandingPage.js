import Homeimg from "../assets/img/img2.jpg";
import Nav from "../components/Header/Nav"
import Footer from "./Footer";
const Landingpage = () => {
  return (
    <>
    <Nav/>
      <div
  className="bg-cover bg-center h-[85vh] flex items-center justify-start relative"
  style={{
    backgroundImage: `url(${Homeimg})`,
  }}
>
  <div className="absolute inset-0 bg-black opacity-50 "></div>
  <div className="px-14 w-2/4">
  <div className="relative z-10 text-white text-5xl font-bold">
    WELCOME TO GROVESTOR
  </div>
  <div className="relative z-10 text-white text-xl mt-4">
  Dive into the world of innovation and make a difference.
  <div>Are you ready to be part of something extraordinary </div>
  <div className="mt-6">
  <button
        type="button"
        className="rounded-sm bg-amber-500 px-6 py-2 text-xl font-semibold text-white shadow-sm hover:bg-amber-500 hover:bg-opacity-70 mr-1"
      >
        Get Started
      </button>
      
      </div>
  </div>
  
  </div>
</div>
<Footer/>
    </>
  );
};

export default Landingpage;
