import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import PropTypes from 'prop-types';

export const InitialContext = createContext(null)

const IntialProvider = ({ children }) => {

    const [cars, setCars] = useState([])
    
    useEffect(() => {
        axios.get('https://bond-car-rental-backend.vercel.app/carsinfo')
            .then(res => setCars(res.data));
    }, []);

    // reservation id generator data
    const[id,setId] = useState(null)
    // contact-information form data
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)

    // additional charges data
    const [cdw, setCdw] = useState(null)
    const [li, setLi] = useState(null)
    const [rt, setRt] = useState(null)


    // vehicle informations
    const [vehicleType, setVehicleType] = useState(null)
    const [vehicle, setVehicle] = useState(null)


    // pickup-date
    const [pickupDate, setPickupDate] = useState(null)


    // return-date
    const [returnDate, setReturnDate] = useState(null)


    // duration
    const [duration, setDuration] = useState(null)


    // selected car
    const [selectedCar,setSelectedCar] = useState(null)

    // download and print
    const [generatePDF,setGeneratePDF] = useState(null)


    // invoice data

    const [dailyTotal,setDailyTotal] =useState(0)
    const [weeklyTotal,setWeeklyTotal] =useState(0)
    const [hourlyTotal,sethourlyTotal] =useState(0)

    const [total,setTotal] = useState(0)

    // provided data
    const data = {
        cars,

        // invoice data
        total,
        setTotal,

        dailyTotal,
        setDailyTotal,
        weeklyTotal,
        setWeeklyTotal,
        hourlyTotal,
        sethourlyTotal,


        //reservation id

        id,
        setId,

        // contact-information
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        firstName,
        lastName,
        email,
        phone,

        // additional charges (true,false)
        setCdw,
        setLi,
        setRt,
        cdw,
        li,
        rt,

        // vehicle informations
        vehicleType,
        vehicle,
        setVehicleType, setVehicle,

        // pickup-date
        pickupDate,
        setPickupDate,

        // return-date
        returnDate,
        setReturnDate,

        //duration
        duration,
        setDuration,

        // selected car
        selectedCar,
        setSelectedCar,

        //pdf
        generatePDF,
        setGeneratePDF,

    }

    // console.log( picupDate?.format('YYYY-MM-DD'))
    // console.log( picupDate?.format('HH:mm'))

    


    // console.log( returnDate?.format('YYYY-MM-DD'))
    // console.log( returnDate?.format('HH:mm'))
    useEffect(() => {
        if (pickupDate && returnDate) {
            const calDur = returnDate.diff(pickupDate);
    
            const calDurObj = {
                weeks: Math.floor(calDur / (1000 * 60 * 60 * 24 * 7)),
                days: Math.floor((calDur % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)),
                hours: Math.floor((calDur % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((calDur % (1000 * 60 * 60)) / (1000 * 60))
            };
    
            setDuration(calDurObj);
        }
    }, [pickupDate, returnDate]);
    


    return (
        <InitialContext.Provider value={data}>
            {children}
        </InitialContext.Provider>
    );
};

IntialProvider.propTypes = {
    children: PropTypes.node
}

export default IntialProvider;