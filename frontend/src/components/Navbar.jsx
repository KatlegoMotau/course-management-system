import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 border-b border-gray-700">

            <div className="w-[90%] max-w-[1100px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 py-4">

                <div className="text-white text-2xl font-bold py-6">
                    <Link to="/">
                        Course Management System
                    </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-6">

                    <Link
                        to="/dashboard"
                        className="text-gray-300 text-sm no-underline hover:text-white"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/courses"
                        className="text-gray-300 text-sm no-underline hover:text-white"
                    >
                        Courses
                    </Link>

                    <Link
                        to="/add-course"
                        className="text-gray-300 text-sm no-underline hover:text-white"
                    >
                        Add Course
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;