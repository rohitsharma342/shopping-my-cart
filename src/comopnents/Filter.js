import Checkbox from '@mui/material/Checkbox';
import { Divider, FormControlLabel, FormGroup } from "@mui/material";
function Filter() {
    return ( 
        <>
           <div className="w-[20%] h-[90vh] overflow-y-scroll">
                <h1 className="font-bold mt-5">PRICE</h1>
       
                <Divider/>
                <div className='text-center'>
                    <FormGroup>
                    <FormControlLabel control={<Checkbox  />} label="500-1000" />
                    <FormControlLabel control={<Checkbox  />} label="1000-2000" />
                    <FormControlLabel control={<Checkbox  />} label="2000-5000" />
                    <FormControlLabel control={<Checkbox  />} label="5000-10000" />
                    </FormGroup>
                </div>
                <h1 className="font-bold mt-5">BRAND</h1>
       
       <Divider/>
       <div className='text-center'>
           <FormGroup>
           <FormControlLabel control={<Checkbox  />} label="Nike" />
           <FormControlLabel control={<Checkbox  />} label="Adidas" />
           <FormControlLabel control={<Checkbox  />} label="Puma" />
           <FormControlLabel control={<Checkbox  />} label="US Polo" />
           </FormGroup>
       </div>
       <h1 className="font-bold mt-5">COLORS</h1>
       
       <Divider/>
       <div className='text-center'>
           <FormGroup>
           <FormControlLabel control={<Checkbox  />} label="Black" />
           <FormControlLabel control={<Checkbox  />} label="White" />
           <FormControlLabel control={<Checkbox  />} label="Gray" />
           <FormControlLabel control={<Checkbox  />} label="Cream   " />
           </FormGroup>
       </div>
       <h1 className="font-bold mt-5">SIZE</h1>
       
       <Divider/>
       <div className='text-center'>
           <FormGroup>
           <FormControlLabel control={<Checkbox  />} label="US-8" color='success'/>
           <FormControlLabel control={<Checkbox  />} label="US-9" />
           <FormControlLabel control={<Checkbox  />} label="US-10" />
           <FormControlLabel control={<Checkbox  />} label="US-11" />
           </FormGroup>
       </div>
              </div>
        </>
     );
}

export default Filter;