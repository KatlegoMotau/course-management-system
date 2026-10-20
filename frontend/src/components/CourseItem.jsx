function CourseItem({ course, onDeleteCourse, onEditCourse }) {
    return (
        <div className="bg-white p-5 border border-gray-300 rounded-lg shadow-sm">
            <h3 className="mt-0 mb-4 text-xl text-gray-900">{course.name}</h3>

            <p className="my-2 text-sm text-gray-600">
                Level: {course.level}
            </p>

            <p className="my-2 text-sm text-gray-600">
                Status: <span className={`inline-block rounded-full border px-3 py-1 font-medium 
                            ${course.status === "Upcoming"
                                ? "bg-gray-500 text-gray-600 border-gray-600"
                                : course.status === "In Progress"
                                ? "bg-yellow-500 text-yellow-600 border-yellow-600"
                                : course.status === "Completed"
                                ? "bg-green-500 text-green-600 border-green-600"
                                : "bg-gray-500 text-gray-600 border-gray-600"
                            }`
                        }
                        >
                            {course.status}
                        </span>
            </p>

            <p className="my-2 text-sm text-gray-600">
                Start Date: {course.startDate}
            </p>

            <p className="my-2 text-sm text-gray-600">
                End Date: {course.endDate}
            </p>

            <div className="flex gap-2 mt-5">
                <button
                    onClick={() => onDeleteCourse(course.id)}
                    className="px-4 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700"
                >
                    Delete
                </button>

                <button
                    onClick={() => onEditCourse(course)}
                    className="px-4 py-2 bg-blue-950 text-white text-sm rounded-md hover:bg-blue-800"
                >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default CourseItem;