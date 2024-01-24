import React from 'react';
import Layout from '../Components/Layout/Layout';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { FoodData } from '../data/Data';

const Menu = () => {
  return (
    <Layout>
      <h1 style={{ fontSize: "3.345rem", 
      fontWeight: "700",
       textAlign: "center", 
       color: "#1A1A19", 
       marginTop:"1.2354rem" }}>
        Our Menu
        </h1>
        
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        {
          FoodData.map(menu => (

            <Card sx={{ maxWidth: "380px", m: 2, mt: 6 }}>
              <CardActionArea>
                <CardMedia
                  src={menu.img}
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  alt={menu.name} />

              </CardActionArea>

              <CardContent>
                <Typography
                  variant='h4'
                  gutterBottom
                  component="div"
                  sx={{ fontWeight: "700" }}>
                  {menu.name}
                </Typography>
                <Typography variant='body2'>{menu.description}</Typography>
                <p
                  style={{
                    fontWeight: "600",
                    fontSize: ".8768rem",
                    marginTop: ".4365rem"
                  }}>
                  Price: Rs. {menu.price}
                </p>
              </CardContent>
            </Card>
          ))
        }
      </Box>
    </Layout>
  )
}

export default Menu;