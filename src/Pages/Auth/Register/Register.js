import { TextField } from "@mui/material";

function Register() {
    return ( 
        <>
        <div className="flex">
           <div className="w-[60%] justify-center flex items-center mt-40  border-e-2">
               <img src="tochi_logo.png"/>
           </div>
           <div className="text-center w-[35%] mt-40 space-y-4">
            <h1>Join Us Now</h1>
             <TextField variant="outlined" type="number" className="w-[90%]" label="Phone" color="success"/>
             <TextField variant="outlined" type="text" className="w-[90%]" label="Full Name" color="success"/>
             <TextField variant="outlined" type="email" className="w-[90%]" label="Email" color="success"/>
             <button className="bg-[#31473A] text-white w-[90%] mt-5 py-2">Register</button>
           </div>
        </div>
        </>
     );
}

export default Register;