import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = (type, message) => {
  switch (type) {
    case "info":
      toast.info(message);
      break;
    case "success":
      toast.success(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    case "error":
      toast.error(message || "Something Went Wrong");
      break;
    default:
      toast.info(message);
  }
};

export default Notification;
