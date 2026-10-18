import CourseForm from "../components/CourseForm";

function AddCourse({onCourseSubmit, onCourseUpdate, onCancelEdit, editingCourse}) {
    return (
        <main className="w-[90%] max-w-[1100px] mx-auto my-9">

            <section className="w-full max-w-[950px] mx-auto bg-white p-4 sm:p-6 border border-gray-300 rounded-lg">

                <CourseForm
                    onCourseSubmit={onCourseSubmit}
                    onCourseUpdate={onCourseUpdate}
                    onCancelEdit={onCancelEdit}
                    editingCourse={editingCourse}
                />

            </section>

        </main>
    );
}

export default AddCourse;