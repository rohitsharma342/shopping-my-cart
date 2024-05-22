import { TextField } from "@mui/material";

function VerifyOtp() {
    return ( 
        <>
        <div className="flex">
           <div className="w-[60%] justify-center flex items-center mt-40  border-e-2">
               <img src="tochi_logo.png"/>
           </div>
           <div className="text-center w-[35%] mt-60 space-x-3 space-y-4">
           <h1>Enter Your OTP</h1>
             <TextField variant="outlined"  className="w-[10%]"  color="success"/>
             <TextField variant="outlined"  className="w-[10%]"  color="success"/>
             <TextField variant="outlined"  className="w-[10%]"  color="success"/>
             <TextField variant="outlined"  className="w-[10%]"  color="success"/>
             <br/>
             <button className="bg-[#31473A] text-white w-[50%] mt-5 py-2">Verify OTP</button>
           </div>
        </div>
        </>
     );
}

export default VerifyOtp;