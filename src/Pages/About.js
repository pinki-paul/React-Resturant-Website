import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:11,
        textAlign:"center",
        p:2,

        "& h4":{
          fontWeight:"800",
          my:3,
          fontSize:"3.115rem",
        },
        "& p":{
          textAlign:"justify"
        },

        "@media (max-width:600px)":{
          mt:0,

          "& h4":{
            fontSize:"2.12rem"
          }
        }
      }}>

        <Typography variant='h4' sx={{color: "#1A1A19"}}>Welcome To My Resturant </Typography>

        <p>A restaurant is a place where people visit to eat and drink the food being prepared on the premises and pays for the same. The food is served at the table to have a comfortable visit for your meals. The restaurant offers a menu with various options for your meal, to choose from.</p>

        <br />
        <p>Bacon ipsum dolor amet tenderloin bacon fatback, filet mignon corned beef venison tri-tip ribeye pork belly meatball burgdoggen pancetta. Bresaola pancetta bacon spare ribs, swine pork loin andouille corned beef. Tail filet mignon turducken, pork belly salami short ribs sirloin boudin pork biltong cupim alcatra kevin doner landjaeger. Tongue burgdoggen brisket tri-tip, meatball doner pork chop beef bresaola. Tail fatback chuck tenderloin ham ribeye. Tenderloin pork loin strip steak, cupim kielbasa leberkas andouille ribeye pastrami.

          Doner rump capicola, pastrami swine tri-tip bresaola turkey filet mignon pig cupim beef ribs kevin pork chop. Pastrami alcatra filet mignon, jowl tri-tip drumstick chicken sirloin tenderloin porchetta jerky buffalo kevin swine rump. Cupim hamburger drumstick short loin tri-tip, pig pork loin landjaeger sausage short ribs burgdoggen swine filet mignon. Leberkas ribeye ham hock tri-tip, tenderloin corned beef jowl porchetta doner burgdoggen swine pork belly beef ribs chuck kielbasa. Burgdoggen ball tip pork belly brisket.</p>
      </Box>
    </Layout>
  )
}

export default About;