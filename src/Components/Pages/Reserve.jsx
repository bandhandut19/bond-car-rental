
const Reserve = () => {
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
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl">Reservation Details</h1>

                </div>



                {/* Customer Information form container */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl">Customer Information</h1>
                    {/* info container */}
                    <div className="mt-2 border-2 px-5 py-3 rounded-md">

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">First Name<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <input type="text" name="first-name" required  className="input input-bordered w-full max-w-xs" />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Last Name<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <input type="text" name="last-name" required  className="input input-bordered w-full max-w-xs" />
                        </label>

                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Email<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <input type="email" required name="email" className="input input-bordered w-full max-w-xs" />
                        </label>
                        
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Phone<span className="text-red-600 font-extrabold">*</span></span>
                            </div>
                            <input type="text" name="phone" required  className="input input-bordered w-full max-w-xs" />
                        </label>

                    </div>



                </div>




                {/* Charges Summery */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl">Charges Summery</h1>

                </div>




                {/* Vehicle Information */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl">Vehicle Information</h1>

                </div>




                {/* Additional Charges */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold text-xl">Additional Charges</h1>

                </div>



            </div>

        </>
    );
};

export default Reserve;