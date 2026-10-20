import { useState, useEffect } from 'react';

function CourseForm({ onCourseSubmit, onCourseUpdate, onCancelEdit, editingCourse }) {

    // State for the three course fields
    const [courseName, setCourseName] = useState('');
    const [level, setLevel] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // State for displaying validation errors
    const [error, setError] = useState('');

    // State for displaying a successful submission message
    const [success, setSuccess] = useState('');

    // Checks if editingCourse exist or not
    useEffect(() => {
        if (editingCourse)
        {
            setCourseName(editingCourse.name);
            setLevel(editingCourse.level);
            setCategory(editingCourse.category);
            setDescription(editingCourse.description);
            setStatus(editingCourse.status);
            setStartDate(editingCourse.startDate);
            setEndDate(editingCourse.endDate);
        }
        else
        {
            setCourseName('');
            setLevel('');
            setCategory('');
            setDescription('');
            setStatus('');
            setStartDate('');
            setEndDate('');
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

        if (level === '')
        {
            setError('Please select a course level.');
            return;
        }

        if (category === '')
        {
            setError('Please enter a course category.');
            return;
        }

        if (description === '')
        {
            setError('Please enter a course description.');
            return;
        }

        if (status === '')
        {
            setError('Please select a course status.');
            return;
        }

        if (startDate === '')
        {
            setError('Please enter a course start date.');
            return;
        }

        if (endDate === '')
        {
            setError('Please enter a course end date.');
            return;
        }

        setError('');
        setSuccess('Course submitted successfully.');

        const course = {
            name: courseName,
            level: level,
            category: category,
            description: description,
            status: status,
            startDate: startDate,
            endDate: endDate
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
        setLevel('');
        setCategory('');
        setDescription('');
        setStatus('');
        setStartDate('');
        setEndDate('');
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

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm text-gray-700">Category</label>

                    <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900"
                    >
                        <option value="">Select category</option>
                        <option value="Programming & Software Development">Programming & Software Development</option>
                        <option value="Web & Mobile Development">Web & Mobile Development</option>
                        <option value="IT & Networking">IT & Networking</option>
                        <option value="Business & Management">Business & Management</option>
                        <option value="Marketing & Communications">Marketing & Communications</option>
                        <option value="Languages">Languages</option>
                        <option value="Education & Teaching">Education & Teaching</option>
                    </select>

                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm text-gray-700">Status</label>

                    <select
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900"
                    >
                        <option value="">Select status</option>
                        <option value="Upcoming">Upcoming</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>

                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm text-gray-700">Start Date</label>

                    <input
                        type="date"
                        placeholder="Start Date"
                        value={startDate}
                        onChange={(event) => setStartDate(event.target.value)}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900"
                    />

                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm text-gray-700">End Date</label>

                    <input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(event) => setEndDate(event.target.value)}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900"
                    />

                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm text-gray-700">Description</label>

                    <textarea
                        placeholder="Enter description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className="w-full min-h-28 resize-y px-3 py-3 border border-gray-300 rounded-md text-sm text-gray-900"
                    />

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