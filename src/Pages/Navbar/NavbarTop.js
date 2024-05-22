import { Link } from "react-router-dom";

function NavbarTop() {
    return ( 
        <>
         <div className="flex bg-[#31473A] py-3  justify-center text-white text-center">
           <div className="text-center">Get free delivery on orders over $100</div>
           {/* <div className="flex relative left-96 space-x-5">
            <Link><h1>Continue to Login</h1></Link>
           
            <Link> <h1>Register?</h1></Link>
           </div> */}
        </div>
        
        </>
     );
}

export default NavbarTop;