import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from "react"
import useBookingStore from "@/store/Booking-store"
const defaultSelected ={
    from:undefined,
    to:undefined,
}

const BookingCalendar = () => {
    const [range,setRange] = useState(defaultSelected)
    useEffect(()=>{
        useBookingStore.setState({
            range:range,

        })
    },[range])
   
  return (
    <div>
    <Calendar
    mode="range"
    selected={range}
    onSelect={setRange}
    // disabled={range}
    className="rounded-md border"
    />
    </div>
  )
}
export default BookingCalendar