function Dashboard({ courses }) {

    // Number of courses found
    const totalCourses = courses.length;

    // Sorting courses by level
    const beginnerCourses = courses.filter((course) => {
        return course.level === 'Beginner';
    }).length;

    const intermediateCourses = courses.filter((course) => {
        return course.level === 'Intermediate';
    }).length;

    const advancedCourses = courses.filter((course) => {
        return course.level === 'Advanced';
    }).length;

    return (
        <main className="w-[90%] max-w-[1100px] mx-auto my-9">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-9">

                <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                    <h2 className="m-0 text-3xl text-gray-900">{totalCourses}</h2>

                    <p className="mt-2 mb-0 text-gray-500 text-sm">
                        Total Courses
                    </p>
                </div>

                <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                    <h2 className="m-0 text-3xl text-gray-900">{beginnerCourses}</h2>

                    <p className="mt-2 mb-0 text-gray-500 text-sm">
                        Beginner Courses
                    </p>
                </div>

                <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                    <h2 className="m-0 text-3xl text-gray-900">{intermediateCourses}</h2>

                    <p className="mt-2 mb-0 text-gray-500 text-sm">
                        Intermediate Courses
                    </p>
                </div>

                <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-sm">
                    <h2 className="m-0 text-3xl text-gray-900">{advancedCourses}</h2>

                    <p className="mt-2 mb-0 text-gray-500 text-sm">
                        Advanced Courses
                    </p>
                </div>

            </div>

            <div className="bg-white p-6 border border-gray-300 rounded-lg">

                <h2 className="mt-0 mb-5 text-2xl text-gray-900">Available Courses</h2>

                {courses.length === 0 ? (
                    <p className="text-gray-500">
                        No courses have been added yet.
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                        {courses.map((course) => (
                            <div
                                className="p-5 border border-gray-300 rounded-md bg-gray-50"
                                key={course.id}
                            >
                                <h3 className="mt-0 mb-3 text-lg text-gray-900">{course.name}</h3>

                                <p className="my-1 text-sm text-gray-500">
                                    Duration: {course.duration}
                                </p>

                                <p className="my-1 text-sm text-gray-500">
                                    Level: {course.level}
                                </p>
                            </div>
                        ))}

                    </div>
                )}

            </div>

        </main>
    );
}

export default Dashboard;