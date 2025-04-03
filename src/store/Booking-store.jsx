import { create } from "zustand";

const bookingsStore = () => ({
  campingId: "",
  price: 0,
  bookings: [],
  range: undefined,
});

const useBookingStore = create(bookingsStore);
export default useBookingStore;
