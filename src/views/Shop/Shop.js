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
import {
  addToWishList,
  fetchWishList,
  removeFromWishList,
} from "../../Redux/Thunks/wishListThunk";

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, searchedProduct, isLoading } = useSelector(
    (state) => state.shop
  );

  const [compLoaded, setCompLoaded] = useState(false);
  const [searchValue, setSeachVal] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const { wishList } = useSelector((state) => state.wishList);
  const token = localStorage.getItem("auth_token");
  console.log(products, "productsss::>>2");

  useEffect(() => {
    if (token) {
      dispatch(fetchWishList());
    }
  }, [dispatch, token]);

  const [focusSearchBox, setFocusSearchBox] = useState(false);

  useEffect(() => {
    const autoFocus = localStorage.getItem("AutoFocus") === "true";
    if (autoFocus) {
      // This assumes that setting focusSearchBox state will somehow lead to the search box being focused.
      setFocusSearchBox(autoFocus);
      // Clear the flag in localStorage so it doesn't autofocus on subsequent, manual navigations to the Shop page
      localStorage.removeItem("AutoFocus");
    }

    // No need for a cleanup function here to remove "AutoFocus" since we're already doing it above
  }, []);

  const handleToggle = (product_id) => {
    if (token) {
      setIsChecked((prevItems) => ({
        ...prevItems,
        [product_id]: !prevItems[product_id],
      }));

      if (isChecked[product_id]) {
        dispatch(removeFromWishList({ product_id }));
      } else {
        dispatch(addToWishList({ product_id }));
      }
    } else {
      Notification("info", "Please login to Continue");
    }
  };

  useEffect(() => {
    if (token && wishList?.wishlist) {
      const initialCheckedState = products.reduce((acc, product) => {
        const isWishlisted = wishList.wishlist.some(
          (wishItem) => Number(wishItem.product_id) === product.id
        );
        acc[String(product.id)] = isWishlisted;
        return acc;
      }, {});

      setIsChecked(initialCheckedState);
    }
  }, [products, wishList.wishlist, token]);

  console.log(products, "products123", wishList);

  console.log(searchedProduct, isChecked, "isChecked");

  const handleSearchChange = (value) => {
    setSeachVal(value);
  };

  useEffect(() => {
    setSearchedProducts(products);
  }, [dispatch, products]);

  const handleCategorySelect = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
  };

  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      dispatch(
        fetchShopProducts({
          category_id: selectedCategory,
          start: 0,
          count: 100,
          search: searchValue,
        })
      );
      setIsInitialLoad(false); // Set flag to false after initial load
      setCompLoaded(true); // Assuming you need this for some part of your logic
    }
  }, []); // Empty dependency array to run only once on mount

  // Debounced effect for subsequent updates
  useEffect(() => {
    // Skip debouncing on initial load
    if (!isInitialLoad) {
      const debounceDelay = 500; // Delay in milliseconds
      const timer = setTimeout(() => {
        dispatch(
          fetchShopProducts({
            category_id: selectedCategory,
            start: 0,
            count: 100,
            search: searchValue,
          })
        );
        setCompLoaded(true);
      }, debounceDelay);

      // Cleanup function to clear the timer
      return () => clearTimeout(timer);
    }
  }, [dispatch, selectedCategory, searchValue, isInitialLoad]);

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
                  <MenuItem value={0}>All</MenuItem>
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={2}>Female</MenuItem>
                  <MenuItem value={3}>Unisex</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <SearchBox
            handleSearchChange={handleSearchChange}
            searchValue={searchValue}
            focus={focusSearchBox}
          />
        </Grid>

        <Box>
          <Grid container spacing={2}>
            {searchedProducts && searchedProducts.length > 0 ? (
              searchedProducts?.map((cureEle, index) => {
                const {
                  id,
                  main_image,
                  ImgAlt,
                  product_name,
                  product_price,
                  discount_price,
                } = cureEle;
                console.log(cureEle, "main_image");
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
                            <Box className="pro-rating-star"></Box>
                            {isChecked[id] ? (
                              <Box className="set-pro-rating-star">
                                <Typography className="rating-box set-rating-star ">
                                  <StarIcon
                                    onClick={() => {
                                      if (token) {
                                        handleToggle(id);
                                      } else {
                                        Notification(
                                          "error",
                                          "Please log in to add to wishlist"
                                        );
                                      }
                                    }}
                                  />
                                </Typography>
                              </Box>
                            ) : (
                              <Box className="pro-rating-star">
                                <Typography className="rating-box rating-star ">
                                  <StarIcon
                                    onClick={() => {
                                      if (token) {
                                        handleToggle(id);
                                      } else {
                                        Notification(
                                          "error",
                                          "Please log in to add to wishlist"
                                        );
                                      }
                                    }}
                                  />
                                </Typography>
                              </Box>
                            )}
                          </Box>
                          <Typography variant="body2">
                            {parseInt(discount_price)}$
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
                  Data Not Found...
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
