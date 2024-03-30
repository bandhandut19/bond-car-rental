 const generateReservationID = (starting)=>{
    const string = Math.random().toString(36).substring(2,8)
    return `${starting}_${string}`
}
export default generateReservationID