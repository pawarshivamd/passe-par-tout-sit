import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import productimg from "../../assets/img/products/product1.png";
import { Link } from "react-router-dom";
import { ReactComponent as Yellowfillstar } from "../../assets/img/icon/yellowfillstar.svg";
import Footer from "../footer/Footer";
const ShopData = [
  {
    id:"0",
    ShopImg:productimg,
    ImgAlt:"cloth",
    MainText:"Lorem ipsum dolor",
    Price:"000.000",
  },
  {
    id:"1",
    ShopImg:productimg,
    ImgAlt:"cloth",
    MainText:"Lorem ipsum dolor",
    Price:"000.000",
  },
  {
    id:"2",
    ShopImg:productimg,
    ImgAlt:"cloth",
    MainText:"Lorem ipsum dolor",
    Price:"000.000",
  },
  {
    id:"3",
    ShopImg:productimg,
    ImgAlt:"cloth",
    MainText:"Lorem ipsum dolor",
    Price:"000.000",
  },
  {
    id:"4",
    ShopImg:productimg,
    ImgAlt:"cloth",
    MainText:"Lorem ipsum dolor",
    Price:"000.000",
  },
  {
    id:"5",
    ShopImg:productimg,
    ImgAlt:"cloth",
    MainText:"Lorem ipsum dolor",
    Price:"000.000",
  },
  {
    id:"6",
    ShopImg:productimg,
    ImgAlt:"cloth",
    MainText:"Lorem ipsum dolor",
    Price:"000.000",
  },
  {
    id:"7",
    ShopImg:productimg,
    ImgAlt:"cloth",
    MainText:"Lorem ipsum dolor",
    Price:"000.000",
  },
  {
    id:"8",
    ShopImg:productimg,
    ImgAlt:"cloth",
    MainText:"Lorem ipsum dolor",
    Price:"000.000",
  },
]
const Shop = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
        {ShopData.map((cureEle,index)=>{
          const {ShopImg,ImgAlt,MainText,Price} = cureEle;
          return(
            <Grid item lg={4} md={4} sm={6} xs={12}>
            <Card sx={{borderRadius:"0px"}}>
              <CardActionArea>
              <Box sx={{height:"350px",width:"min(100% - 0px, 100%)",marginInline:"auto"}}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={ShopImg}
                  alt={ImgAlt}
                />
              </Box>
              </CardActionArea>
                <CardContent sx={{background:"#191919" ,color:"#D9D9D9" , paddingInline:"0px"}}>
                  <Box sx={{display:"flex" , justifyContent:"space-between"}}>
                  <Typography variant="subtitle1" component="div">
                    <Link>{MainText}</Link>
                  </Typography>
                  <Yellowfillstar />
                  </Box>
                  <Typography variant="body2" >
                  {Price}
                  </Typography>
                </CardContent>
            </Card>
          </Grid>
          )
        })}

        </Grid>
      </Container>
      <section style={{marginTop:"50px"}}>
      <Footer />
      </section>
    </Box>
  );
};

export default Shop;
