import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsIcon from '@mui/icons-material/Settings';
import CampaignIcon from '@mui/icons-material/Campaign';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// import ProfilePop from "../../comopnents/ProfilePop";
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function ProfilePop() {
    return ( 
        <>
        <div className=" px-10 ">
     <div className="w-64 py-2">
     <AccountCircleIcon className="me-2"/>
      Profile 
     </div>
     <Divider/>
     <div className="w-64 py-2">
      <LocalShippingIcon className="me-2"/>
      Orders 
     </div>
     <Divider/>
     <div className="w-64 py-2">
     <SettingsIcon className="me-2"/> Setting 
     </div>
     <Divider/>
     <div className="w-64 py-2">
    <CampaignIcon className="me-2"/>  Help center
     </div>
     <Divider/>
     <div className="w-64 py-2">
     <PowerSettingsNewIcon className="text-red-500 me-2 "/>
     Logout
     </div>
  </div>
        </>
     );
}

export default ProfilePop;