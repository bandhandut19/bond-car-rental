import { CiCalendarDate } from "react-icons/ci";
import Datetime from 'react-datetime';
import { useContext } from "react";
import { InitialContext } from "../Providers/IntialProvider";
import generateReservationID from "../utils/generateReservation";
const ReservationDetails = () => {

    const { setPickupDate, pickupDate, setReturnDate, returnDate, duration } = useContext(InitialContext)

   
    return (
        <div className="mt-2 border-2 px-5 py-3 rounded-md" >

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Reservation ID</span>
                </div>
                <div className="input input-bordered w-full max-w-xs">

                    <span className="ml-2 text-green-700 font-bold italic">{generateReservationID("reservationid")}</span>

                </div>
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Pickup Date<span className="text-red-600 font-extrabold">*</span></span>
                </div>
                <div className="border-2 w-full max-w-xs py-1 px-2 rounded-md flex justify-between">

                    <Datetime
                        value={pickupDate}
                        onChange={(date) => setPickupDate(date)}
                        placeholderText="Select Date and Time"
                        inputProps={{ placeholder: 'Select Date and Time' }}
                    />
                    <CiCalendarDate className="text-3xl" />
                </div>
            </label>


            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Return Date<span className="text-red-600 font-extrabold">*</span></span>
                </div>
                <div className="border-2 w-full max-w-xs py-1 px-2 rounded-md flex justify-between">

                    <Datetime
                        value={returnDate}
                        onChange={(date) => setReturnDate(date)}
                        placeholderText="Select Date and Time"
                        inputProps={{ placeholder: 'Select Date and Time' }}
                    />
                    <CiCalendarDate className="text-3xl" />
                </div>
            </label>

            <div className="mt-5 grid grid-cols-2 items-center justify-center px-1">
                <div>
                    <h1 className="label-text">Duration</h1>
                </div>
                <div>
                    <div className="border-2 py-1 px-2 rounded-md bg-green-100">
                        <p className="text-sm">
                            {duration && (duration.weeks > 0 || duration.days > 0 || duration.hours > 0 || duration.minutes > 0) ? (
                                <span>
                                    {duration.weeks > 0 && <span>{duration.weeks} Week</span>}
                                    {duration.weeks > 0 && (duration.days > 0 || duration.hours > 0 || duration.minutes > 0) && <span className="ml-1">,</span>}
                                    {duration.days > 0 && <span className="ml-1">{duration.days} Day</span>}
                                    {duration.days > 0 && (duration.hours > 0 || duration.minutes > 0) && <span className="ml-1">,</span>}
                                    {duration.hours > 0 && <span className="ml-1">{duration.hours} Hour</span>}
                                    {duration.hours > 0 && duration.minutes > 0 && <span className="ml-1">,</span>}
                                    {duration.minutes > 0 && <span className="ml-1">{duration.minutes} Minute</span>}
                                </span>
                            ) : "Select date and time"}
                        </p>



                    </div>
                </div>

            </div>


            <label className="form-control w-full max-w-xs">
                <div className="label mt-3">
                    <span className="label-text">Discount</span>
                </div>
                <div className="border-2 w-full max-w-xs py-5 px-2 rounded-md flex justify-between">
                    {/* <span>discount will be here</span> */}

                </div>
            </label>


        </div>
    );
};

export default ReservationDetails;