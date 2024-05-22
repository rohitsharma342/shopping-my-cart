import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
function TopProductCard() {
    return ( 
        <>
       <div className=" space-y-2  mt-10 ms-9 ">
       <Link to="/product-view"> <img className="w-[250px] h-[350px]" src="https://images.pexels.com/photos/18257675/pexels-photo-18257675/free-photo-of-white-t-shirt-hanging-on-a-hanger.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>     </Link>
          <div className="flex justify-between">
            <div >
            <h1>Basic Tee</h1>
          <h1>white</h1>
            </div>
            <div>
                <h1 className='ms-24'>$35</h1>
                <div className="flex space-x-2" >
                <FavoriteBorderIcon/>
                <button className='bg-[#31473A] text-white px-2 rounded-s-lg'>-</button>
                <h1 className='px-2'>0</h1>
                <button className='bg-[#31473A] text-white px-2 rounded-e-lg'>+</button>
                </div>
            </div>
          </div>
  <div className='flex justify-center w-full'>     <button className='bg-[#31473A] w-full text-white px-10 py-1'>Add To cart</button></div>
        </div>
   
        </>
     );
}

export default TopProductCard;