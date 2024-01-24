import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <>
            <Box sx={{ bgcolor: "#1A1A19", color: "#fff", p: 2, textAlign: "center" }}>

                <Box sx={{my:1, "& svg": {
                    fontSize:"2rem",
                    mr:2,
                    cursor:"pointer",
                    transition:"all 0.3s ease-in-out"
                },
                "& svg:hover": {
                    color:"goldenrod",
                    transform:"translateY(-5px)",
                    transition:"all 0.3s ease-in-out"
                } }}>
                    {/* icons */}
                    <InstagramIcon />
                    <FacebookIcon />
                    <LinkedInIcon />
                    <TwitterIcon />
                </Box>

                <Typography sx={{
                    fontSize: "1rem", "@media(max-width:600px)": {
                        fontSize: "1rem"
                    }
                }}>
                    &copy; PINKI PAUL | All Rights Reserved
                </Typography>
            </Box>
        </>
    )
}

export default Footer;