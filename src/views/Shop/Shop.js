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
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import Footer from "../footer/Footer";
import SearchBox from "../../layout/searchcontainer/SearchBox";
export const ShopData = [
  {
    id: "0",
    ShopImg: productimg,
    ImgAlt: "cloth",
    MainText: "Lorem ipsum dolor",
    Price: "000.000",
  },
  {
    id: "1",
    ShopImg: productimg,
    ImgAlt: "cloth",
    MainText: "Lorem ipsum dolor",
    Price: "000.000",
  },
  {
    id: "2",
    ShopImg: productimg,
    ImgAlt: "cloth",
    MainText: "Lorem ipsum dolor",
    Price: "000.000",
  },
  {
    id: "3",
    ShopImg: productimg,
    ImgAlt: "cloth",
    MainText: "Lorem ipsum dolor",
    Price: "000.000",
  },
  {
    id: "4",
    ShopImg: productimg,
    ImgAlt: "cloth",
    MainText: "Lorem ipsum dolor",
    Price: "000.000",
  },
  {
    id: "5",
    ShopImg: productimg,
    ImgAlt: "cloth",
    MainText: "Lorem ipsum dolor",
    Price: "000.000",
  },
  {
    id: "6",
    ShopImg: productimg,
    ImgAlt: "cloth",
    MainText: "Lorem ipsum dolor",
    Price: "000.000",
  },
  {
    id: "7",
    ShopImg: productimg,
    ImgAlt: "cloth",
    MainText: "Lorem ipsum dolor",
    Price: "000.000",
  },
  {
    id: "8",
    ShopImg: productimg,
    ImgAlt: "cloth",
    MainText: "Lorem ipsum dolor",
    Price: "000.000",
  },
];
const Shop = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/shop/new");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box sx={{mt:20}}>
      <SearchBox />
      <Container>
      <Box >
        <Grid container spacing={2}>
          {ShopData.map((cureEle, index) => {
            const { ShopImg, ImgAlt, MainText, Price } = cureEle;
            return (
              <Grid item lg={4} md={4} sm={6} xs={12}>
              <Box sx={{paddingInline:"20px"}}>
                <Card  className="product-card-">
                  <CardActionArea onClick={handleNavigate}>
                    <Box
                    className="product-img"
                    >
                      <CardMedia
                        component="img"
                        height="100%"
                        image={ShopImg}
                        alt={ImgAlt}
                        sx={{objectFit:"contain"}}
                      />
                    </Box>
                  </CardActionArea>
                  <CardContent
                    sx={{
                      background: "#191919",
                      color: "#D9D9D9",
                      paddingInline: "0px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="subtitle1" component="div">
                        <Link to="/shop/new">{MainText}</Link>
                      </Typography>
                      <Box className="pro-rating-star">
                      <StarIcon />
                      </Box>
                    </Box>
                    <Typography variant="body2">{Price}</Typography>
                  </CardContent>
                </Card>
              </Box>

              </Grid>
            );
          })}
        </Grid>
        </Box>
      </Container>
      <section style={{ marginTop: "50px" }}>
        <Footer />
      </section>
    </Box>
  );
};

export default Shop;
