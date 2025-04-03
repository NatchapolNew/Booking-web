const calNight = (checkIn, checkOut) => {
  const milliDay = checkOut.getTime() - checkIn.getTime();
  //milli 1000 = 1 วินาที =>นาที =>ชั่วโมง =>วัน
  const diffDay = milliDay / (1000 * 60 * 60 * 24);
  return diffDay;
};
export const calTotal = (checkIn, checkOut, price) => {
  if (!checkIn || !checkOut) return;
  const totalNights = calNight(checkIn, checkOut);
  const total = totalNights * price;
  return { totalNights, total };
};
