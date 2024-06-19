import delBtn from "./assets/Images/icon-delete.svg";
import {product1Thumbnail} from "./Thumbnail";
import { cartFunctionality } from "./App";
import { useContext } from "react";
import { toast } from "react-toastify";

const Cart = () => {

    const {productQuantity, setQuantity, cartIsOpen,
    isAddToCartClicked, setIsAddToCartClicked, cartBoxRefs} 
    = useContext(cartFunctionality);

    const checkedOut = () => toast("Checked Out🥳", {
        type: "success"
    });
    
    return ( 
        <>
            {/* Toggle Cart-Box */}
            
            <div ref={cartBoxRefs.boxRef}
                aria-hidden={`${cartIsOpen ? 'false' : 'true'}`}
                id="cartBox" >
                    
                <div className={`${cartIsOpen ? 'show-cart' : 'hide-cart'} relative z-20`}>
                    <div className=" absolute w-[96%] max-w-[355px] Transform 
                        top-[8.85rem] py-4 bg-white rounded-lg text-[1.03rem] midLg:shadow-3xl">
                            
                        <div className="pb-6 border-b px-[1.5rem]">
                            <span className="font-bold text-black">Cart</span>
                        </div>


                        {/* Toggle cart item(s) visibility  */}
                        { 
                            !isAddToCartClicked || productQuantity <= 0
                            
                            ?
                            
                            <div className="py-20 text-center">
                                <span className="font-semibold text-darkGrayBlue">
                                    Your cart is empty.
                                </span>
                            </div>
                        
                            : 
        
                            <div className={`pt-6 px-[1.5rem]`}>
                                <div className="flex justify-between gap-4">
                                    
                                    <img src={product1Thumbnail} alt="thumbnail" className="rounded w-[3.3rem] h-[3.3rem] self-center" />
                                    
                                    <div>
                                        <span>Fall Limited Edition Sneakers</span>
                                        <span className="block">$125.00 x {productQuantity} <span className="font-bold text-black">
                                            {`$${125.00 * productQuantity}.00`}</span>
                                        </span>
                                    </div>
                                    
                                    {/* Delete btn */}
                                    <button className="self-center"
                                        onClick={() => {
                                        setQuantity(0)
                                        setIsAddToCartClicked(false)}}> 
                                        
                                        <img src={delBtn} alt="delete icon" /> 
                                    </button>
                                </div>

                                <button 
                                    onClick={() => {
                                        checkedOut();
                                        setIsAddToCartClicked(false);
                                        setQuantity(0);
                                    }}
                                    
                                    className="block w-full py-[0.9rem] mb-5 mx-auto hover
                                    font-bold text-lightGrayBlue rounded-lg mt-7 bg-orange">
                                        
                                    Checkout
                                </button>
                            </div>
                        }  
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Cart;