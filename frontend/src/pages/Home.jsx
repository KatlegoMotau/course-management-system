import {useNavigate} from "react-router-dom";

function Home (){

    const navigate = useNavigate();

    function handleContinue() {
        navigate("/dashboard");
    }

    return (
        <main className="min-h-screen bg-gray-800 flex items-center justify-center">
            <div className="text-center max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Course Management System</h1>

                <p className="text-gray-400 text-lg md:text-lg mb-10">
                    Manage your courses from one place.
                </p>

                <button onClick={handleContinue}
                        className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-xl"
                >
                    Click here to continue
                </button>
            </div>
        </main>
    );
}

export default Home;