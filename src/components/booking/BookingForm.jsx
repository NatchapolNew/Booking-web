import useBookingStore from "@/store/Booking-store";
import { Card, CardTitle } from "../ui/card";
import { calTotal } from "@/util/booking";
import { formatNumber } from "@/util/formats";
import BookingConfirm from "./BookingConfirm";



const BookingForm = () => {
  const price = useBookingStore((state) => state.price);
  const range = useBookingStore((state) => state.range);
  const checkIn = range?.from;
  const checkOut = range?.to;
  const result = calTotal(checkIn, checkOut, price);

   if(!range || !range.from || !range.to) return null

  return (
    <>
      <Card className="p-8 my-2">
        <CardTitle className="mb-4">สรุป</CardTitle>
        <p className="flex justify-between">
          <span>
            {`฿${price} x ${result.totalNights}คืน`}
          </span>

          <span className="font-semibold">
            {formatNumber(result.total)}
          </span>

        </p>
      </Card>
      {/* Confirm booking */}
      <BookingConfirm/>
    </>
  );
};
export default BookingForm;
