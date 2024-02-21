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
import { fetchShopProducts, productSearch } from "../../Redux/Thunks/ShopThunk";
import { useEffect, useState } from "react";
import Loader from "../../utils/Loader";

const Shop = () => {
  const navigate = useNavigate();

  const { products, searchedProduct, isLoading } = useSelector(
    (state) => state.shop
  );
  const [searchValue, setSeachVal] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  console.log(searchedProduct);

  const handleSearchChange = (value) => {
    setSeachVal(value);
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (searchValue) {
  //     dispatch(productSearch(searchValue))
  //       .then((response) => {
  //         const searchedProduct = response?.payload?.prodcuts;
  //         console.log(response?.payload?.products, "response");
  //         setSearchedProducts(searchedProduct); // Assuming the response contains searched products data
  //       })
  //       .catch((error) => {
  //         console.error("Error searching products:", error);
  //         setSearchedProducts([]); // If there's an error, set searched products to an empty array
  //       });
  //   } else {
  //     // If search value is empty, reset searched products
  //     setSearchedProducts([]);
  //   }
  // }, [dispatch, searchValue]);

  useEffect(() => {
    if (searchValue) {
      dispatch(productSearch(searchValue)).then((response) => {
        setSearchedProducts(searchedProduct);
      });
    } else {
      setSearchedProducts(products);
    }
  }, [dispatch, products, searchValue]);

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

  // useEffect(() => {
  //   if (searchValue) {
  //     dispatch(productSearch(searchValue));
  //   }
  // }, [dispatch, searchValue]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox handleSearchChange={handleSearchChange} />
      <Container>
        <Box>
          <Grid container spacing={2}>
            {searchedProducts && searchedProducts.length > 0 ? (
              searchedProducts?.map((cureEle, index) => {
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
              })
            ) : (
              <Box
                sx={{
                  minHeight: "40vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 3,
                }}
              >
                <Typography sx={{ textAlign: "center" }}>
                  Loading....
                </Typography>
              </Box>
            )}
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
