import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
function AddressCard() {
    return ( 
        <>
        <div className=" px-5 py-5 ms-10 mt-10 bg-white rounded-md space-y-5 ">
             <div className='flex justify-center'>
                <AddHomeWorkIcon style={{fontSize:"100px"}} className=' text-[#31473A] border-none p-4'/>
             </div>
             <div className='text-center'>
                <h1>Anil Choudhary</h1>
                <h1>7877575481</h1>
                <h1>12, Alankar Plaza</h1>
                <h1>Vidhyadhar Nagar , Jaipur</h1>
                <h1>Rajasthan ,302039 </h1>
             </div>
             <div className='flex justify-between space-x-10'>
                <button className='bg-[#31473A] text-white  px-4 rounded-md py-2'>Edit <EditIcon/></button>
                <button className='bg-red-600 text-white  px-4 rounded-md py-2'>Delete <DeleteIcon/></button>
             </div>
        </div>
        </>
     );
}

export default AddressCard;