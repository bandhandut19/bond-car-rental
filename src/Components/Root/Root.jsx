import Navbar from "../Home/Navbar";
import {Outlet} from 'react-router-dom'
const Root = () => {
    return (
        <div className="mb-10">
            <Navbar></Navbar>
            <div className="w-4/5 mx-auto mt-10 ">

            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;