import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Chef = () => {
    return (
        <div className="py-6 mt-4">
            <h2 className="text-center text-2xl font-semibold">OUR GREAT CHEFS</h2>
            <div className="divider w-1/5 mx-auto"></div>
            <div className="w-1/2 mx-auto">
                <p className="text-center">Our chefs are the wizards behind the delicious spells on your plate. They bring together expertise and imagination to craft culinary wonders that leave a lasting impression. With every dish, they infuse passion and precision, turning ingredients into works of art. Experience their culinary magic, and let your taste buds dance to their symphony of flavors.</p>
            </div>
            <div className="block text-center space-y-4 md:space-y-0 md:flex justify-evenly md:items-center mt-6">
                <div>
                    <div className="avatar">
                        <div className="w-56 rounded-full ring ring-neutral ring-offset-black ring-offset-1">
                            <img src={`https://img.freepik.com/free-photo/smiling-emotional-young-cook-with-thumbs-up_171337-5337.jpg?size=626&ext=jpg&ga=GA1.1.1971326219.1697307229&semt=ais`} />
                        </div>
                    </div>
                    <div className="text-center space-y-2 pt-2">
                        <h2 className="text-lg font-semibold">GARY BROOKS</h2>
                        <p>CHEF</p>
                        <div className="flex justify-center">
                            <div className="flex gap-2">
                                <AiOutlineFacebook></AiOutlineFacebook>
                                <AiOutlineInstagram></AiOutlineInstagram>
                                <AiOutlineTwitter></AiOutlineTwitter>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="avatar">
                        <div className="w-56 rounded-full ring ring-neutral ring-offset-black ring-offset-1">
                            <img src={`https://img.freepik.com/free-photo/happy-young-bearded-chef-man-wearing-white-cooker-uniform-hat-smiling-holding-hands-folded-while-looking-white-wall_141793-32702.jpg?size=626&ext=jpg&ga=GA1.1.1971326219.1697307229&semt=ais`} />
                        </div>
                    </div>
                    <div className="text-center space-y-2 pt-2">
                        <h2 className="text-lg font-semibold">JOE THOMAS</h2>
                        <p>CHEF</p>
                        <div className="flex justify-center">
                            <div className="flex gap-2">
                                <AiOutlineFacebook></AiOutlineFacebook>
                                <AiOutlineInstagram></AiOutlineInstagram>
                                <AiOutlineTwitter></AiOutlineTwitter>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="avatar">
                        <div className="w-56 rounded-full ring ring-neutral ring-offset-black ring-offset-1">
                            <img src={`https://img.freepik.com/free-photo/chef-making-ok-sign-white-background_1368-2804.jpg?size=626&ext=jpg&ga=GA1.1.1971326219.1697307229&semt=ais`} />
                        </div>
                    </div>
                    <div className="text-center space-y-2 pt-2">
                        <h2 className="text-lg font-semibold">Michael Johnson</h2>
                        <p>COOK</p>
                        <div className="flex justify-center">
                            <div className="flex gap-2">
                                <AiOutlineFacebook></AiOutlineFacebook>
                                <AiOutlineInstagram></AiOutlineInstagram>
                                <AiOutlineTwitter></AiOutlineTwitter>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="avatar">
                        <div className="w-56 rounded-full ring ring-neutral ring-offset-black ring-offset-1">
                            <img src={`https://img.freepik.com/free-photo/confident-young-male-cook-chef-uniform-standing-with-closed-posture-looking-isolated-white-wall-with-copy-space_141793-101304.jpg?size=626&ext=jpg&ga=GA1.1.1971326219.1697307229&semt=ais`} />
                        </div>
                    </div>
                    <div className="text-center space-y-2 pt-2">
                        <h2 className="text-lg font-semibold">James Wilson</h2>
                        <p>PÂTISSIER</p>
                        <div className="flex justify-center">
                            <div className="flex gap-2">
                                <AiOutlineFacebook></AiOutlineFacebook>
                                <AiOutlineInstagram></AiOutlineInstagram>
                                <AiOutlineTwitter></AiOutlineTwitter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;