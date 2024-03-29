
const Reserve = () => {
    return (
        <>
            {/* header */}
            <div className="navbar bg-base-100 mb-10">
                <div className="flex-1">
                    <h1 className="font-extrabold text-2xl">Reservation</h1>
                </div>
                <div className="flex-none">
                    <button className="btn bg-purple-500 text-white">Print / Download</button>
                </div>
            </div>


            {/* form container  */}
            <div className="grid grid-cols-3 gap-10">

                {/* Reservation details form container */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold">Reservation Details</h1>

                </div>



                {/* Customer Information form container */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold">Customer Information</h1>

                </div>




                {/* Charges Summery */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold">Charges Summery</h1>

                </div>




                {/* Vehicle Information */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold">Vehicle Information</h1>

                </div>




                {/* Additional Charges */}
                <div>
                    <h1 className="border-b-2 border-purple-500 font-bold">Additional Charges</h1>

                </div>



            </div>

        </>
    );
};

export default Reserve;