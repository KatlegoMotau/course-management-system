import CourseItem from './CourseItem';

function CourseList({ courses, onDeleteCourse, onEditCourse }) {
    return (
        <div>

            {courses.length === 0 ? (
                <p className="text-gray-500">
                    No courses available.
                </p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {courses.map((course) => (
                        <CourseItem
                            key={course.id}
                            course={course}
                            onDeleteCourse={onDeleteCourse}
                            onEditCourse={onEditCourse}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}

export default CourseList;