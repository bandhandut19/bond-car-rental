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


    const [firstName,setFirstName] = useState(null)
    const [lastName,setLastName] = useState(null)
    const [email,setEmail] = useState(null)
    const [phone,setPhone] = useState(null)

    
    // provided data
    const data = {
        cars,
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        firstName,
        lastName,
        email,
        phone

    }
    

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