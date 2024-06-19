const AsideMenu = ({hamburger}) => {

    return ( 
        // Toggles Mobile nav-links when hamburger-icon isClicked
        <>
            <div
            id="mobile-menu"
            className={`${hamburger ? ' left-[0]' : ''} z-30  transition-[left] 
            duration-300 ease-linear fixed text-veryDarkBlue bg-white 
            w-[65%] left-[-65%] top-0 h-full midLg:hidden`}>

                <nav>
                    <ul className="grid gap-5 pl-[7vw] font-bold text-lg pt-20">
                        <li>  <a href="#">Collections</a> </li>
                        <li> <a href="#">Men</a> </li>
                        <li> <a href="#">Women</a> </li>
                        <li> <a href="#">About</a> </li>
                        <li> <a href="#">Contact</a> </li>
                    </ul>
                </nav>
            </div>


            {/* Bg-Overlay */}
            <div className={`${hamburger ? 'right-[0]' : ''} z-20 transition-[right] 
                duration-300 ease-linear bg-overlayBlack fixed top-0  h-full w-[35%] 
                right-[-35%] midLg:hidden`}>
            </div>
        </>
        
    );
}
 
export default AsideMenu;