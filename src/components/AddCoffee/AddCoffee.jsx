import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Swal from "sweetalert2";
import { useEffect, useRef } from "react";

const AddCoffee = () => {
  const formRef = useRef(null);
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const coffeeName = form.coffeeName.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const coffeeTaste = form.coffeeTaste.value;
    const coffeePrice = form.price.value;
    const coffeeDetails = form.coffeeDetails.value;
    const coffeePhotoUrl = form.coffeePhotoUrl.value;
    const newCoffee = {
      coffeeName,
      coffeePhotoUrl,
      coffeePrice,
      coffeeTaste,
      chef,
      supplier,
      category,
      coffeeDetails,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // Reset the form fields
          form.reset();

          // alert
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url('https://i.postimg.cc/zDM8znKQ/11.png')`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundPosition: 'left',
      }}
      className="relative  h-screen bg-no-repeat bg-cover"
    >
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
        <div className="lg:p-16 lg:px-28 p-10 bg-[#F4F3F0]">
          {/* page header */}
          <div className="text-center">
            <h2 className="text-5xl text-[#374151] font-[Rancho]">
              Add New Coffee
            </h2>
            <p className="text-gray-400 my-6 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          {/* form */}
          <form ref={formRef} onSubmit={handleAddCoffee}>
            <div className="lg:flex grid gap-6">
              <div className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    name="coffeeName"
                    placeholder="Enter coffee name"
                    className="input input-bordered p-4"
                  />
                </div>
                <div className="form-control mt-3">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Photo
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    name="coffeePhotoUrl"
                    placeholder="Enter photo URL"
                    className="input input-bordered p-4"
                  />
                </div>
                <div className="form-control mt-3">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Price
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    name="price"
                    placeholder="Enter price"
                    className="input input-bordered p-4"
                  />
                </div>
                <div className="form-control mt-3">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Taste
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    name="coffeeTaste"
                    placeholder="Enter coffee taste"
                    className="input input-bordered p-4"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Chef
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    name="chef"
                    placeholder="Enter coffee chef"
                    className="input input-bordered p-4"
                  />
                </div>
                <div className="form-control mt-3">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Supplier
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    name="supplier"
                    placeholder="Enter coffee supplier"
                    className="input input-bordered p-4"
                  />
                </div>
                <div className="form-control mt-3">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Category
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    name="category"
                    placeholder="Enter coffee category"
                    className="input input-bordered p-4"
                  />
                </div>

                <div className="form-control mt-3">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Details
                    </span>
                  </label>
                  <input
                    type="text"
                    required
                    name="coffeeDetails"
                    placeholder="Enter coffee details"
                    className="input input-bordered p-4"
                  />
                </div>
              </div>
            </div>

            <div className="form-control mt-8">
              <input
                type="submit"
                value="Add Coffee"
                className="input input-bordered border-[#331A15] bg-[#D2B48C] font-[Rancho] hover:border-2 text-xl font-medium"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
