import MailIcon from '@mui/icons-material/Mail';
import EditIcon from '@mui/icons-material/Edit';
import ProfileTabs from './ProfileTabs';
function Profile() {
    return ( 
        <>
        <div className="">
            <div className="flex px-10 justify-between items-center bg-[#31473A] rounded-md mx-10 py-10 mt-10">
               <div className=" ">
                <h1 className="font-bold text-4xl text-white  ">ROHIT SHARMA</h1>
                <p className=" text-gray-400 mt-2"><MailIcon/> rohitkumar.brainbox@gmail.com</p>
               </div>
               <div>
                <button className='bg-[#baca43]  px-4 rounded-md py-2'>Edit <EditIcon/></button>
               </div>
            </div>
            <div className=' space-x-3 mt-10 '>
            <ProfileTabs/>
            </div>
        </div>
        </>
     );
}

export default Profile;