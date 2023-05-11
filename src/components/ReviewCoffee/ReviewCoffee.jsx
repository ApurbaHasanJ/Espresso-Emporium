import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const ReviewCoffee = () => {
  const coffee = useLoaderData();
  const {
    coffeeName,
    coffeePhotoUrl,
    coffeeTaste,
    category,
    chef,
    coffeeDetails,
    supplier,
  } = coffee;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="my-container">
      <button className="my-10  hover:bg-[#D2B48C] py-4 px-2 rounded-lg text-3xl font-medium">
        <Link
          className="text-[#374151] flex items-center gap-5  font-[Rancho]"
          to="/"
        >
          <BsArrowLeft />
          Back to Home
        </Link>
      </button>
      <div className=" py-16 px-40 bg-[#F4F3F0]">
        <div className=" lg:flex gap-28 items-center justify-center">
          <div className="w-2/6 drop-shadow-2xl">
            <img src={coffeePhotoUrl} className="mx-auto h-full w-full" />
          </div>
          <div className="w-4/6">
            <h1 className="text-5xl mb-7 font-bold text-[#331A15] font-[Rancho]">
              Niceties
            </h1>
            <div className="py-6 text-lg">
              <p className="mb-1">
                <span className="text-black font-semibold">Name: </span>
                <span className="text-slate-500">{coffeeName}</span>
              </p>
              <p className="mb-1">
                <span className="text-black font-semibold">Chef: </span>
                <span className="text-slate-500">{chef}</span>
              </p>
              <p className="mb-1">
                <span className="text-black font-semibold">Supplier: </span>
                <span className="text-slate-500">{supplier}</span>
              </p>
              <p className="mb-1">
                <span className="text-black font-semibold">Taste: </span>
                <span className="text-slate-500">{coffeeTaste}</span>
              </p>
              <p className="mb-1">
                <span className="text-black font-semibold">Category: </span>
                <span className="text-slate-500">{category}</span>
              </p>
              <p className="mb-1">
                <span className="text-black font-semibold">Details: </span>
                <span className="text-slate-500">{coffeeDetails}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCoffee;
