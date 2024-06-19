// Components
import Thumbnail from "./Thumbnail";
import AddToCart from "./AddToCart";
import Cart from "./Cart";

// Array List
import productImage from "./productImageUrl";

// Images
import prevBtn from "./assets/Images/icon-previous.svg";
import nextBtn from "./assets/Images/icon-next.svg";

import { useState } from "react";

const Main = () => {

    const [productNo, setProductNo] = useState(0);
    
    const handlePreviousProduct = () => {

        productNo > 0 &&
        setProductNo(productNo - 1);

        productNo === 0 &&
        setProductNo(productImage.length - 1)
    }

    const handleNextProduct = () => {

        productNo < productImage.length - 1 &&
        setProductNo(productNo + 1);

        productNo === productImage.length - 1 &&
        setProductNo(0);
    }


    // Image Swipe Logic
    const swipe_threshold = 50;
    
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    function checkSwipeDirection() {

        if (window.innerWidth < 900) { // SwipeEffect runs only on Mobile
            
            // Ensure both touchStart and End coordinates are set
            if (!touchStartX || !touchEndX)
            return; // Exit func if either coordinate is not set
    
    
            // Main logic for swipe detection
            const distance = touchStartX - touchEndX;  // Calculate the distance of the swipe
    
            // Use Math.abs to get the absolute value of the distance
            if(Math.abs(distance) > swipe_threshold) {
                if (distance > 0) {
                    handleNextProduct(); // Swiped left
                } else {
                    handlePreviousProduct(); // Swiped right
                }
            }
    
            // Reset touch positions
            setTouchStartX(null);
            setTouchEndX(null);
        }; 
    };


    return ( 
        <>
            <main>    
                {/* CartBox */}
                <Cart />
                             
                <div className={` mt-4 midLg:flex midLg:justify-between gap-20 lgXl:gap-32 midLg:px-[14vw] midLg:mt-16 lgXl:mt-24`}>

                    {/* Products */}
                    <div className="midLg:self-center xl:mb-10">

                        {/* Main Images */}
                        <div className="relative">
                            <div
                                // Captures the screenX coordinate of the first 
                                // touch point and updates the state with the value
                                onTouchStart={ (e) => setTouchStartX(e.changedTouches[0].screenX) }

                                // Continuously updates the ending X-coordinate as 
                                // the user moves their finger across the screen. 
                                // and updates the state with the value
                                onTouchMove={ (e) => setTouchEndX(e.changedTouches[0].screenX) }

                                // Determines the swipe direction and updates the product image
                                onTouchEnd={(e) => checkSwipeDirection()}>


                                <img src={productImage[productNo]} 
                                alt={`Product-${productNo + 1}`} 
                                className="max-h-[30rem] z-10 w-full object-cover midLg:max-h-full midLg:rounded-[1rem]" />
                            </div>


                            {/* Product Previous btn  */}
                            <button
                                aria-label="Check previous product image review" 
                                onClick={handlePreviousProduct}
                                className="sliderBtns left-[4vw] midLg:hidden">
                                    
                                <img className="w-[0.65rem] h-[0.9rem]" src={prevBtn} alt="Previous button" />
                            </button> 


                            {/* Product Next btn */}
                            <button 
                                aria-label="Check next product image review" 
                                onClick={handleNextProduct}
                                className="sliderBtns right-[4vw] midLg:hidden">
                                    
                                <img className="w-[0.65rem] h-[0.9rem]" src={nextBtn} alt="Next button" />
                            </button>
                        </div>

                        {/* Thumbnail Images */}
                        <Thumbnail setProductNo = {setProductNo} />
                    </div>


                    <div className="px-[6vw] self-center mt-5 pb-20 
                    md:px-[14vw] midLg:px-[0] midLg:pb-0 midLg:mt-0">
                    
                        {/* Product Info */}
                        <div>
                            <div className="text-sm font-bold tracking-widest text-orange">
                                SNEAKER COMPANY
                            </div>
                            
                            <h1 className="mt-3 mb-4 text-3xl font-bold 
                            text-black md:text-4xl lgXl:text-[2.55rem]">
                                Fall Limited Edition Sneakers
                            </h1>

                            <p className="tracking-wide lg:max-w-[105ch]">
                                These low-profile sneakers are your 
                                perfect casual wear companion. 
                                Featuring a durable rubber outer 
                                sole, they’ll withstand everything 
                                the weather can offer.
                            </p>
                        </div>
                    
                        {/* AddToCart btn */}
                        <AddToCart />
                    </div>
                </div>
            </main>
        </>
    );
}
 
export default Main;