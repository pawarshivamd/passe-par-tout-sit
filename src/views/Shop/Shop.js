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
import { useDispatch, useSelector } from "react-redux";
import { fetchShopProducts } from "../../Redux/Thunks/ShopThunk";
import { useEffect } from "react";
import Loader from "../../utils/Loader";
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

  const { products, isLoading } = useSelector((state) => state.shop);

  const dispatch = useDispatch();

  useEffect(() => {
    const category_id = 2;
    const start = 0;
    const count = 10;

    dispatch(fetchShopProducts({ category_id, start, count }));
  }, [dispatch]);

  const handleNavigate = (id) => {
    navigate(`/shop/new/${id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox />
      <Container>
        <Box>
          <Grid container spacing={2}>
            {products?.map((cureEle, index) => {
              const { id, main_image, ImgAlt, product_name, product_price } =
                cureEle;
              return (
                <Grid item lg={4} md={4} sm={6} xs={12} key={id}>
                  <Box>
                    <Card className="product-card-">
                      <CardActionArea onClick={() => handleNavigate(id)}>
                        <Box className="product-img">
                          <CardMedia
                            component="img"
                            height="100%"
                            image={main_image}
                            alt={ImgAlt}
                            sx={{ objectFit: "contain" }}
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
                            <Link to={`/shop/new/${id}`}>{product_name}</Link>
                          </Typography>
                          <Box className="pro-rating-star">
                            <StarIcon />
                          </Box>
                        </Box>
                        <Typography variant="body2">
                          {parseInt(product_price)}$
                        </Typography>
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
