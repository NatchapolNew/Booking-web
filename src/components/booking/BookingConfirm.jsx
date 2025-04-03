import useBookingStore from "@/store/Booking-store";
import Buttons from "../Form/Buttons";
import { SignInButton, useAuth } from "@clerk/clerk-react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { createBooking } from "@/api/Booking";
import { data, useNavigate } from "react-router";

const BookingConfirm = () => {
  //Zustand
  const range = useBookingStore((state) => state.range);
  const checkIn = range?.from;
  const checkOut = range?.to;
  const campingId = useBookingStore((state) => state.campingId);
  //clerk
  const { getToken, userId } = useAuth();
  //Hook form
  const { handleSubmit, setValue, formState } = useForm();
  const { isSubmitting } = formState;
  
  //navigate
  const navigate = useNavigate()
  if (!userId) {
    return (
      <div className="flex justify-center">
        <SignInButton
          mode="modal"
          forceRedirectUrl={`/user/camping/${campingId}`}
        >
          <Button>SignIn</Button>
        </SignInButton>
      </div>
    );
  }

  useEffect(() => {
    if (campingId) setValue("campingId", campingId);
    if (checkIn) setValue("checkIn", checkIn);
    if (checkOut) setValue("checkOut", checkOut);
  }, [range]);

  const hdlBooking = async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await getToken()
    try{
        const res = await createBooking(token,value)
        const bookingId = res.data.result
        navigate(`/user/checkout/${bookingId}`)
        console.log(res.data.result)
    }catch(error){
        console.log(error)
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(hdlBooking)}>
        <Buttons text="Confirm Button" isPending={isSubmitting} />
      </form>
    </div>
  );
};
export default BookingConfirm;
