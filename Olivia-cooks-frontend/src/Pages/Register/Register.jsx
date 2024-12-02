import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, image, email, password };
    console.log(user);
    createUser(email, password)
      .then((res) => {
        console.log(res.data);
        toast.success("Successfully Sign Up");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 h-[580px] rounded-xl mr-12">
          <img
            className="w-full h-full rounded-xl border border-black"
            src={`https://cdn.dribbble.com/users/424937/screenshots/6717017/pasta_rice_cereals.png?resize=800x600&vertical=center`}
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#93B1A6] border border-black">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleCreateUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-neutral"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <p className="my-4">
              Already have an account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login Now
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
