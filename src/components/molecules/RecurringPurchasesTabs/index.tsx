import React from 'react'
import Icon from '../../atoms/Icon'
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from '@mui/material';

function ReccurringTab() {
    
  return (
    <>
        <TabContext value={''} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList aria-label="lab API tabs example">
                <Icon icon={'reload'}/>
                <Tab label="Buy 2,000 of BTC every 02 weeks" value="1" />
            </TabList>
            </Box>
            <TabPanel value="1">Next occurance on February 20, 2020</TabPanel>
      </TabContext>
    </>
  )
}

export default ReccurringTab