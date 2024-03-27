import Teamimg from "../assets/img/dp2.jpeg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Team = () => {
  const social = [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // Add other social media objects here
  ];

  return (
    <>
      <div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>

          <p className="text-lg leading-relaxed mb-4">
            Behind GROVESTOR is a passionate team of individuals dedicated to
            supporting the next wave of innovators. From our experienced
            leadership to our talented developers and creative minds, we're
            united by a common goal to make dreams come true.
          </p>
          <div className="mt-3 flex space-x-1 lg:justify-start md:justify-start sm:justify-center max-sm:justify-center">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="bg-semiBrown p-2 text-brown hover:bg-opacity-80"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6 hover:text-amber-300" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="col-span-4">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-32 h-32 mb-3 rounded-full shadow-lg object-cover hover:scale-125 duration-1000"
                  src={Teamimg}
                  alt="Ahsan Asif image"
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
                  className="w-32 h-32 mb-3 rounded-full shadow-lg object-cover hover:scale-125 duration-1000  "
                  src={Teamimg}
                  alt="Hanzala Ahmad image"
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
          <div className="col-span-4">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4"></div>
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-32 h-32 mb-3 rounded-full shadow-lg object-cover hover:scale-125 duration-1000 "
                  src={Teamimg}
                  alt="Haseeb Ali image"
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
        </div>
      </div>
    </>
  );
};

export default Team;
