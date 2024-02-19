import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReactComponent as CartIcon } from "../../assets/img/icon/cart.svg";
import { ReactComponent as CartIconStroke } from "../../assets/img/icon/cartstroke.svg";
import { ReactComponent as StarIcon } from "../../assets/img/icon/yellowfillstar.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CloseIcon from "@mui/icons-material/Close";
import productimg from "../../assets/img/products/product1.png";
import ReactImageMagnify from "react-image-magnify";
import { productData } from "../Home/Home";
import Footer from "../footer/Footer";
import SearchBox from "../../layout/searchcontainer/SearchBox";
import CustomDrawer from "../../layout/CustomDrawer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../utils/Loader";

// actions
import { fetchProductDetails } from "../../Redux/Thunks/productDetailsThunk";
import { addToCart, fetchCartDetails } from "../../Redux/Thunks/cartThunk";
import Notification from "../../utils/Notification";
const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("auth_token");

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeimg, setActiveimg] = useState("");

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  const {
    main_image_path,
    product,
    productSize,
    productColor,
    productImage,
    relatedProducts,
    isLoading,
    error,
  } = useSelector((state) => state.product);

  const {
    cartData,
    isLoading: cartIsLoading,
    isError: cartIsError,
  } = useSelector((state) => state.cart);

  console.log(cartData);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch]);

  useEffect(() => {
    if (product && main_image_path) {
      setActiveimg(main_image_path);
    }
  }, [product]);

  useEffect(() => {
    if (token) {
      dispatch(fetchCartDetails());
    }
  }, [dispatch]);

  const handleSelectedSize = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      Notification("warning", "Please select a color and size");
    } else {
      const product_id = productId;
      const product_color = selectedColor;
      const product_size = selectedSize;

      dispatch(addToCart({ product_id, product_color, product_size }))
        .then((data) => {
          console.log(data);

          if (data.payload && data.error.message == "Rejected") {
            setIsDrawerVisible(false);
            Notification("error", data.payload);
          } else {
            setIsDrawerVisible(true);
            dispatch(fetchCartDetails());
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
        });
    }
  };

  const list = (anchor) => (
    <Box
      className="drawer-open-section"
      role="presentation"
      onClick={() => setIsDrawerVisible(false)}
      onKeyDown={() => setIsDrawerVisible(false)}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <CloseIcon
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={() => setIsDrawerVisible(false)}
          />
        </Box>

        <Typography sx={{ mt: 2, textAlign: "right" }}>
          ADDED TO YOUR SHOPPING BAG
        </Typography>

        {cartData?.cart_items?.map((item, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box>
                <img
                  src={item?.main_image_path}
                  width={"100%"}
                  alt={item?.main_image_path}
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Typography sx={{ mt: 1 }}>
                {item?.product_details?.product_name}
              </Typography>
              <Typography>
                {item?.product_details?.product_name}/
                {item?.product_details?.product_price}
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button
                  component={Link}
                  to="/shopping-bag"
                  variant="outlined"
                  className="custom-button"
                  sx={{ padding: "7px 40px" }}
                >
                  SEE SHOPPING BAG
                </Button>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Box sx={{ mt: 20 }}>
      <SearchBox />
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box className="product-zoom-left-setion">
              <Grid container spacing={1}>
                <Grid
                  item
                  lg={10}
                  md={10}
                  sm={10}
                  order={{ xs: 1, sm: 1, lg: 1, md: 1 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      height: "100%",
                      justifyContent: "space-around",
                      width: "95%",
                    }}
                  >
                    <div className="slider-section">
                      {/* <ReactImageMagnify
                      className="zoom-img-box"
                        style={{ zIndex: "9" }}
                        {...{
                          smallImage: {
                            alt: "",
                            isFluidWidth: true,
                            src: activeimg,
                            width: 500, 
                            height: 600,
                          },
                          largeImage: {
                            src: activeimg,
                            width: 1200,
                            height: 1200,
                          },
                        }}
                      /> */}
                      <img src={activeimg} alt={activeimg} />
                    </div>
                    <Box className="star-box">
                      <StarIcon />
                    </Box>
                  </Box>
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={2}
                  sm={2}
                  xs={12}
                  order={{ xs: 2, sm: 2, lg: 2, md: 2 }}
                  className="ss"
                >
                  <Swiper
                    direction={
                      window.innerWidth <= 600 ? "horizontal" : "vertical"
                    }
                    slidesPerView={window.innerWidth <= 767 ? 4 : 6}
                    spaceBetween={10}
                    mousewheel={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={{
                      clickable: true,
                      nextEl: "swiper-button-next  next",
                      prevEl: "swiper-button-prev prev",
                    }}
                    modules={[Navigation]}
                  >
                    <SwiperSlide onClick={() => setActiveimg(main_image_path)}>
                      <img src={main_image_path} alt={main_image_path} />
                    </SwiperSlide>

                    {productImage?.map((slide, i) => (
                      <SwiperSlide key={i} onClick={() => setActiveimg(slide)}>
                        <img src={slide} alt={slide} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {/* col-6 right section for text */}
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Box
              sx={{ padding: "0 20px" }}
              className="product-details-right-section"
            >
              <Typography sx={{ fontWeight: "400", fontSize: "22px" }}>
                {product && product?.product_name}
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                {product && parseInt(product?.product_price) + "$"}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                {product && product?.description}
              </Typography>
              <Box>
                <Typography
                  sx={{
                    padding: "20px 0px",
                    borderTop: "1px solid #EFC80C",
                    borderBottom: "1px solid #EFC80C",
                    margin: "20px 0px",
                  }}
                >
                  {productSize &&
                    productSize.length > 0 &&
                    productSize.map((currentElem, index) => (
                      <span
                        key={index}
                        className={`size-text ${
                          currentElem?.product_size === selectedSize
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          handleSelectedSize(currentElem?.product_size)
                        }
                      >
                        <span className="text-color">
                          {currentElem?.product_size}
                          {index !== productSize.length - 1 && " -"}
                        </span>
                      </span>
                    ))}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
                {productColor &&
                  productColor.length > 0 &&
                  productColor.map((item, index) => {
                    const { product_color } = item;
                    const color = product_color.toLowerCase();
                    const selectedClass =
                      selectedColor === color ? `${color}-set-icon` : "";
                    return (
                      <Box
                        key={index}
                        sx={{ mr: 2 }}
                        className={` ${color}-sroke-icon  ${selectedClass}`}
                        onClick={() => handleSelectColor(color)}
                      >
                        <StarIcon width={23} height={23} stroke={color} />
                      </Box>
                    );
                  })}
              </Box>
              <Button
                onClick={() => [
                  handleAddToCart(),
                  // addToCart({
                  //   productId: product?.id,
                  //   productSize: selectedSize,
                  //   productColor: selectedColor,
                  // }),
                ]}
                variant="outlined"
                className="custom-button"
                sx={{ paddingInline: "35px" }}
              >
                <span style={{ marginRight: "7px" }}>ADD TO BAG </span>{" "}
                <CartIconStroke width={18} height={18} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <section style={{ margin: "50px 0" }}>
        <Container>
          <Grid container spacing={5}>
            {relatedProducts.map((cureEle, index) => {
              const {
                id,
                Rating,
                main_image,
                main_image_path,
                product_name,
                product_price,
                discount_price,
              } = cureEle;
              return (
                <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
                  <Card className="product-card">
                    <Grid container spacing={2}>
                      <Grid item lg={6} md={5} sm={5} xs={5}>
                        <Link to={`/shop/new/${id}`}>
                          <Box className="img-box">
                            <img src={main_image_path} alt={main_image} />
                          </Box>
                        </Link>
                      </Grid>
                      <Grid item lg={6} md={7} sm={7} xs={7}>
                        <Box className="card-contain">
                          <Box className="head-section">
                            <Typography className="rating-box rating-text-box">
                              <StarIcon />
                              <span className="rating-text"> {Rating}</span>
                            </Typography>
                            <Typography className="rating-box rating-star">
                              <StarIcon />
                            </Typography>
                          </Box>
                          <Box className="card-details-box">
                            <Typography className="main-text">
                              <Link to="/shop/new/1">{product_name}</Link>
                            </Typography>
                            <Box className="price-box">
                              <Typography className="main-price-text">
                                {parseInt(product_price)}$
                              </Typography>
                              <Typography className="sub-rpice">
                                DISCOUNT :
                                <del> {parseInt(discount_price)}$</del>
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 2,
                              }}
                            >
                              <Button
                                onClick={() => navigate(`/shop/new/${id}`)}
                                variant="contained"
                                sx={{
                                  background: "#000000",
                                  color: "#ffffff",
                                  width: "100%",
                                  borderRadius: "0",
                                  py: 1,
                                }}
                                color="secondary"
                              >
                                <CartIcon height={18} width={18} />{" "}
                                <span style={{ marginLeft: "7px" }}>
                                  Add To Bag
                                </span>
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </section>
      <section>
        <Footer />
      </section>
      <CustomDrawer
        onClose={() => setIsDrawerVisible(false)}
        state={isDrawerVisible}
        children={list("right")}
      />
    </Box>
  );
};
export default ProductDetails;
