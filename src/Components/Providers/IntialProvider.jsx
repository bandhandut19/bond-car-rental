import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import PropTypes from 'prop-types';

export const InitialContext = createContext(null)

const IntialProvider = ({children}) => {

    const [cars,setCars] = useState([])
    useEffect(()=>{
        axios.get('https://exam-server-7c41747804bf.herokuapp.com/carsList')
        .then(res=> setCars(res.data.data))
    },[])

    // contact-information form data
    const [firstName,setFirstName] = useState(null)
    const [lastName,setLastName] = useState(null)
    const [email,setEmail] = useState(null)
    const [phone,setPhone] = useState(null)

    // additional charges data
    const [cdw,setCdw] = useState(null)
    const [li,setLi] = useState(null)
    const [rt,setRt] = useState(null)
    

    // vehicle informations
    const[vehicleType,setVehicleType] = useState(null)
    const[vehicle,setVehicle] = useState(null)


    // pickup-date
    const [picupDate,setPickupDate] = useState(null)


    // return-date
    const [returnDate,setReturnDate] = useState(null)


    // provided data
    const data = {
        cars,

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
        setVehicleType,setVehicle,

        // pickup-date
        picupDate,
        setPickupDate,

        // return-date
        returnDate,
        setReturnDate,


    }
    
    // console.log( picupDate?.format('YYYY-MM-DD'))
    // console.log( picupDate?.format('HH:mm'))


    // console.log( returnDate?.format('YYYY-MM-DD'))
    // console.log( returnDate?.format('HH:mm'))
   
    

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