import { useState, useEffect } from 'react';

function CourseForm({ onCourseSubmit, onCourseUpdate, onCancelEdit, editingCourse }) {

    // State for the three course fields
    const [courseName, setCourseName] = useState('');
    const [duration, setDuration] = useState('');
    const [level, setLevel] = useState('');

    // State for displaying validation errors
    const [error, setError] = useState('');

    // State for displaying a successful submission message
    const [success, setSuccess] = useState('');

    // Checks if editingCourse exist or not
    useEffect(() => {
        if (editingCourse)
        {
            setCourseName(editingCourse.name);
            setDuration(editingCourse.duration);
            setLevel(editingCourse.level);
        }
        else
        {
            setCourseName('');
            setDuration('');
            setLevel('');
        }
    }, [editingCourse]); // Runs on when editing changes

    function handleSubmit(event){
        // Prevents the browser from refreshing the page
        event.preventDefault();

        setSuccess('');

        if (courseName === '')
        {
            setError('Please enter a course name.');
            return;
        }

        if(duration === '')
        {
            setError('Please enter the course duration.');
            return;
        }

        if (level === '')
        {
            setError('Please select a course level.');
            return;
        }

        setError('');
        setSuccess('Course submitted successfully.');

        const course = {
            name: courseName,
            duration: duration,
            level: level
        };

        if (editingCourse)
        {
            onCourseUpdate(course);
        }
        else
        {
            onCourseSubmit(course);
        }

        setCourseName('');
        setDuration('');
        setLevel('');
    }

    return (
        <div className="w-full">
            <h2 className="mt-0 mb-6 text-2xl text-gray-900">
                {editingCourse ? 'Edit Course' : 'Add Course'}
            </h2>

            {error && (
                <p className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                    {error}
                </p>
            )}

            {success && (
                <p className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm">
                    {success}
                </p>
            )}


            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>

                <div className="flex flex-col gap-2">

                    <label className="font-semibold text-sm text-gray-700">Course Name</label>

                    <input
                        type="text"
                        placeholder="Enter course name"
                        value={courseName}
                        onChange={(event) => setCourseName(event.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900"
                    />

                </div>

                <div className="flex flex-col gap-2">

                    <label className="font-semibold text-sm text-gray-700">Duration</label>

                    <input
                        type="text"
                        placeholder="Enter course duration"
                        value={duration}
                        onChange={(event) => setDuration(event.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900"
                    />

                </div>

                <div className="flex flex-col gap-2">

                    <label className="font-semibold text-sm text-gray-700">Level</label>

                    <select
                        value={level}
                        onChange={(event) => setLevel(event.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900"
                    >
                        <option value="">Select level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                <button type="submit"
                    className="px-4 py-3 bg-blue-900 text-white text-sm font-semibold rounded-md hover:bg-blue-800"
                >
                    {editingCourse ? 'Update Course' : 'Add Course'}
                </button>

                <button type="button"
                    onClick={onCancelEdit}
                    className="px-4 py-3 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-700"
                >
                    Cancel
                </button>

            </form>

        </div>
    );
}

export default CourseForm;