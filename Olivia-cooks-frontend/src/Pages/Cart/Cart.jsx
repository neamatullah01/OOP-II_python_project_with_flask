import { useLoaderData } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";

const Cart = () => {
  const initialItems = useLoaderData();
  const [allItem, setAllItem] = useState(initialItems);

  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message === "Cart item deleted successfully") {
              setAllItem(allItem.filter((item) => item._id !== _id));
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
                confirmButtonColor: "#3085d6",
              });
            } else {
              Swal.fire("Error!", "Failed to delete the product.", "error");
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire(
              "Error!",
              "An error occurred while deleting the product.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="py-3 grid grid-cols-1 md:grid-cols-2 gap-5">
        {allItem.map((item) => (
          <div
            key={item._id}
            className="card lg:card-side bg-[#ACA6A680] shadow-zinc-900"
          >
            <figure className="w-1/2 h-48">
              <img
                className="w-full h-full"
                src={item.food_image}
                alt="Album"
              />
            </figure>
            <div className="p-4 space-y-2">
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-circle btn-outline btn-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h2 className="card-title text-[#892CDC]">{item.food_name}</h2>
              <h3 className="text-lg font-medium">{item.food_category}</h3>
              <h2 className="text-lg font-medium text-[#892CDC]">
                Price: {item.price}$
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-block border border-black bg-white text-[#892CDC] text-2xl my-5">
        Confirm Order <MdPayment />
      </button>
    </div>
  );
};

export default Cart;
