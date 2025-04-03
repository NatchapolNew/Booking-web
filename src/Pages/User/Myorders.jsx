import { listBookings } from "@/api/Booking";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDate, formatNumber } from "@/util/formats";
import BookingPDF from "@/components/booking/BookingPDF";

const Myorders = () => {
  const { getToken } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    const token = await getToken();
    try {
      const res = await listBookings(token);
      setBookings(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(bookings);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>รหัสการจอง</TableHead>
            <TableHead>ชื่อสถานที่</TableHead>
            <TableHead>จำนวนคืน</TableHead>
            <TableHead>ราคารวม</TableHead>
            <TableHead>CheckIn</TableHead>
            <TableHead>CheckOut</TableHead>
            <TableHead>Invoice</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings?.map((item) => {
            const { id, total, totalNights, checkIn, checkOut } = item;
            const { title } = item.Landmark;
            return (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell>{title}</TableCell>
                <TableCell>{totalNights}</TableCell>
                <TableCell>{formatNumber(total)}</TableCell>
                <TableCell>{formatDate(checkIn)}</TableCell>
                <TableCell>{formatDate(checkOut)}</TableCell>
                <TableCell>
                  <BookingPDF booking={item}/>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default Myorders;
