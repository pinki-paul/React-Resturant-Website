import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my: 10,
        textAlign: "center",
        ml:4,

        "& h4": {
          fontSize: "3.115rem",
          fontWeight: "700",
          mb: 2,
          textAlign: "justify",
        },

        "& p": {
          textAlign: "justify",
          mr:4
        },

      }}>
        <Typography variant='h4' sx={{color: "#1A1A19"}}>Contact Us</Typography>
        <p>Boudin shankle salami, hamburger pork loin meatball ball tip cow pork rump short ribs buffalo burgdoggen. Swine porchetta kielbasa chuck kevin. Brisket pork loin pork chop shoulder tail salami porchetta kevin beef ribs boudin.</p>
      </Box>

      <Box sx={{
        m: 3,
        width: "600px",
        ml: 4,

        "@media(max-width:600px)": {
            width:"300px"
        },
        
      }}>
        <TableContainer component={Paper}>
          <Table aria-aria-label='contact table'>

            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: "black", color: "white" }} align='center'>
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> +1800 003 003 003 (toll free)
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> Example123@gmal.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <LocalPhoneIcon sx={{ color: "green", pt: 1 }} /> +91 123456789
                </TableCell>
              </TableRow>

            </TableBody>

          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact;