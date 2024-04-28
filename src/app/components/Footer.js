
import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const navigation = {

  social: [
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
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center text-center text-neutral-600 dark:bg-neutral-200 dark:text-neutral-200 lg:text-left"
      
    >
      <div className="py-5 px-10 bg-zinc-900">
        <div className="sm:flex-col  lg:flex-row md:flex-col flex lg:items-center md:items-start sm:items-center justify-center p-6 lg:justify-between flex-wrap">
          <div className="mt-3 mb-5 mr-12 lg:block">
            <span className="text-5xl uppercase font-bold text-white">
              Grovestor
            </span>
          </div>
          <div className="max-sm:flex-col sm:flex-col lg:flex-row md:flex-col flex justify-center items-start py-10 border-b border-[#a48971] border-opacity-30">
            <div className="max-sm:mb-5 sm:mb-5 lg:mb-0 md:mb-5 mx-10 flex-wrap flex justify-center items-center">
              <div className="">
                <FaPhone className="cursor-pointer  h-10 w-10 p-2.5 hover:text-amber-300" />
              </div>
              <div className="pl-3 text-left">
                <p className="text-gray-200 font-bold text-xl ">Phone</p>
                <p className="text-gray-200 font-light text-sm ">
                  (+653) 6543 865
                </p>
              </div>
            </div>
            <div className="max-sm:mb-5 sm:mb-5 lg:mb-0 md:mb-5 mx-10 flex-wrap flex justify-center items-center">
              <div className="">
                <FaEnvelope className="cursor-pointer h-10 w-10 p-2.5 hover:text-amber-300" />
              </div>
              <div className="pl-3 text-left">
                <p className="text-gray-200 font-bold text-xl ">Email</p>
                <p className="text-gray-200 font-light text-sm">
                  mail@clmbr.co
                </p>
              </div>
            </div>
            <div className="max-sm:mb-5 sm:mb-5 lg:mb-0 md:mb-5 mx-10 flex-wrap flex justify-center items-center">
              <div className="">
                <FaMapMarkerAlt className="cursor-pointer  h-10 w-10 p-2.5 hover:text-amber-300" />
              </div>
              <div className="pl-3 text-left">
                <p className="text-gray-200 font-bold text-xl ">Address</p>
                <p className="text-gray-200 font-light text-sm">
                  London Eye, UK
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-6 pb-5 pt-3 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2 md:col-span-1 sm:col-span-1">
              <div>
                <p className="pr-10 text-base text-gray-200 ">
                Empower dreams with Grovestor. Connect, create, and contribute to meaningful projects worldwide. Join us in making a positive impact through community-driven support. Together, let's bring ideas to life!
                </p>
                <div className="mt-3 flex space-x-1 lg:justify-start md:justify-start sm:justify-center max-sm:justify-center">
                  {navigation.social.map((item) => (
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
            </div>
            <div>
              <div>
                <p className="text-gray-200 font-semibold text-xl ">
                  Navigation
                </p>

                <ul className="text-gray-400 mt-6 space-y-2 text-sm">
                  <li>
                    <Link to="/HomePage" className="text-base text-gray-200 hover:text-amber-300">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/MeetTheTeam" className="text-sm text-gray-200 hover:text-amber-300">
                      Meet the Team
                    </Link>
                  </li>

                  <li>
                    <Link to="/Reviews" className="text-sm text-gray-200 hover:text-amber-300">
                      Accounts Review
                    </Link>
                  </li>
                  <li>
                    <Link to="/Login" className="text-sm text-gray-200 hover:text-amber-300">
                      Start a Project
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact" className="text-sm text-gray-200 hover:text-amber-300">
                      Contact Us
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div>
              <div>
                <p className="text-gray-200 font-semibold text-xl ">
                  Quick Shop
                </p>
                <ul>
                  <li>
                    <Link to="/Recent" className="text-sm text-gray-200 hover:text-amber-300">
                    Trending Now
                    </Link>
                  </li>

                  <li>
                    <Link to="/RecentlyFunded" className="text-sm text-gray-200 hover:text-amber-300">
                    Recent Investors
                    </Link>
                  </li>
                  <li>
                    <Link to="/About" className="text-sm text-gray-200 hover:text-amber-300">
                    About
                    </Link>
                  </li>
                
                  
                </ul>
              </div>
            </div>
            <div>
              <div>
                <p className="text-gray-200 font-semibold text-xl">
                  Work Hours
                </p>
                
                <p className="pt-5 text-xs text-gray-200 ">
                <p className="pb-3 text-base">Monday to Friday: 9 AM - 6 PM</p>
Our team is here to assist you during these hours. Feel free to reach out for any questions or support.
                </p>
                
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#a48971] border-opacity-30 p-6 text-center text-white">
          <span className="font-light">
            © Grovestor • All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}