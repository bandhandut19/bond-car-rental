import { useContext } from "react";
import { InitialContext } from "../Providers/IntialProvider";
import Car from "../Layouts/Car";

const Cars = () => {
    const {cars} = useContext(InitialContext)
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-5 py-5 mb-10 ">
            {cars.map(car=> <Car key={car.id} car={car}></Car> )}
        </div>
    );
};

export default Cars;