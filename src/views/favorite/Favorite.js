import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/img/icon/closeicon.svg";
import {
  fetchWishList,
  removeFromWishList,
} from "../../Redux/Thunks/wishListThunk";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../utils/Loader";

const Favorite = () => {
  const token = localStorage.getItem("auth_token");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false); // State for confirmation modal
  const [productToRemove, setProductToRemove] = useState(null); // State to store product ID to remove

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    wishList: { wishlist },
    isLoading,
  } = useSelector((state) => state.wishList);

  useEffect(() => {
    if (token) {
      dispatch(fetchWishList());
    } else {
      navigate("/login");
      Notification("info", "Please login to Continue");
    }
  }, [dispatch]);

  const handleProductRemove = (product_id) => {
    if (product_id) {
      setProductToRemove(product_id); // Store the product ID to remove
      setShowConfirmationModal(true); // Open the confirmation modal
    }
  };

  const confirmProductRemove = () => {
    // Action to remove the product
    dispatch(removeFromWishList({ product_id: productToRemove }))
      .then(() => {
        dispatch(fetchWishList());
        setShowConfirmationModal(false); // Close the confirmation modal after successful removal
      })
      .catch((error) => {
        console.error("Error removing item:", error);
        setShowConfirmationModal(false); // Close the confirmation modal if there's an error
      });
  };

  const cancelProductRemove = () => {
    // Cancel action, close the modal
    setShowConfirmationModal(false);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ mt: 5, mb: 5 }}>
      <Container>
        <Grid container spacing={2}>
          {wishlist && wishlist.length > 0 ? (
            wishlist.map((cureEle, index) => {
              const { id, main_image, ImgAlt, product_name, product_price } =
                cureEle.product;
              console.log(cureEle, "cureEle");
              return (
                <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
                  <Card className="product-card-">
                    <Box className="product-img">
                      <Link to={`/shop/new/${id}`}>
                        <CardMedia
                          component="img"
                          height="100%"
                          image={main_image}
                          alt={ImgAlt}
                          sx={{ objectFit: "contain" }}
                        />
                      </Link>
                    </Box>
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
                          <Link>{product_name}</Link>
                        </Typography>
                        <CloseIcon
                          onClick={() =>
                            handleProductRemove(cureEle?.product_id)
                          }
                          className="close-icon"
                        />
                      </Box>
                      <Typography variant="body2">{product_price}</Typography>
                    </CardContent>
                  </Card>
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
                No items in Favorite !!
                <Button variant="contained">
                  {" "}
                  <RouterLink to={"/shop"} style={{ color: "#3d3d3d" }}>
                    {" "}
                    Go To Shop
                  </RouterLink>
                </Button>
              </Typography>
            </Box>
          )}
        </Grid>

        {/* Confirmation Modal */}
        {showConfirmationModal && (
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              zIndex: 9999,
            }}
          >
            <Typography variant="h6" color="#000" gutterBottom>
              Are you sure you want to delete?
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                onClick={confirmProductRemove}
                variant="contained"
                color="primary"
              >
                Yes
              </Button>
              <Button
                onClick={cancelProductRemove}
                variant="contained"
                color="secondary"
              >
                Cancel
              </Button>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Favorite;
