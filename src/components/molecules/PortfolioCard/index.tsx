import React from 'react'
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box } from '@mui/material'

function index() {
  return (
    <>
      <TabContext value={''} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList aria-label="lab API tabs example">
            <Tab label="Currency Type" value="1" />
            <Tab label="Currency Value" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">Currency Type</TabPanel>
        <TabPanel value="2">profit/loss</TabPanel>
      </TabContext>
    </>
  )
}

export default index