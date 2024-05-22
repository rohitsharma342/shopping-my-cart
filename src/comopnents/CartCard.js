import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Divider } from "@mui/material";
function CartCard() {
  return (
    <>
      <div className="ms-2  flex  mb-5 mt-5 space-x-2">
        <img
          className="w-[100px] h-[100px] rounded-md border-2 p-4 "
          src="https://images.pexels.com/photos/3353621/pexels-photo-3353621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="">
            <div className="flex space-x-20">
            <h1 className="font-bold ">Black men Sweat-Shirt</h1>       <h1 className="font-bold">1299/-</h1>
            </div>
         
          <div className="flex space-x-1 mt-3">
            <h1 className="">
             Red
            </h1>,
            <h1>M</h1>
         
          </div>
          <h1 className="mt-3">Qty  1</h1>
    
        </div>
      </div>
      <Divider className=""/>
    </>
  );
}

export default CartCard;
