import { useContext,useEffect, useState } from "react";
import { InitialContext } from "../Providers/IntialProvider";
const VehicleInformation = () => {
    const {
        selectedCar,
        setSelectedCar,
        setVehicleType,
        setVehicle,
        vehicleType,
        vehicle,
        cars } = useContext(InitialContext)


    const handleVehicleType = (value) => {
        setVehicleType(value)
    }
    const handleVehicle = (value) => {
        setVehicle(value)
    }
    const handleChange = ()=>{
        
    }


    useEffect(() => {
        if (vehicle && vehicleType) {
            const selectedCar = cars.find(car => car.type === vehicleType && car.model === vehicle);
            setSelectedCar(selectedCar);
        }
    }, [vehicleType, vehicle, cars,setSelectedCar]);


    const [showModal_1,setShowModal_1] = useState(false)
    const [showModal_2,setShowModal_2] = useState(false)

    const viewSelectedCarDetails = () => {

        if (vehicle && vehicleType) {
            // console.log(vehicle,vehicleType)

            const selectedCar = cars.find(car => car.type === vehicleType && car.model === vehicle)
            
            // console.log(selectedCar)
            if(selectedCar == null){
                setShowModal_1(true)
            }
            else{

                setShowModal_2(true)
            }
        }
        else {
            setShowModal_1(true)
        }
    }
    return (
        <div className="mt-2 border-2 px-5 py-3 rounded-md flex flex-col items-center justify-center">

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
            <div className="mt-5">

                <button  htmlFor="my_modal_6" className="border-2 px-5 py-4 bg-green-300 font-bold rounded-md" onClick={viewSelectedCarDetails}>View Selected Car Details</button>
            </div>

            {/* If vehicle not selected */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" onChange={handleChange} checked={showModal_1} />
            {showModal_1 && (
                <div className="modal" role="dialog">
                    <div className="modal-box bg-green-400 flex items-center justify-center flex-col">
                        <h3 className="font-bold text-lg">Select a vehicle properly</h3>
                       
                        <div className="modal-action mt-10">
                           
                            <button  onClick={() => setShowModal_1(false)} className="btn bg-green-700 text-white border-none px-10">Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* If vehicle selected */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" onChange={handleChange} checked={showModal_2} />
            {showModal_2 && (
                <div className="modal" role="dialog">
                    <div className="modal-box bg-green-400 lg:flex lg:items-center lg:justify-center flex-col">
                        <h3 className="font-bold text-lg">Selected vehicle Information</h3>

                        <div className="mt-5">
                            <table className="table">

                            <thead>
                                <tr>
                                    <th className="text-black">Manufacturer</th>
                                    <th className="text-black">Year</th>
                                    <th className="text-black">Model</th>
                                    <th className="text-black">Type</th>
                                    <th className="text-black">Seats</th>
                                    <th className="text-black">Bags</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{selectedCar?.make}</td>
                                    <td>{selectedCar?.year}</td>
                                    <td>{selectedCar?.model}</td>
                                    <td>{selectedCar?.type}</td>
                                    <td>{selectedCar?.seats}</td>
                                    <td>{selectedCar?.bags}</td>
                                </tr>
                            </tbody>

                            </table>
                        </div>

                        <div className="mt-10">
                            <table className="table">

                            <thead>
                                <tr>
                                    <th className="text-black">Hourly Rate</th>
                                    <th className="text-black">Daily Rate</th>
                                    <th className="text-black">Weekly Rate</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>${selectedCar?.rates.hourly}</td>
                                    <td>${selectedCar?.rates.daily}</td>
                                    <td>${selectedCar?.rates.weekly}</td>
                                    
                                </tr>
                            </tbody>

                            </table>
                        </div>
                       
                        <div className="modal-action mt-10">
                           
                            <button  onClick={() => setShowModal_2(false)} className="btn bg-green-700 text-white border-none px-10">Close</button>
                        </div>
                    </div>
                </div>
            )}

        </div>

    );
};

export default VehicleInformation;