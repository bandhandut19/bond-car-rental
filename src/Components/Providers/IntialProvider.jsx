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

    
    // provided data
    const data = {
        cars
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