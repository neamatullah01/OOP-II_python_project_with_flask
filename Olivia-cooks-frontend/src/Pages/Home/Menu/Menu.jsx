
const Menu = () => {
    return (
        <div className="py-6">
            <h2 className="text-center text-2xl font-semibold">OUR MENU</h2>
            <div className="divider w-1/5 mx-auto"></div>
            <div className="w-1/2 mx-auto mb-4">
                <p className="text-center">Discover a world of delectable dishes meticulously prepared to tantalize your taste buds. Our menu showcases a symphony of flavors, from appetizing starters to mouthwatering mains and irresistible desserts. Join us in a culinary journey that promises an unforgettable dining experience. Let your senses rejoice in every bite, and relish the art of exceptional cuisine.</p>
            </div>
            <div>
                <div className="overflow-x-auto md:px-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Rating</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <td className="font-semibold">MUSSELS SOUP</td>
                                <td>
                                    <div className="rating">
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                                        <input type="radio" name="rating-1" className="mask mask-star" />
                                    </div>
                                </td>
                                <td>$ 23.00</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <td className="font-semibold">ITALIAN SPAGHETTI</td>
                                <td>
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star" />
                                        <input type="radio" name="rating-2" className="mask mask-star" />
                                        <input type="radio" name="rating-2" className="mask mask-star"checked  />
                                        <input type="radio" name="rating-2" className="mask mask-star" />
                                        <input type="radio" name="rating-2" className="mask mask-star" />
                                    </div>
                                </td>
                                <td>$ 12.00</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <td className="font-semibold">BEEF BURGER</td>
                                <td>
                                    <div className="rating">
                                        <input type="radio" name="rating-3" className="mask mask-star" />
                                        <input type="radio" name="rating-3" className="mask mask-star" />
                                        <input type="radio" name="rating-3" className="mask mask-star" />
                                        <input type="radio" name="rating-3" className="mask mask-star" checked />
                                        <input type="radio" name="rating-3" className="mask mask-star" />
                                    </div>
                                </td>
                                <td>$ 10.00</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">STUFFED STRAWBERRY</td>
                                <td>
                                    <div className="rating">
                                        <input type="radio" name="rating-4" className="mask mask-star" />
                                        <input type="radio" name="rating-4" className="mask mask-star" />
                                        <input type="radio" name="rating-4" className="mask mask-star" />
                                        <input type="radio" name="rating-4" className="mask mask-star" />
                                        <input type="radio" name="rating-4" className="mask mask-star" checked />
                                    </div>
                                </td>
                                <td>$ 13.00</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">SEAFOOD SALAD</td>
                                <td>
                                    <div className="rating">
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                        <input type="radio" name="rating-5" className="mask mask-star" checked />
                                        <input type="radio" name="rating-5" className="mask mask-star" />
                                    </div>
                                </td>
                                <td>$ 8.00</td>
                            </tr>
                            <tr>
                                <td className="font-semibold">GRILLED FISH</td>
                                <td>
                                    <div className="rating">
                                        <input type="radio" name="rating-6" className="mask mask-star" />
                                        <input type="radio" name="rating-6" className="mask mask-star" />
                                        <input type="radio" name="rating-6" className="mask mask-star" />
                                        <input type="radio" name="rating-6" className="mask mask-star" />
                                        <input type="radio" name="rating-6" className="mask mask-star" checked/>
                                    </div>
                                </td>
                                <td>$ 36.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Menu;