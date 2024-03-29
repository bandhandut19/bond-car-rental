import { useContext } from "react";
import { InitialContext } from "../Providers/IntialProvider";
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'
import { CiCalendarDate } from "react-icons/ci";

const Reserve = () => {
    const { setFirstName, setLastName, setEmail, setPhone,
        setCdw, setLi, setRt,
        setVehicleType,
        setVehicle,

        setPickupDate,
        pickupDate,

        setReturnDate,
        returnDate,

        cars } = useContext(InitialContext)

    // Contact Information Data handle

    const handleFirstName = (firstName) => {
        setFirstName(firstName)
    }
    const handleLastName = (lastName) => {
        setLastName(lastName)
    }
    const handleEmail = (email) => {
        setEmail(email)
    }
    const handlePhone = (phone) => {
        setPhone(phone)
    }

    // Additonal Charges Data handle

    const handleCdw = (value) => {
        setCdw(value)
    }
    const handleLi = (value) => {
        setLi(value)
    }
    const handleRt = (value) => {
        setRt(value)
    }


    // Vehicle Informations

    const handleVehicleType = (value) => {
        setVehicleType(value)
    }
    const handleVehicle = (value) => {
        setVehicle(value)
    }





    return (
        <>
            {/* header */}
            <div className="navbar bg-base-100 mb-10">
                <div className="flex-1">
                    <h1 className="font-extrabold lg:text-2xl">Reservation</h1>
                </div>
                <div className="flex-none">
                    <button className=" px-2 py-1 rounded-md bg-purple-500 text-white">Print / Download</button>
                </div>
            </div>


            {/* form container  */}
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">

                {/* Reservation details form container */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl mb-5">Reservation Details</h1>


                    <div className="mt-2 border-2 px-5 py-3 rounded-md" >

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Reservation ID</span>
                            </div>
                            <div className="input input-bordered w-full max-w-xs">

                                {/* will generate random id here  */}

                            </div>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Pickup Date<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <div className="border-2 w-full max-w-xs py-1 px-2 rounded-md flex justify-between">

                                <Datetime
                                value={pickupDate}
                                onChange={(date)=>setPickupDate(date)}
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
                                onChange={(date)=>setReturnDate(date)}
                                placeholderText="Select Date and Time"
                                inputProps={{ placeholder: 'Select Date and Time' }}
                                />
                                <CiCalendarDate className="text-3xl" />
                            </div>
                        </label>



                    </div>



                </div>







                {/* Customer Information form container */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl mb-5">Customer Information</h1>
                    {/* info container */}
                    <div className="mt-2 border-2 px-5 py-3 rounded-md">

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">First Name<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <input type="text" name="first-name" onBlur={(e) => handleFirstName(e.target.value)} required className="input input-bordered w-full max-w-xs" />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Last Name<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <input type="text" name="last-name" required onBlur={(e) => handleLastName(e.target.value)} className="input input-bordered w-full max-w-xs" />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <input type="email" required name="email" onBlur={(e) => handleEmail(e.target.value)} className="input input-bordered w-full max-w-xs" />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Phone<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <input type="text" name="phone" required onBlur={(e) => handlePhone(e.target.value)} className="input input-bordered w-full max-w-xs" />
                        </label>

                    </div>
                </div>




                {/* Charges Summery */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl mb-5">Charges Summery</h1>

                </div>




                {/* Vehicle Information */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl mb-5">Vehicle Information</h1>

                    <div className="mt-2 border-2 px-5 py-3 rounded-md">

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Vehicle Type<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <select className="border-2 rounded-md p-2 px-1 w-full max-w-xs"
                                onChange={(e) => handleVehicleType(e.target.value)}
                                name="vehicle-type" id="">
                                <option value=""></option>
                                {cars.map((car) => <option value={car.type} key={car.id}>{car.type} </option>)}

                            </select>
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Vehicle<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <select className="border-2 rounded-md p-2 px-1 w-full max-w-xs"
                                onChange={(e) => handleVehicle(e.target.value)}
                                name="vehicle" id="">
                                <option value=""></option>
                                {cars.map((car) => <option value={car.model} key={car.id}>{car.make}- {car.model} </option>)}

                            </select>
                        </label>

                    </div>


                </div>




                {/* Additional Charges */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl mb-5">Additional Charges</h1>
                    <div className="mt-2 border-2 px-5 py-3 rounded-md" >
                        <ul>
                            <li> <input type="checkbox" onChange={(e) => handleCdw(e.target.checked)} /> Collison Damage Waiver</li>
                            <li> <input type="checkbox" onChange={(e) => handleLi(e.target.checked)} /> Liability Insurance</li>
                            <li> <input type="checkbox" onChange={(e) => handleRt(e.target.checked)} /> Rental Tax</li>
                        </ul>
                    </div>

                </div>



            </div>

        </>
    );
};

export default Reserve;