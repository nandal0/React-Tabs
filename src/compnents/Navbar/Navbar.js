import React from 'react'
import Cisco from '../../assests/Cisco'
import './Navbar.css'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Bom from '../Bom';
import Cal from '../Cal';
import SnapShot from '../SnapShot';



function TabPanel(props) {
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

  TabPanel.propTypes = {
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
  


const NavigationBar = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
    <div>
        <div className="navbar-header">
            <div className="header-content">
                <Cisco/>
                <h2>
                    ISE - BREAKER
                </h2>
                <Cisco/>
            </div>

            <div className="navbar-tab">
            <Box className="navbar-tab" >
      < >
        <Tabs className='navbar-tabs' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  sx={{color:"gray"}} label="ISE BOM Creator" {...a11yProps(0)} />
          <Tab sx={{color:"gray"}} label="PDI-LOE Calculator" {...a11yProps(1)} />
          <Tab sx={{color:"gray"}}  label="Snapshots" {...a11yProps(2)} />
        </Tabs>
      </>
      <TabPanel  value={value} index={0}>
        <Bom/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Cal/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SnapShot/>
      </TabPanel>
    </Box>
            </div>
        </div>
    </div>
    )
} 
export default NavigationBar
