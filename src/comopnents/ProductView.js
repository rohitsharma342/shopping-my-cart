import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CircleIcon from '@mui/icons-material/Circle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function ProductView() {

    return ( 
        <>
        <div className="bg-[#EDF4F2] rounded-md py-5 mt-10 px-10 ms-20 me-20 mb-10">
            <div className="flex py-10  justify-center  ms-20">
               <div>
                <img className="h-[80%] rounded-md" src="https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
               </div>
               <div className=" space-y-3">
                <img className="w-[400px] h-[250px] rounded-md" src="https://images.pexels.com/photos/6786614/pexels-photo-6786614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                <img className="w-[400px] h-[250px] rounded-md" src="https://images.pexels.com/photos/6786614/pexels-photo-6786614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
               </div>
               <div className="ms-20">
                <img className="h-[80%] rounded-md" src="https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
               </div>
            </div>
            <div className="flex ">
              <div className="w-[60%] border-e-2  border-e-black">
                <h1 className="font-bold text-4xl">Basic Tee Pack Of Six</h1>
                <p className="mt-5">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                <h1 className="mt-5 font-bold">Highlights</h1>
                <ul className="list-disc ms-5 mt-3 text-slate-500">
                    <li>Hand cut and sewn locally</li>
                    <li>Dyed with our proprietary colors</li>
                    <li>Pre-washed & pre-shrunk</li>
                    <li>Ultra-soft 100% cotton</li>
                </ul>
                <h1 className="mt-5 font-bold">Details</h1>
                <p>The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.</p>
              </div>
            <div className="w-[25%] ms-10">
             <h1 className="font-bold text-2xl ">$235</h1>
             <div className='flex'>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarBorderIcon/>
             </div>
             <h1 className='text-lg mt-7'>Color</h1>
             <div className='flex mt-5'> 
               <CircleIcon className='text-white cursor-pointer ' style={{fontSize:"40px"}}/>
               <CircleIcon className=' text-gray-400 cursor-pointer' style={{fontSize:"40px"}}/>
               <CircleIcon className='cursor-pointer' style={{fontSize:"40px"}}/>
             </div>
             <div className='flex justify-between mt-10'>
               <button className='bg-[#31473A] text-white px-14 py-2'><AddShoppingCartIcon/></button>
               <button  className='bg-[#baca43] text-black px-10 py-2'>Buy now</button>
             </div>
            </div>
            </div>
        </div>
        </>
     );
}

export default ProductView;