import Aboutusimg from "../../assets/img/img1.jpg";
import Nav from "../Header/Nav";
import Footer from "../Footer";
import Homeimg from "../../assets/img/img8.jpg"
const About = () => {
  return (
    <>
      <Nav />
      <div className="  bg-cover bg-center h-[50vh] flex items-center justify-center relative inset-0 bg-black opacity-80"
      style={{
        backgroundImage: `url(${Homeimg})`,
      }}>
        <div className=" text-black text-center">
          <div className="uppercase  text-5xl font-bold">
            
           About Us
          </div>
           
        </div>
      </div>

      <div className="container  mx-auto my-10 px-4">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-6 md:mb-0">
            <img
              src={Aboutusimg}
              alt="About Us"
              className="w-full h-auto rounded-md"
            />
          </div>

          <div className="mt-8">
            <p className="text-lg leading-relaxed mb-4">
              Welcome to GROVESTOR, where dreams find their wings and innovation
              knows no bounds. Our journey began with a simple yet powerful
              idea: to provide a platform that empowers visionaries,
              entrepreneurs, and creatives to turn their dreams into reality.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              At GROVESTOR, we believe in the transformative power of ideas.
              Whether it's a groundbreaking startup, a revolutionary product, or
              a passion project, we're here to support and elevate creators from
              all walks of life.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Our mission is to foster a community where innovation thrives and
              where backers become a vital part of the journey. Every project
              supported on our platform is a testament to the collective power
              of individuals coming together to bring about positive change.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
