import Aboutusimg from "../../assets/img/img1.jpg";
import Cardimg from "../../assets/img/pic3.png";
import Cardimg1 from "../../assets/img/pic4up.jpg"
import Cardimg2 from "../../assets/img/pic2.jpg"
import Nav from "../Header/Nav";
import Footer from "../Footer";
import Homeimg from "../../assets/img/img8.jpg"
const About = () => {
  return (
    <>
      <Nav />
      <div className="  bg-cover bg-center h-[85vh] flex items-center justify-start relative inset-0 bg-black opacity-80"
      style={{
        backgroundImage: `url(${Homeimg})`,
      }}>
        <div className=" text-black px-14 w-2/5  ">
          <div className="  text-5xl font-bold">
            We believe in the power of collective support to bring ideas and
            projects to life.
          </div>
          <div className="  text-2xl mt-4">
            Our platform unites creators with backers who share the goal of
            bringing innovative projects to life.
          </div>
        </div>
      </div>

      <div className="container  mx-auto my-10 px-4">
        <h1 className=" text-center text-3xl font-bold mb-6">About Us</h1>

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

        <div>
          <div className="text-3xl font-bold text-center py-5">Our Values</div>
          <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-5 px-[20px]">
            <div className="text-center shadow-lg ">
              <div className="overflow-hidden rounded">
                <img src={Cardimg} className="hover:scale-125 duration-1000" />
              </div>
              <h1 className="py-4 text-xl">Innovation and Creativity</h1>
            </div>
            <div className="text-center shadow-lg">
              <div className="overflow-hidden rounded">
                <img src={Cardimg1} className="hover:scale-125 duration-1000" />
              </div>
              <h1 className="py-4 text-xl">Transparency and Trust</h1>
            </div>
            <div className="text-center shadow-lg">
              <div className="overflow-hidden rounded">
                <img src={Cardimg2} className="hover:scale-125 duration-1000" />
              </div>
              <h1 className="py-4 text-xl">Community Collaboration</h1>
            </div>
            <div className="text-center shadow-lg">
              <div className="overflow-hidden rounded">
                <img src={Cardimg} className="hover:scale-125 duration-1000" />
              </div>
              <h1 className="py-4 text-xl">Empowering Dreams</h1>
            </div>
          </div>
        </div>

        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>

          <p className="text-lg leading-relaxed mb-4">
            Behind GROVESTOR is a passionate team of individuals
            dedicated to supporting the next wave of innovators. From our
            experienced leadership to our talented developers and creative
            minds, we're united by a common goal to make dreams come true.
          </p>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="col-span-4">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={Cardimg}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Ahsan Asif
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={Cardimg}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                 Haseeb Ali
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={Cardimg}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Hanzala Ahmad
                </h5>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Visual Designer
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default About;
