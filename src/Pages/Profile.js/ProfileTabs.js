import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MyOrderCard from '../../comopnents/MyOrderCard';
import AddressCard from '../../comopnents/AddressCard';

function CustomTabPanel(props) {
    
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProfileTabs() {
    let orders =[1,2,3,4,5,6,7,8,9]
    let address = [1,2,3]
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='success' className='mx-[550px]'>
          <Tab label="My Orders" {...a11yProps(0)} color='primary'/>
          <Tab label="Address" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='flex justify-center  flex-wrap ms-5 '>
            {orders.map(i=>(
                
 <MyOrderCard/>
            ))}
       
        </div>
     
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>

      <div className='flex justify-center py-5 flex-wrap ms-5 bg-[#EDF4F2]'>
        {address.map(i=>(
            
            <AddressCard/>
        ))}

      </div>
       
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
