import { useContext, useEffect, useState } from "react";
import { InitialContext } from "../Providers/IntialProvider";

const ChargesSummary = () => {
    const { cdw, li, rt, selectedCar, duration, total, setTotal,
        setDailyTotal,
        setWeeklyTotal,
        sethourlyTotal, } = useContext(InitialContext)
    const weeks = duration?.weeks
    const days = duration?.days
    const hours = duration?.hours
    const unit = 1;

    const calDailyRates = days * (selectedCar?.rates?.daily)
    const calWeeklyRates = weeks * (selectedCar?.rates?.weekly)

    const calHourlyRates = hours * (selectedCar?.rates?.hourly)

    const [rentalTax, setRentalTax] = useState(0)



    useEffect(() => {
        const additionalTotal = (cdw && 9.00) + (li && 15.00)
        let total = additionalTotal + calDailyRates + calHourlyRates + calWeeklyRates
        if (rt) {

            (rt && setTotal((total + (total * 11.5) / 100).toFixed(2)));
            setRentalTax(((total * 11.5) / 100).toFixed(2))
        }
        else {

            setTotal(total)
            setDailyTotal(calDailyRates)
            setWeeklyTotal(calWeeklyRates)
            sethourlyTotal(calHourlyRates)

        }

    }, [cdw, li, rt, rentalTax, calDailyRates, calHourlyRates, calWeeklyRates])

    // console.log(calDailyRates, calWeeklyRates, calHourlyRates)

    return (
        <div className="border-2 border-purple-500 px-5 py-3 bg-purple-100 rounded-md overflow-x-auto">
            <table className="table">
                <thead className=" border-b-2 border-purple-600">
                    <tr  >

                        <th className="text-black">Charge</th>
                        <th className="text-black">Unit</th>
                        <th className="text-black">Rate</th>
                        <th className="text-black">Total</th>
                    </tr>
                </thead>
                <tbody>



                    {/* daily */}
                    {
                        days > 0 &&
                        <tr>
                            <td>Daily</td>
                            <td>{unit}</td>
                            <td>${selectedCar?.rates?.daily ? selectedCar?.rates?.daily : 0}</td>
                            {/* total */}
                            <td>${calDailyRates}</td>
                        </tr>
                    }



                    {/* weekly */}
                    {

                        weeks > 0 &&
                        <tr>
                            <td>Weekly</td>
                            <td>{unit}</td>
                            <td>${selectedCar?.rates?.weekly ? selectedCar?.rates?.weekly : 0}</td>
                            {/* total */}
                            <td>${unit * calWeeklyRates}</td>
                        </tr>
                    }
                    {/* Hourly */}
                    {

                        hours > 0 &&
                        <tr>
                            <td>Hourly</td>
                            <td>{unit}</td>
                            <td>${selectedCar?.rates?.hourly ? selectedCar?.rates?.hourly : 0}</td>
                            {/* total */}
                            <td>${unit * calHourlyRates}</td>
                        </tr>
                    }






                    {/* additonal charges */}
                    {
                        (cdw && <tr>
                            <td>Collision Damage Wavier</td>
                            <td></td>
                            <td>$<span>9.00 </span></td>
                            {/* total */}
                            <td>$<span>9.00 </span></td>
                        </tr>)
                    }
                    {
                        (li && <tr>
                            <td>Liability Insurance</td>
                            <td></td>
                            <td>$<span>15.00 </span></td>
                            {/* total */}
                            <td>$<span>15.00 </span></td>
                        </tr>)
                    }
                    {
                        (rt && <tr>
                            <td>Rental Tax</td>
                            <td></td>
                            <td><span>11.5</span>%</td>
                            {/* total */}
                            <td>${rentalTax}</td>
                        </tr>)
                    }

                    <tr>
                        <td className="text-black font-bold">Total</td>
                        <td></td>
                        <td></td>
                        <td> ${
                            total

                        }</td>
                    </tr>


                </tbody>

            </table>

        </div>
    );
};

export default ChargesSummary;