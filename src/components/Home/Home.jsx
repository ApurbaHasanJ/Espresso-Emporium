import { Link, useLoaderData } from "react-router-dom";
import { FiCoffee } from "react-icons/fi";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import { useState } from "react";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log();
  return (
    <div>
      {/* home banner */}
      <div
        className="relative  h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: "url(https://i.postimg.cc/tJ7qrkP3/3.png)" }}
      >
        <div className="my-container absolute inset-0 flex items-center justify-end">
          <div className="w-6/12">
            <h1 className="text-white text-5xl font-[Rancho] mb-5">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-gray-400 mb-5">
              It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
              the nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>

      {/* specialties */}
      <div className="bg-[#ECEAE3]">
        <div className="my-container grid lg:grid-cols-4 md:grid-cols-2 gap-9  text-[#331A15]">
          {/* Coffee */}
          <div className="py-4">
            <img
              className="w-16 h-16"
              src="https://i.postimg.cc/02dDR2Jb/1.png"
              alt=""
            />
            <h2 className="text-3xl font-[Rancho] mt-3">Awesome Aroma</h2>
            <p className="mt-2 text-sm">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          {/* High Quality */}
          <div className="py-4">
            <img
              className="w-16 h-16"
              src="https://i.postimg.cc/L8xP5CDS/2.png"
              alt=""
            />
            <h2 className="text-3xl font-[Rancho] mt-3">High Quality</h2>
            <p className="mt-2 text-sm">
              We served the coffee to you maintaining the best quality
            </p>
          </div>

          {/* Pure Grades */}
          <div className="py-4">
            <img
              className="w-16 h-16"
              src="https://i.postimg.cc/8PVM0rc2/3.png"
              alt=""
            />
            <h2 className="text-3xl font-[Rancho] mt-3">Pure Grades</h2>
            <p className="mt-2 text-sm">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          {/* Proper Roasting */}
          <div className="py-4">
            <img
              className="w-16 h-16"
              src="https://i.postimg.cc/T3dmRMrQ/4.png"
              alt=""
            />
            <h2 className="text-3xl font-[Rancho] mt-3">Proper Roasting</h2>
            <p className="mt-2 text-sm">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>

      {/* Coffees */}
      <div
        style={{ backgroundImage: "url(https://i.postimg.cc/8kwftn86/1.png)" }}
        className="text-center mt-28 text-[#1B1A1A]"
      >
        {/* Section header */}
        <div>
          <p className="mb-2">--- Sip & Savor ---</p>
          <h2 className="font-[Rancho] text-5xl drop-shadow-2xl ">
            Our Popular Products
          </h2>
          <Link to="/add-coffee">
            <button
              className="inline-flex mt-5 items-center lg:text-xl  text-lg lg:px-6 md:px-4 px-3 lg:py-3 py-2  mb-3 font-medium border-2 border-[#331A15] rounded-lg capitalize bg-[#E3B577]  hover:border-white text-[#331A15] hover:text-white font-[Rancho] transition shadow-md   duration-700
         gap-2 hover:drop-shadow-2xl"
            >
              <span className="drop-shadow-2xl shadow-2xl">Add Coffee</span>
              <FiCoffee />
            </button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 my-container">
          {/* Coffee */}
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />
          ))}
        </div>
      </div>

      {/* Follow Us Now */}

      <div className="my-container text-center mt-24">
        {/* section header */}
        <div className="text-[#331A15]">
          <p>Follow Us Now</p>
          <h2 className="text-5xl font-[Rancho] mt-2">Follow on Instagram</h2>
        </div>
        <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 mt-11">
          <img className="rounded-md " src="https://i.postimg.cc/65GnHfBL/Rectangle-9.png" alt="" />
          <img className="rounded-md " src="https://i.postimg.cc/XYfFWNGr/Rectangle-10.png" alt="" />
          <img className="rounded-md " src="https://i.postimg.cc/8CTvz8Mt/Rectangle-11.png" alt="" />
          <img className="rounded-md " src="https://i.postimg.cc/cHH8fQD3/Rectangle-12.png" alt="" />
          <img className="rounded-md " src="https://i.postimg.cc/k4pRsBZp/Rectangle-13.png" alt="" />
          <img className="rounded-md " src="https://i.postimg.cc/gjLXTGbk/Rectangle-14.png" alt="" />
          <img className="rounded-md " src="https://i.postimg.cc/7Z87jJ6v/Rectangle-15.png" alt="" />
          <img className="rounded-md " src="https://i.postimg.cc/zfpgLdk5/Rectangle-16.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
