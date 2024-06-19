import Navbar from "./Nav";
import Main from "./MainContent";
import { useState, createContext, useRef, useEffect } from "react";

const cartFunctionality = createContext();

function App() {
  
  // States for cart functionality
  const [productQuantity, setQuantity] = useState(0);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [isAddToCartClicked, setIsAddToCartClicked] = useState(false);
  
  // Holds the refs used for cartBox display logic based on click
  let cartBoxRefs = {
    imgRef: useRef(null),
    boxRef: useRef(null),
    quantityRef: useRef(null),
    addBtnRef: useRef(null)
  };

  useEffect (() => {
    let opener = (e) => {
   
      // Checks if the clicked area is in any of the cartBox refs, and closes if not
      if (!cartBoxRefs.imgRef.current.contains(e.target) &&
      !cartBoxRefs.boxRef.current.contains(e.target) &&
      !cartBoxRefs.quantityRef.current.contains(e.target) &&
      !cartBoxRefs.addBtnRef.current.contains(e.target)) {
        setCartIsOpen(false)
      }
    };

    document.addEventListener('mousedown', opener);
    
    // CleanUp
    return () => {
      document.removeEventListener('mousedown', opener);
    } 
  }, []);
  
  return (
    <cartFunctionality.Provider 
    value={{productQuantity, setQuantity, 
    cartIsOpen, setCartIsOpen, isAddToCartClicked, 
    setIsAddToCartClicked, cartBoxRefs}}>
      
      <>
        <div className='font-KumbhSans text-darkGrayBlue'>
          <Navbar/>
          <Main/>
        </div>
      </>  
    </cartFunctionality.Provider>
  )
}

export {cartFunctionality};
export default App;