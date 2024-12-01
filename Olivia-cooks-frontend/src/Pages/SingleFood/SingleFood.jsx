import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineFoodBank } from "react-icons/md";

const SingleFood = () => {
    const foodDetail = useLoaderData();
    const { food_name, food_category, price, made_by, food_image, food_origin, description } = foodDetail;
    return (
        <div className="py-6 flex justify-center">
            <div className="card w-3/5 bg-[#93B1A6] shadow-2xl border border-black">
                <figure><img className="w-full h-[60vh]" src={food_image} /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl mb-4 text-[#892CDC]">{food_name}</h2>
                    <div className="space-y-1">
                        <p><span className="text-lg font-semibold">Food Category :</span> <span className="text-base font-medium text-[#892CDC]">{food_category}</span></p>
                        <p><span className="text-lg font-semibold">Price :</span> <span className="text-base font-medium text-[#892CDC]">{price}$</span></p>
                        <p><span className="text-lg font-semibold">Made By :</span> <span className="text-base font-medium text-[#892CDC]">{made_by}</span></p>
                        <p><span className="text-lg font-semibold">Food Origin :</span> <span className="text-base font-medium text-[#892CDC]">{food_origin}</span></p>
                        <p><span className="text-lg font-semibold">Description :</span> <span className="">{description}</span></p>
                    </div>
                    <div className="card-actions justify-end pt-3">
                        <Link to="/OrderFood" className="btn btn-outline bg-white text-[#892CDC]">Order Now<div className="text-3xl font-semibold"><MdOutlineFoodBank /></div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;