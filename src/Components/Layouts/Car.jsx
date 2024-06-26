import PropTypes from 'prop-types';
const Car = ({ car }) => {

    return (
        <div>
            <div className="card mt-5 gap-5 bg-purple-200 shadow-xl items-center justify-center lg:p-5 py-10">
                <div className=' p-5'>
                <img style={{width: '250px', height:'150px'}} src={car.imageURL} alt="car_image" />
                </div>
                <div className="px-5">
                    <h2 className="card-title">Model: <span className='text-blue-500'>{car.model}</span></h2>
                    <h2 className="card-title">Type: <span className='text-blue-500'>{car.type}</span></h2>
                    <h2 className="card-title">
                        Special Feature: 
                        <span className='text-blue-500'>
                            <div className='flex lg:flex-row flex-col gap-2 '>

                            {car.features.slice(0,1).map((feature,index)=> <p key={index}>{feature}</p>)}
                            </div>
                        </span></h2>
                    

                    {/* <div className="card-actions justify-center mt-10 mb-5">
                        <button className="btn bg-green-400">View Details</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};


Car.propTypes = {
    car: PropTypes.object
}

export default Car;