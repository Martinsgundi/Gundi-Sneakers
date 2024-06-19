// Images
import avatar from "./assets/Images/image-avatar.png";
import logo from "./assets/Images/logo.svg";

// Componenets
import AsideMenu from "./AsideMenuList";
import { cartFunctionality } from "./App";

// Hooks
import { useState, useContext } from "react";


const Navbar = () => {
    const {productQuantity, cartIsOpen, 
    setCartIsOpen, isAddToCartClicked, cartBoxRefs} 
    = useContext(cartFunctionality);
    
    const [hamburgerIcon, setHamburgerIcon] = useState(false);
   
    return (  
        <>
            <header>
                <div className="flex justify-between items-center 
                mt-6 mx-[7vw] midLg:border-b midLg:pb-8 lg:mx-[11.5vw]">

                
                    {/* Left-Nav */}
                    <div className="flex justify-between items-baseline  
                    gap-[9vw] midLg:items-center midLg:gap-8 lg:gap-[4vw]">

                        {/* Hamburger */}
                        <span className="midLg:hidden">
                            <button
                                aria-label='Click to open navigation menu'
                                aria-controls="mobile-menu"
                                aria-expanded={`${!hamburgerIcon ? 'false' : 'true'}`}
                                onClick={()=> setHamburgerIcon(!hamburgerIcon)}
                                className={`${hamburgerIcon ? 'active' : ''} relative`}>
                            
                                <div className={'z-40 absolute top-[-0.96rem] '}>
                                    <span className="bar bg-darkGrayBlue"></span>
                                    <span className="bar bg-darkGrayBlue mt-[3px]"></span>
                                    <span className="bar bg-darkGrayBlue mt-[3px]"></span>
                                </div>
                                
                            </button>
                        </span>


                        {/* Brand Logo */}
                        <span>
                            <a href="/" aria-label="Back to Homepage">
                                <img src={logo} alt="brand-logo" />
                            </a>
                        </span>

                        {/* Nav Links */}
                        <ul className="hidden gap-8 midLg:flex">
                            <li> <a className="text-hover hover:text-veryDarkBlue" href="#">Collections</a> </li>
                            <li> <a className="text-hover hover:text-veryDarkBlue" href="#">Men</a> </li>
                            <li> <a className="text-hover hover:text-veryDarkBlue" href="#">Women</a> </li>
                            <li> <a className="text-hover hover:text-veryDarkBlue" href="#">About</a> </li>
                            <li> <a className="text-hover hover:text-veryDarkBlue" href="#">Contact</a> </li>
                        </ul>
                    </div>


                    {/* Right-Nav */}    
                    <div className="flex items-center justify-between gap-5 md:gap-10">

                        {/* Cart-Img */}
                        <span ref={cartBoxRefs.imgRef}>  
                            <button 
                                aria-label="Open cart-box"
                                aria-controls="cartBox"
                                aria-expanded={`${cartIsOpen ? 'true' : 'false'}`}
                                onClick={()=> setCartIsOpen(!cartIsOpen)}
                                className={`relative`}>
                                
                                <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" 
                                    fill={`${cartIsOpen ? '#000000' : '#69707D'}`} fillRule="nonzero"/>
                                </svg> 
                                
                                
                                {/* Shows Product quantity */}
                                {
                                    isAddToCartClicked &&   
                                    <span className="absolute px-2 text-xs font-bold text-white rounded-xl bottom-3 left-2 bg-orange">
                                        {productQuantity}
                                    </span>
                                }
                            </button>
                        </span>

                        {/* Profile-pic */}
                        <span>
                            <button>
                                <img className="w-7 sm:w-12 rounded-[50%] transition-All 
                                midLg:border-2 midLg:w-[3.4rem] midLg:hover:border-orange" 
                                src={avatar} alt="avatar image" />
                            </button>
                        </span>
                         
                    </div>
                </div>
            </header>
            
            {/* Mobile Side-menu */}
            <aside aria-hidden={`${!hamburgerIcon ? 'true' : 'false'}`}>
                <AsideMenu hamburger={hamburgerIcon} />
            </aside>
        </>
    );
}
 
export default Navbar;