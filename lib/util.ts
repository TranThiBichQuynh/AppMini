export const fetchThisWeeks = () => {
  const today = new Date(); // 今日の日付を取得
  const dates = [];
  const diff = today.getDay();
  for(var i = 0 ; i < 7 ; i ++) {
    dates.push(new Date(today.getTime() + (i * 24 * 60 * 60 * 1000)))
  }
  return dates;
}

export const isSameDate = (a: any, b: any) => {
  if(a.getFullYear() != b.getFullYear())return false;
  if(a.getMonth() != b.getMonth())return false;
  if(a.getDate() != b.getDate())return false;
  return true;
}

export const isWorkTime = (startTime: any, targetTime: any) => {
  if(targetTime < startTime.getHours())return false;
  if(startTime.getHours() + 8 < targetTime)return false;
  return true;
}

export const isIncludeWorkday = (workdays: any, workday: any, hour: any) => {
  const _isSameDate = workdays.some((v: any) => isSameDate(v, workday))
  if(!_isSameDate) return false;
  const d = workdays.filter((v: any) => isSameDate(v, workday))[0]
  const _isWorkTime = isWorkTime(d, hour)
  return _isWorkTime
}

export const getReservation = (reservations: any, workday: any, hour: any) => {
  const reservation = reservations.find((_reservation: any) => {
    const reservationAt = new Date(_reservation.reservationAt);
    if(!isSameDate(workday, reservationAt)) return false;
    if(reservationAt.getHours() !== hour)return false;
    return true;
  })
  return reservation
}

export const getPreviousReservations = (reservations: any) => {
  return reservations.filter((reservation: any) => {
    const a: number = new Date().getTime()
    const b: number = new Date(reservation.reservationAt).getTime();
    return a - b > 0;
  })
}

export const createReservationData = (date: any, staffId: any, profile: any) => {
  return {
    userName: profile.displayName,
    lineId: profile.userId,
    staff: staffId,
    course: 1,
    reservationAt: date,
    clientFreeForm: '',
    staffFreeForm: `${profile.displayName}様 ご予約ありがとうございます。お待ちしております。`,
  }
}

export const dateToString = (dateString: any) => {
  return new Date(dateString).toLocaleString()
}
