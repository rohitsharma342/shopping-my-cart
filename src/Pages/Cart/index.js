import { Link } from "react-router-dom";
import CartCard from "../../comopnents/CartCard";
import CloseIcon from '@mui/icons-material/Close';
function Cart(props) {
    let cartrItems= [1,2,3,4,5,6,7]
    return ( 
        <>
        <div className="flex justify-between py-3">
            <h1 className="ms-5 text-lg">Your Cart</h1>
            <h1 className="me-3 cursor-pointer " onClick={props.handleClose("right", false)}><CloseIcon/></h1>
        </div>
        {cartrItems.map(i=>(
  <CartCard/>
        ))}
      <div className="sticky bottom-0   w-full bg-[#EDF4F2] py-5 justify-between ">
        <div className="flex w-full justify-between">
            <div className="ms-5">
            <h1 >Mrp  </h1>
            <h1 >GST  </h1>
            <h1 >delivery charges  </h1>
            <h1>Sub Total</h1>
            </div>
      <div className="me-5">
      <h1 >4000  </h1>
            <h1 >400  </h1>
            <h1 >40  </h1>
            <h1 >4440 </h1>
      </div>
        {/* <h1 className="font-bold">SUB TOTAL : 4440</h1> */}
        </div>
        <div className="flex mt-5 justify-center">
        <button className="me-4 bg-[#31473A] text-white  w-1/2 h-10">Proceed to Chaeckout</button>
        <br/>
        
        </div>
        <h1 className="text-center mt-3">Or <Link className="text-blue-500">Continue Shopping</Link></h1>
      </div>
        </>
     );
}

export default Cart;