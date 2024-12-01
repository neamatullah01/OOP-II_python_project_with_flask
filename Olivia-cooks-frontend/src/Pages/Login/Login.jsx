import { useContext } from "react";
import { Link } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext);
    

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(() => {
                toast.success('Successfully Login');
            })
            .catch(error => {
                console.log(error);
                toast.error(error.message);
            })

    }
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(()=>{
            toast.success('Successfully Login');
        })
        .catch(error =>{
            toast.error(error.message);
        })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 h-[500px] mr-12 ">
                    <img className="w-full h-full rounded-xl border border-black" src={`https://cdn.dribbble.com/users/424937/screenshots/6717017/pasta_rice_cereals.png?resize=800x600&vertical=center`} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#93B1A6] border border-black">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-neutral" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='my-4'>Do not have an account? <Link className='text-orange-600 font-bold' to="/register">Sign Up</Link> </p>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-neutral w-full">Login With Google <BiLogoGoogle></BiLogoGoogle></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;