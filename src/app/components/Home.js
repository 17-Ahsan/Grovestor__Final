
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

import postImg from "../assets/img/bg.avif";

import dp2 from "../assets/img/blank profile.webp";

import dp4 from "../assets/img/grovestor-02.jpg";

import { IoPersonCircleOutline, IoSettingsOutline } from "react-icons/io5";

import { MdOutlinePhotoLibrary, MdOutlineGroups } from "react-icons/md";
import { LuLayoutDashboard } from "react-icons/lu";

import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Nav from "./Header/Nav"
import Footer from "./Footer";
const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Display the selected file as a preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <> <Nav/>
    
      <section className=" my-5">
      
        <div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-6 lg:grid-cols-12 md:grid-cols-12">
              



              <div className="lg:col-span-3 md:col-span-3 sm:col-span-12 ">
                <div className=" bg-white rounded-xl">
                  <div className="p-5">
                    <h1 className="text-gray-600 font-bold uppercase text-md">
                      Details
                    </h1>
                    <div className="mb-1 mt-4 flex items-end justify-start">
                      <div className="mr-5">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={dp2}
                          alt="img"
                        />
                      </div>
                      <div>
                        <h1 className="text-gray-600 text-sm font-semibold">
                          Person Name
                        </h1>
                        <p className="text-gray-400 text-xs">@username</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-violet-100 relative">
                    <div className="absolute left-0 top-o bottom-0 my-auto h-full">
                      <div className="rounded-e-xl h-full w-2 bg-amber-500"></div>
                    </div>
                    <div className="px-10 py-5 border-b border-gray-100  flex items-center justify-start">
                      <div className="mr-5">
                        <LuLayoutDashboard className="text-lg text-amber-500" />
                      </div>
                      <div>
                        <h1 className="text-amber-500 font-semibold text-sm">
                          News Feed
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="px-5">
                    <div className="border-b border-gray-100 px-5 py-5 flex items-center justify-start">
                      <div className="mr-5">
                        <MdOutlinePhotoLibrary className="text-gray-400 text-lg" />
                      </div>
                      <div>
                        <h1 className="text-gray-600 font-semibold text-sm">
                          Photos
                        </h1>
                      </div>
                    </div>
                   
                    
                    <div className="border-b border-gray-100 px-5 py-5 flex items-center justify-start">
                      <div className="mr-5">
                        <IoPersonCircleOutline className="text-lg text-gray-400" />
                      </div>
                      <div>
                        <h1 className="text-gray-600 font-semibold text-sm">
                          Profile
                        </h1>
                      </div>
                    </div>
                    <div className="border-b border-gray-100 px-5 py-4 flex items-center justify-start">
                      <div className="mr-5">
                        <IoSettingsOutline className="text-lg text-gray-400" />
                      </div>
                      <div>
                        <h1 className="text-gray-600 font-semibold text-sm">
                          Settings
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              


              <div className="px-5 lg:col-span-6 md:col-span-6 sm:col-span-12">
                
                <div className="my-3 bg-white lg:col-span-3 md:col-span-3 sm:col-span-12 rounded-lg">
                  <div className="p-5">
                    <h1 className="text-gray-700 font-semibold text-md">
                      Create a new post
                    </h1>
                    <div className="py-4 flex items-start justify-start">
                      <div className="mr-5">
                        <img
                          className="h-9 w-9 rounded-full"
                          src={dp4}
                          alt="img"
                        />
                      </div>
                      <div>
                        <div className="relative rounded-md mr-5">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <IoIosSearch
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            type="text"
                            name="search"
                            id="search"
                            className="bg-gray-100 block w-full rounded-md border-transparent py-1.5 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:ring-transparent sm:text-sm sm:leading-6 focus:border-transparent"
                            placeholder="Search"
                          />
                        </div>
                        <div className="mt-5 flex items-center justify-start">
                          <button
                            type="button"
                            className="mr-5 rounded bg-violet-100 px-4 py-1 text-xs font-bold text-gray-600 shadow-sm flex items-center"
                          >
                            <MdOutlinePhotoLibrary className="mr-2 text-gray-600 text-sm" />
                            Photos
                          </button>
                          
                          
                        </div>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="mr-2 rounded bg-amber-500 px-6 py-2 text-sm font-semibold text-gray-200 shadow-sm hover:bg-amber-500 hover:bg-opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-4 bg-white lg:col-span-3 md:col-span-3 sm:col-span-12 rounded-lg">
                  <div className="px-5 py-3">
                    <div className="flex justify-between items-center">
                      <div className="mb-1 mt-4 flex items-end justify-start">
                        <div className="mr-5">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={dp2}
                            alt="img"
                          />
                        </div>
                        <div>
                          <h1 className="text-gray-600 text-sm font-semibold">
                            Person Name
                          </h1>
                          <p className="text-gray-400 text-xs">2 hours ago</p>
                        </div>
                      </div>
                      <div>
                        <HiOutlineDotsHorizontal
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <img className="mt-3 h-80 w-full" src={postImg} alt="img" />
                  </div>
                  
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
    </>
  );
};

export default Home;
