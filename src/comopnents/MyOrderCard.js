import { Divider } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Link } from "react-router-dom";
function MyOrderCard() {
  return (
    <>
    <Link to="/product-view">
      <div className="border-2 pb-5 w-[400px] rounded-md ms-8 mt-8">
        <div className="flex space-x-3 items-center bg-[#EDF4F2] px-3 rounded-md">
          <img
            className="w-[100px] m-4 rounded-md border-2 p-2"
            src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <h1>Nike Sneakers Air</h1>
        </div>
        <div className=" space-y-3 mt-3">
          <div className="flex justify-between px-2">
            <h1>Delivered By</h1>
            <h1>Fri, 10 July 2024</h1>
          </div>
          <Divider />
          <div className="flex justify-between px-2">
            <h1>Status</h1>
         
            <div className="flex space-x-2">
              <h1>Out for delivery</h1>
              <button className="bg-[#ddff44] text-black rounded-md px-2 ">Track <TrendingUpIcon/></button>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}

export default MyOrderCard;
