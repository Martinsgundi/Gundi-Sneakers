import { useState } from "react";

import product1Thumbnail from "./assets/Images/image-product-1-thumbnail.jpg";
import product2Thumbnail from "./assets/Images/image-product-2-thumbnail.jpg";
import product3Thumbnail from "./assets/Images/image-product-3-thumbnail.jpg";
import product4Thumbnail from "./assets/Images/image-product-4-thumbnail.jpg";

const Thumbnail = ({setProductNo}) => {

    const [isFocused, setIsFocused] = useState(1);

    return ( 
        <>
            {/* Thumbnail Images */}
            <div className="justify-between hidden gap-5 mt-8 midLg:flex lgXl:gap-8">
                
                {/* Image 1 */}
                <div>
                    <button 
                        onClick={() => {
                            setProductNo(0);
                            setIsFocused(1);
                        }}
                        className={`${isFocused === 1 ? 'border-2 border-orange' : ''} rounded-lg`}>
                        
                        <img src={product1Thumbnail}
                        className={`${isFocused === 1 ? 'opacity-30' : 'hover'} rounded-lg`} 
                        alt="Product Thumbnail Image" 
                        />
                    </button>
                </div>

                
                {/* Image 2 */}
                <div>
                    <button 
                        onClick={() => {
                            setProductNo(1);
                            setIsFocused(2)
                        }}
                        className={`${isFocused === 2 ? 'border-2 border-orange' : ''} rounded-lg`}>
                                                
                        <img src={product2Thumbnail}
                        className={`${isFocused === 2 ? 'opacity-30' : 'hover'} rounded-lg`} 
                        alt="Product Thumbnail Image" 
                        />
                    </button>
                </div>


                {/* Image 3 */}
                <div>
                    <button 
                        onClick={() => {
                            setProductNo(2);
                            setIsFocused(3)
                        }}
                        className={`${isFocused === 3 ? 'border-2 border-orange' : ''} rounded-lg`}>
                        
                        <img src={product3Thumbnail}
                        className={`${isFocused === 3 ? 'opacity-30' : 'hover'} rounded-lg`}
                        alt="Product Thumbnail Image" 
                        />
                    </button>
                </div>


                {/* Image 4 */}
                <div>
                    <button 
                        onClick={() => {
                            setProductNo(3);
                            setIsFocused(4)
                        }}
                        className={`${isFocused === 4 ? 'border-2 border-orange' : ''} rounded-lg`}>
                        
                        <img src={product4Thumbnail}
                        className={`${isFocused === 4 ? 'opacity-30' : 'hover'} rounded-lg`} 
                        alt="Product Thumbnail Image" 
                        />
                    </button>
                </div>
            </div>
        </>
        
    );
}
 
export {product1Thumbnail};
export default Thumbnail;