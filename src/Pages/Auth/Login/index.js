import { TextField } from "@mui/material";

function Login() {
    return ( 
        <>
        <div className="flex">
           <div className="w-[60%] justify-center flex items-center mt-40  border-e-2">
               <img src="tochi_logo.png"/>
           </div>
           <div className="text-center w-[35%] mt-60 space-y-4">
           <h1>Welcome Back Buddy</h1>
             <TextField variant="outlined" type="number" className="w-[90%]" label="Phone" color="success"/>
             <button className="bg-[#31473A] text-white w-[90%] mt-5 py-2">Send OTP</button>
           </div>
        </div>
        </>
     );
}

export default Login;