import Footer from "./Footer";
import Nav from "./Header/Nav"

const people = [
  {
    name: 'Education & Research',
    role: ' Students, educators, and researchers may seek funding for educational initiatives, academic projects, scientific research, or scholarships through crowdfunding campaigns.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Education & Research',
    role: ' Students, educators, and researchers may seek funding for educational initiatives, academic projects, scientific research, or scholarships through crowdfunding campaigns.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  }, {
    name: 'Education & Research',
    role: ' Students, educators, and researchers may seek funding for educational initiatives, academic projects, scientific research, or scholarships through crowdfunding campaigns.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Education & Research',
    role: ' Students, educators, and researchers may seek funding for educational initiatives, academic projects, scientific research, or scholarships through crowdfunding campaigns.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Education & Research',
    role: 'Businesses focused on education and training may use crowdfunding to finance the development of online courses, educational materials, or learning platforms.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Education & Research',
    role: 'Businesses focused on education and training may use crowdfunding to finance the development of online courses, educational materials, or learning platforms.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Education & Research',
    role: 'Businesses focused on education and training may use crowdfunding to finance the development of online courses, educational materials, or learning platforms.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Education & Research',
    role: 'Businesses focused on education and training may use crowdfunding to finance the development of online courses, educational materials, or learning platforms.',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Education & Research',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Education & Research',
    role: ' Businesses focused on education and training may use crowdfunding to finance the development of online courses, educational materials, or learning platforms..',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    xUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
];

const TopProject = () => {
  return (
    <>
    <Nav/>
      <div className="bg-zinc-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Top Projects</h2>
            <p className="mt-4 text-lg leading-8 text-gray-400">
            Discover Our Top 10 Projects Where Excellence Meets Discovery!
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 "
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl bg-zinc-500 ">
                <img className=" rounded-t-lg h-4/6 w-full object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                <p className="text-sm leading-6 text-gray-400">{person.role}</p>
                
              </li>
            ))}
          </ul>
        </div>
      </div>

      
    


      <Footer/>
    </>
  );
};

export default TopProject;
