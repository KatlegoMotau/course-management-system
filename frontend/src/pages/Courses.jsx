import CourseList from "../components/CourseList";
import {useState} from "react";

function Courses({courses, onDeleteCourse, onEditCourse})  {

    const [search, setSearch] = useState('');

    // Filters courses based on the search text
    const filteredCourses = courses.filter((course) => {
        return(
            course.name?.toLowerCase().includes(search.toLowerCase()) ||
            course.duration?.toLowerCase().includes(search.toLowerCase()) ||
            course.level?.toLowerCase().includes(search.toLowerCase())
        );
    });

    return(
        <main className="w-[90%] max-w-[1100px] mx-auto my-9">

            <section>

                <h1 className="m-0 text-3xl text-gray-900">Courses</h1>

                <p className="mt-2 mb-8 text-gray-500 text-sm flex items-center justify-between">
                    <span>
                        View and manage courses.
                    </span>

                    <input type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        className="w-[30%] bg-white border border-gray-200 rounded-full shadow-sm p-2 px-4 text-sm text-gray-700 focus:outline-none focus:border-gray-300"
                    />
                </p>

                <CourseList
                    courses={filteredCourses}
                    onDeleteCourse={onDeleteCourse}
                    onEditCourse={onEditCourse}
                />
            </section>

        </main>
    );
}

export default Courses;