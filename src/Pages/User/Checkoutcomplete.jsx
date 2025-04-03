import { checkOutStatus } from "@/api/Booking";
import { createAlert } from "@/util/createAlert";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router";

const Checkoutcomplete = () => {
  const navigate = useNavigate()
  const { session } = useParams();
  const { getToken } = useAuth();
  const [status, setStatus] = useState(null);
  console.log(session);
  const fetchPayment = async () => {
    const token = await getToken();
    try {
      const res = await checkOutStatus(token, session);
      setStatus(res.data.status);
      createAlert("success",res.data.message)
      navigate("/user/myorders")
    } catch (error) {
      console.log(error);
    }
  };
  if (status === 'open') {
    return (
      <Navigate to="/" />
    )
  }
  useEffect(() => {
    fetchPayment();
  }, []);

  return <div>Loading...</div>;
};
export default Checkoutcomplete;
