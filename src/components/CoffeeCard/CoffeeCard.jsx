import { AiFillEye } from "react-icons/ai";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  console.log(coffee);
  const {
    _id,
    coffeeName,
    coffeePhotoUrl,
    coffeePrice,
    chef,
  } = coffee;

  const handleDeleteCoffee = (_id) => {
    console.log(_id);

    // sweet alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been removed.", "success");
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <div className="card p-6   bg-[#F5F4F1] card-side shadow-md">
      <div className=" w-4/12 flex justify-start">
        <img
          className="drop-shadow-2xl object-contain"
          src={coffeePhotoUrl}
          alt={coffeeName}
        />
      </div>

      <div className="card-body w-7/12 grid content-center ">
        <h2 className="card-title flex items-start">
          <span>Name:</span>{" "}
          <span className="text-gray-500 text-start">{coffeeName}</span>
        </h2>
        <h2 className="card-title flex items-start">
          <span>Chef:</span>
          <span className="text-gray-500 text-start font-medium">{chef}</span>
        </h2>
        <p className="card-title flex items-start">
          <span>Price:</span>
          <span className="text-gray-500 text-start font-medium">
            {coffeePrice}TK
          </span>
        </p>
      </div>

      <div className=" flex w-1/12 flex-col gap-3 justify-center">
        <AiFillEye className="text-white text-5xl hover:border-2 rounded-lg hover:border-[#331A15] hover:text-[#331A15] p-2 bg-[#D2B48C]" />
        <Link to={`/update-coffee/${_id}`}>
          <MdModeEdit className="text-white text-5xl hover:border-2 hover:border-[#331A15] hover:text-[#331A15] rounded-lg p-2 bg-[#3C393B]" />
        </Link>
        <MdDelete
          onClick={() => handleDeleteCoffee(_id)}
          className="text-white text-5xl hover:border-2 hover:border-[#331A15] hover:text-[#331A15] rounded-lg p-2 bg-[#EA4744]"
        />
      </div>
    </div>
  );
};

export default CoffeeCard;
