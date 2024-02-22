import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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

  const [compLoaded, setCompLoaded] = useState(false);
  const [searchValue, setSeachVal] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    let timeoutId;

    if (searchValue) {
      timeoutId = setTimeout(() => {
        dispatch(productSearch(searchValue)).then((response) => {
          setSearchedProducts(searchedProduct);
        });
      }, 1000);
    } else {
      setSearchedProducts(products);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [dispatch, products, searchValue]);

  const handleCategorySelect = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    dispatch(
      fetchShopProducts({ category_id: categoryId, start: 0, count: 10 })
    );
  };

  useEffect(() => {
    const category_id = 1;
    const start = 0;
    const count = 10;

    dispatch(fetchShopProducts({ category_id, start, count }));
    setCompLoaded(true);
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
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <FormControl
                variant="outlined"
                sx={{
                  mr: 3,
                  mb: 2,
                  minWidth: 220,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "#efc80c",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#efc80c",
                    },
                  },
                }}
              >
                <InputLabel
                  id="category-select-label"
                  sx={{
                    color: "#888888 !important",
                  }}
                >
                  Select Category
                </InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  size="small"
                  value={selectedCategory}
                  label="Select Category"
                  onChange={handleCategorySelect}
                  sx={{
                    color: "#FFF",
                    "& .MuiSelect-icon": {
                      color: "#FFF",
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: "#fff !important" },
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: "white",
                      },
                    },
                  }}
                >
                  <MenuItem value={1}>Men</MenuItem>
                  <MenuItem value={2}>Women</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <SearchBox handleSearchChange={handleSearchChange} />
        </Grid>

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
