import { Link, useLoaderData } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import toast from "react-hot-toast";

const SingleFood = () => {
  const foodDetail = useLoaderData();
  const {
    food_name,
    food_category,
    price,
    made_by,
    food_image,
    food_origin,
    description,
  } = foodDetail;

  const handleCartAdd = () => {
    fetch("http://127.0.0.1:5000/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully added to cart!");
      });
  };

  return (
    <div className="py-6 flex justify-center">
      <div className="card w-3/5 bg-[#93B1A6] shadow-2xl border border-black">
        <figure>
          <img className="w-full h-[60vh]" src={food_image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl mb-4 text-[#892CDC]">
            {food_name}
          </h2>
          <div className="space-y-1">
            <p>
              <span className="text-lg font-semibold">Food Category :</span>{" "}
              <span className="text-base font-medium text-[#892CDC]">
                {food_category}
              </span>
            </p>
            <p>
              <span className="text-lg font-semibold">Price :</span>{" "}
              <span className="text-base font-medium text-[#892CDC]">
                {price}$
              </span>
            </p>
            <p>
              <span className="text-lg font-semibold">Made By :</span>{" "}
              <span className="text-base font-medium text-[#892CDC]">
                {made_by}
              </span>
            </p>
            <p>
              <span className="text-lg font-semibold">Food Origin :</span>{" "}
              <span className="text-base font-medium text-[#892CDC]">
                {food_origin}
              </span>
            </p>
            <p>
              <span className="text-lg font-semibold">Description :</span>{" "}
              <span className="">{description}</span>
            </p>
          </div>
          <div className="card-actions justify-end pt-3">
            <Link
              onClick={handleCartAdd}
              className="btn btn-outline bg-white text-[#892CDC]"
            >
              Add to Cart
              <div className="text-3xl font-semibold">
                <FaCartArrowDown />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
