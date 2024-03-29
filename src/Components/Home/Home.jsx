import Cars from "../Pages/Cars";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center border-4 rounded-lg border-green-500">
            <h1 className="text-4xl font-bold p-5">Available Cars for reservation</h1>
            <Cars></Cars>
        </div>
    );
};

export default Home;