import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllFood = () => {
  const [allFoods, setAllFoods] = useState([]);
  console.log(allFoods);
  const [count, setCount] = useState(0);
  const [food, setFood] = useState(null);

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const numberOfPages = Math.ceil(count / itemsPerPage);

  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    fetch("http://127.0.0.1:5000/foodsCount")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    fetch(`http://127.0.0.1:5000/food?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data), setAllFoods([]);
      });
  };
  useEffect(() => {
    fetch("http://127.0.0.1:5000/allFoods")
      .then((res) => res.json())
      .then((data) => setAllFoods(data));
  }, [currentPage, itemsPerPage]);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="py-4">
      <h2 className="text-center text-2xl font-semibold">OUR All FOODS</h2>
      <div className="divider w-1/4 mx-auto"></div>
      <form onSubmit={handleSearch} className="pb-6 flex justify-center">
        <input
          name="name"
          type="text"
          placeholder="Enter food name..."
          className="input border border-black input-error w-full max-w-xs rounded-r-none"
        />
        <input
          className="btn rounded-l-none btn-outline"
          type="submit"
          value="Search"
        />
      </form>
      {food && (
        <div className="flex justify-center">
          <div
            key={food?._id}
            className="card w-1/2 lg:card-side bg-base-100 shadow-xl border border-black"
          >
            <figure>
              <img className="w-80 h-full" src={food?.food_image} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{food?.food_name}</h2>
              <p>{food.food_category}</p>
              <p className="text-lg text-[#892CDC] font-semibold">
                Price: {food?.price}$
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/singleFood/${food._id}`}
                  className="btn btn-outline"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
        {allFoods.map((food) => (
          <div
            key={food._id}
            className="card w-full lg:card-side bg-base-100 shadow-xl border border-black"
          >
            <figure>
              <img className="w-80 h-full" src={food.food_image} alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{food.food_name}</h2>
              <p>{food.food_category}</p>
              <p className="text-lg text-[#892CDC] font-semibold">
                Price: {food.price}$
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/singleFood/${food._id}`}
                  className="btn btn-outline"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-10">
        <button className="btn btn-primary" onClick={handlePrevPage}>
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            className="mx-3 btn btn-neutral"
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <button className="btn btn-primary" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default AllFood;
