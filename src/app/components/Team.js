import Teamimg from "../assets/img/ahsanpic1.jpeg";
import Nav from "./Header/Nav"
import Footer from "./Footer";

const Team = () => {
  return (
    <>
    <Nav/>
    <div className="px-10 py-10">
     <div className="mt-8">
          <h2 className="text-2xl text-center font-bold mb-4">Meet the Team</h2>

          <p className="text-lg leading-relaxed mb-4">
            Behind GROVESTOR is a passionate team of individuals
            dedicated to supporting the next wave of innovators. From our
            experienced leadership to our talented developers and creative
            minds, we're united by a common goal to make dreams come true.
          </p>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="col-span-4">
            <div className="w-full max-w-sm bg-zinc-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={Teamimg}
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
            <div className="w-full max-w-sm bg-zinc-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={Teamimg}
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
            <div className="w-full max-w-sm bg-zinc-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={Teamimg}
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

export default Team;
