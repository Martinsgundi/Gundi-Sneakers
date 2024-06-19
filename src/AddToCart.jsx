import whiteCart from "./assets/Images/icon-cart-white.svg";
import decrement from "./assets/Images/icon-minus.svg";
import increment from "./assets/Images/icon-plus.svg";
import { useContext, useEffect, useRef } from "react";
import { cartFunctionality } from "./App";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AddToCart = () => {
    
    const {productQuantity, setQuantity,
    isAddToCartClicked, setIsAddToCartClicked, 
    cartBoxRefs} = useContext(cartFunctionality);

    
    // Toast Notifications
    const selectProductNo = () => toast (`Select product quantity🙄`, {
        type: "error",
    })
    
    const added = () => toast ("Added to Cart😎", {
        type: "success"
    });
    
    const alreadyAdded = () => toast ("Product already added😑", {
        type: "info"
    })


    let productRef = useRef(null);
    
    // This resets the cart.
    // Primarily Removes the "added"  
    // classname from the "product and cart" 
    // div which aids the toast notifications logic.
    // And secondarily, it removes the product no
    // preview that's shown on the the cart-img in the nav.
    productQuantity <= 0 && setIsAddToCartClicked(false);
    
    return ( 
        <>
            <ToastContainer 
                toastClassName={`font-sans font-bold text-center`} 
                theme="colored"
                position="top-center" 
            />

            {/* Product Pricing  */}
            <div className="flex justify-between mt-6 md:block midLg:flex lgXl:block">
                <div className="flex gap-5 md:mb-2 midLg:mb-0 lgXl:mb-2">
                    
                    {/* Initial Price */}
                    <span className="text-3xl font-bold text-black">
                        $125.00
                    </span>

                    {/* Discount % */}
                    <span className="text-orange font-bold text-[1.08rem]
                    bg-paleOrange px-2 pb-[0.1rem] rounded-md self-center">
                        50%
                    </span>
                </div>

                {/* Discount Slash Price */}
                <div className="self-center text-[1.05rem] 
                font-bold text-grayishBlue line-through">
                    <span>$250.00</span>
                </div>
            </div>


            {/* Product & Cart */}
            <div ref={productRef} className={`${isAddToCartClicked && !productQuantity <= 0 ? "added" : ""} justify-between gap-7 md:flex md:pt-7 midLg:pt-0 midLg:block lgXl:flex lgXl:pt-10 lgXl:gap-4`}>
            
                {/* Product Quantity */}
                <div ref={cartBoxRefs.quantityRef} className="flex justify-between 
                items-center px-5 py-[0.95rem] mt-6 rounded-lg bg-lightGrayBlue
                md:mt-0 md:w-[40%] midLg:mt-6 midLg:w-auto lgXl:mt-0 lgXl:w-[35%]">
                
                    {/* Decrement btn(-) */}
                    <span>
                        <button className="p-3 midLg:p-0"
                        aria-label="Reduce product quantity"
                        onClick={() => { productQuantity > 0 && setQuantity(productQuantity - 1)}}>
                            <img className="hover" src={decrement} alt="minus icon" />
                        </button>
                    </span>

                    <span className="font-bold text-black">{productQuantity}</span>

                    {/* Increment btn(+) */}   
                    <span>
                        <button className="p-3 midLg:p-0" 
                        aria-label="Increase product quantity"
                        onClick={() => {setQuantity(productQuantity + 1)}}>
                            <img className="hover" src={increment} alt="plus icon" /> 
                        </button>
                    </span>
                </div>


                {/* Add to Cart Button */}
                <div ref={cartBoxRefs.addBtnRef} className="mt-4 text-white 
                md:w-[60%] md:mt-0 midLg:mt-4 midLg:hover:opacity-70 midLg:transition
                midLg:duration-500 midLg:ease-out midLg:w-auto lgXl:w-[65%] lgXl:mt-0">
                                
                    <button 
                        aria-label="Add Product to cart"
                        onClick={()=> {
                            
                            // Checks and alert user to select product quantity if not selected
                            productQuantity <= 0 && selectProductNo();
                            
                            // Ensures product is added to cart once by checking "added" status
                            // and alerts user that product has been added to cart
                            if (productQuantity > 0 && !productRef.current.classList.contains('added')) {
                                setIsAddToCartClicked(true);
                                added();
                            }
                            
                            // Checks and alerts user if product has already been added to cart
                            if (productQuantity > 0 && productRef.current.classList.contains('added')) {
                                alreadyAdded();
                            };
                        }}
                        
                        className="flex justify-center w-full gap-4 py-4 rounded-lg bg-orange cartBtn-shadow">
                            
                        <img className="w-[1.1rem] h-[1.1rem] self-center" 
                        src={whiteCart} alt="Image of a cart" />
                        
                        <span className="font-bold"> Add to cart </span>
                        
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default AddToCart;