import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { useState } from "react";
import Cart from "../Cart";

import ProfilePop from "../../comopnents/ProfilePop";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Popover, Typography } from "@mui/material";

function NavbarMid() {
   const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
   const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
<Cart handleClose={toggleDrawer}/>
      </Box>
    );
  
    return ( 
        <>
        <div className="flex space-x-[400px] bg-[#EDF4F2] sticky top-0 z-50">
           <div>
            <img src="../tochi_logo.png" className="w-20 cursor-pointer"/>
           </div>
           <div className="flex items-center text-center">
              <ul className="flex space-x-10 ">
                <li className="cursor-pointer">MEN</li>
                <li className="cursor-pointer">WOMEN</li>
                <li className="cursor-pointer">KIDS</li>
                <li className="cursor-pointer">BEAUTY</li>
                <li className="cursor-pointer">GIFTS</li>
              </ul>
           </div>
           <div className="flex items-center ">
            
                <div className="flex space-x-4 items-center">
               
                  
                  {/* <input type="text" className="text-[EDF4F2] outline-none rounded-md border-2 border-[#31473A]" placeholder="Search Here"/> */}
                    <SearchIcon className="mt-1  cursor-pointer"/>
                    <FavoriteBorderIcon className=" cursor-pointer"/>
               <LocalMallIcon onClick={toggleDrawer("right", true)} className="cursor-pointer"/>
               <AccountCircleIcon className=" cursor-pointer" onClick={handleClick}/>
               <Drawer
            anchor="right"
            open={state["right"]}
            // onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
                </div>
           </div>
        </div>
        <Popover
        style={{width:"xl"}}
  id={id}
  open={open}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }}
>
  <ProfilePop/>
{/* <div className="px-10 py-10 text-center ">
  <h1>Hii User please login to view your profile</h1>
  <button className="bg-[#31473A] text-white px-10 py-2 mt-3">Login</button>
</div> */}
</Popover>



        </>
     );
}

export default NavbarMid;