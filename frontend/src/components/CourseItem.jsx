function CourseItem({ course, onDeleteCourse, onEditCourse }) {
    return (
        <div className="bg-white p-5 border border-gray-300 rounded-lg shadow-sm">
            <h3 className="mt-0 mb-4 text-xl text-gray-900">{course.name}</h3>

            <p className="my-2 text-sm text-gray-600">
                Level: {course.level}
            </p>

            <p className="my-2 text-sm text-gray-600">
                Status: {course.status}
            </p>

            <p className="my-2 text-sm text-gray-600">
                Start Date: {new Date(course.startDate).toLocaleDateString("en-GB")}
            </p>

            <p className="my-2 text-sm text-gray-600">
                End Date: {new Date(course.endDate).toLocaleDateString("en-GB")}
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