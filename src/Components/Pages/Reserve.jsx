import { useContext } from "react";
import { InitialContext } from "../Providers/IntialProvider";
import 'react-datetime/css/react-datetime.css'
import ChargesSummary from "../ChargesSummary/ChargesSummary";
import ReservationDetails from "../ReservationDetails/ReservationDetails";
import VehicleInformation from "../VehicleInformation/VehicleInformation";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import PDFDocument from "../InvoicePDF/PDFDocument";
import { Link } from "react-router-dom";


const Reserve = () => {
    const { setFirstName, setLastName, setEmail, setPhone,
        setCdw, setLi, setRt,
        // email,firstName,lastName,phone
    } = useContext(InitialContext)

    // const data = {email,firstName,lastName,phone}

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


    // Print and download



    return (
        <>
            {/* header */}
            <div className="navbar bg-base-100 mb-10">
                <div className="flex-1">
                    <h1 className="font-extrabold lg:text-2xl">Reservation</h1>
                </div>
                <div className="flex-none">
                    {/* <PDFDownloadLink document={<PDFDocument data={data}></PDFDocument>} fileName="bcr_invoice_">
                        {({loading})=>
                        
                        loading ?
                        <button  className=" px-2 py-1 rounded-md bg-purple-500 text-white">Creating PDF</button>
                            :
                        <button  className=" px-2 py-1 rounded-md bg-purple-500 text-white">Print / Download</button>
                        }
                        
                    </PDFDownloadLink> */}

                     
                        {
                        
                        
                        <Link to='/invoice'>
                        <button className=" px-2 py-1 rounded-md bg-purple-500 text-white">Print / Download</button>
                        </Link>
                        }
                        
                    


                </div>
            </div>


            {/* form container  */}

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">

                {/* Reservation details form container */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl mb-5">Reservation Details</h1>
                    <ReservationDetails></ReservationDetails>
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

                {/* Charges Summary */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl mb-5">Charges Summary</h1>

                    <ChargesSummary></ChargesSummary>

                </div>


                {/* Vehicle Information */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl mb-5">Vehicle Information</h1>

                    <VehicleInformation></VehicleInformation>

                </div>


                {/* Additional Charges */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl mb-5">Additional Charges</h1>
                    <div className="mt-2 border-2 px-5 py-3 rounded-md" >
                        <ul>
                            <li className="mb-5">
                                <div className="flex justify-between">
                                    <input type="checkbox" onChange={(e) => handleCdw(e.target.checked)} />
                                    <h1 className="ml-2">Collison Damage Waiver</h1>
                                    <h2 className="ml-10">$9.00</h2>
                                </div>
                            </li>
                            <li className="mb-5">
                                <div className="flex justify-between">
                                    <input type="checkbox" onChange={(e) => handleLi(e.target.checked)} />
                                    <h1 className="ml-2">Liability Insurance</h1>
                                    <h2 className="ml-2">$15.00</h2>
                                </div>
                            </li>
                            <li className="mb-5">
                                <div className="flex justify-between">
                                    <input type="checkbox" onChange={(e) => handleRt(e.target.checked)} />
                                    <h1 className="ml-2">Rental Tax</h1>
                                    <h2 className="ml-2">11.5%</h2>
                                </div>


                            </li>
                        </ul>
                    </div>

                </div>



            </div>






        </>
    );
};

export default Reserve;