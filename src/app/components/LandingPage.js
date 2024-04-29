import Homeimg from "../assets/img/img2.jpg";
import Cardimg from "../assets/img/pic3.png"
import Cardimg1 from "../assets/img/pic4up.jpg"
import Cardimg2 from "../assets/img/pic2.jpg"
import Cardimg3 from "../assets/img/Dream.jpg"
import teamimg from "../assets/img/ahsan2.jpg"
import teamimg1 from "../assets/img/haseeb1.jpeg"
import teamimg2 from "../assets/img/Hanzala.jpeg"
import Nav from "../components/Header/Nav"
import Footer from "./Footer";
import { Link } from 'react-router-dom'

import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
    `,
    date: 'July 16, 2021',
    datetime: '2021-07-16',
    author: 'Emily Selman',
    avatarSrc:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Gibbons',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Gibbons',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Gibbons',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  {
    id: 2,
    rating: 5,
    content: `
      <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
    `,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    author: 'Hector Gibbons',
    avatarSrc:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
  },
  
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
  <div className="relative z-10 text-white text-5xl font-bold animate-pulse">
    WELCOME TO GROVESTOR
  </div>
  <div className="relative z-10 text-white text-xl mt-4">
  Dive into the world of innovation and make a difference.
  <div>Are you ready to be part of something extraordinary </div>
  <div className="mt-6">
  <Link to="/Login">
      <button
        type="button"
        className="rounded-sm bg-amber-500 px-6 py-2 text-xl font-semibold text-white shadow-sm hover:bg-amber-500 hover:bg-opacity-70 mr-1"
      >
        Get Started
      </button>
      </Link>
      </div>
  </div>
  
  </div>
</div>


<div className="px-10 py-10">
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
                <img src={Cardimg3} className="h-52 hover:scale-125 duration-1000" />
              </div>
              <h1 className="py-4 text-xl">Empowering Dreams</h1>
            </div>
          </div>
        </div>
        <div className="p-8 m-4">
        <div className="mt-8">
          <h2 className="text-2xl text-center font-bold mb-4">Meet The Team</h2>

          <p className="text-lg leading-relaxed mx-40 mb-6">
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
                  src={teamimg}
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
                  src={teamimg1}
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
                  src={teamimg2}
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




<div className="bg-white mx-40 my-10 pb-8">
      <div>
      <h2 className="text-3xl text-center font-bold my-14"> Reviews</h2>

        <div className="-my-10">
          {reviews.map((review, reviewIdx) => (
            <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
              <div className="flex-none py-10">
                <img src={review.avatarSrc} alt="" className="h-10 w-10 rounded-full bg-gray-100" />
              </div>
              <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'flex-1 py-10')}>
                <h3 className="font-medium text-gray-900">{review.author}</h3>
                <p>
                  <time dateTime={review.datetime}>{review.date}</time>
                </p>

                <div className="mt-4 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{review.rating} out of 5 stars</p>

                <div
                  className="prose prose-sm mt-4 max-w-none text-gray-500"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

<Footer/>
    </>
  );
};

export default Landingpage;
