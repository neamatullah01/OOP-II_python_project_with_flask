import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="mx-2 md:mx-8">
            <div className="carousel h-[55vh] md:h-[80vh] md:w-full rounded-lg border border-black">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={`https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} className="w-full" />

                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 pl-5 md:pl-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='space-y-1 md:space-y-7 pl-10 md:pl-20 w-4/5  md:w-1/2'>
                            <h2 className='text-xl md:text-6xl font-medium md:font-bold text-[#93B1A6]'>Indulge in Culinary Delights</h2>
                            <p className="text-xs md:text-base text-slate-400">Welcome to a world of exquisite flavors and unforgettable dining experiences. Our restaurant is a haven for food enthusiasts, where every dish is a masterpiece crafted with passion. Join us for a journey through taste, where each bite tells a unique story. Explore our menu and savor the magic of culinary artistry.</p>
                            <div>
                                <Link to="/menu" className="btn btn-outline btn-warning">Menus</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-[#040D12] outline-[#93B1A6] md:p-3"><BiLeftArrow className="md:text-2xl font-extrabold text-yellow-400"></BiLeftArrow></a>
                        <a href="#slide2" className="btn btn-circle bg-[#040D12] outline-[#93B1A6]"><BiRightArrow className="md:text-2xl font-extrabold text-yellow-400"></BiRightArrow></a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={`https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} className="w-full" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 pl-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-1 md:space-y-7 pl-10 md:pl-20 w-4/5  md:w-1/2'>
                            <h2 className='text-xl md:text-6xl font-medium md:font-bold text-[#93B1A6]'>Indulge in Culinary Delights</h2>
                            <p className="text-xs md:text-base text-slate-400">Welcome to a world of exquisite flavors and unforgettable dining experiences. Our restaurant is a haven for food enthusiasts, where every dish is a masterpiece crafted with passion. Join us for a journey through taste, where each bite tells a unique story. Explore our menu and savor the magic of culinary artistry.</p>
                            <div>
                                <Link to="/menu" className="btn btn-outline btn-warning">Menus</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-[#040D12] outline-[#93B1A6]"><BiLeftArrow className="text-2xl font-extrabold text-yellow-400"></BiLeftArrow></a>
                        <a href="#slide3" className="btn btn-circle bg-[#040D12] outline-[#93B1A6]"><BiRightArrow className="text-2xl font-extrabold text-yellow-400"></BiRightArrow></a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={`https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} className="w-full" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 pl-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-1 md:space-y-7 pl-10 md:pl-20 w-4/5  md:w-1/2'>
                            <h2 className='text-xl md:text-6xl font-medium md:font-bold text-[#93B1A6]'>Indulge in Culinary Delights</h2>
                            <p className="text-xs md:text-base text-slate-400">Welcome to a world of exquisite flavors and unforgettable dining experiences. Our restaurant is a haven for food enthusiasts, where every dish is a masterpiece crafted with passion. Join us for a journey through taste, where each bite tells a unique story. Explore our menu and savor the magic of culinary artistry.</p>
                            <div>
                                <Link to="/menu" className="btn btn-outline btn-warning">Menus</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-[#040D12] outline-[#93B1A6]"><BiLeftArrow className="text-2xl font-extrabold text-yellow-400"></BiLeftArrow></a>
                        <a href="#slide4" className="btn btn-circle bg-[#040D12] outline-[#93B1A6]"><BiRightArrow className="text-2xl font-extrabold text-yellow-400"></BiRightArrow></a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={`https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} className="w-full" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 pl-8 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-1 md:space-y-7 pl-10 md:pl-20 w-4/5  md:w-1/2'>
                            <h2 className='text-xl md:text-6xl font-medium md:font-bold text-[#93B1A6]'>Indulge in Culinary Delights</h2>
                            <p className="text-xs md:text-base text-slate-400">Welcome to a world of exquisite flavors and unforgettable dining experiences. Our restaurant is a haven for food enthusiasts, where every dish is a masterpiece crafted with passion. Join us for a journey through taste, where each bite tells a unique story. Explore our menu and savor the magic of culinary artistry.</p>
                            <div>
                                <Link to="/menu" className="btn btn-outline btn-warning">Menus</Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-1 md:left-5 right-1 md:right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-[#040D12] outline-[#93B1A6]"><BiLeftArrow className="text-2xl font-extrabold text-yellow-400"></BiLeftArrow></a>
                        <a href="#slide1" className="btn btn-circle bg-[#040D12] outline-[#93B1A6]"><BiRightArrow className="text-2xl font-extrabold text-yellow-400"></BiRightArrow></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;