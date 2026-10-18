import { useState, useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import AddCourse from './pages/AddCourse';

import { createCourse, getCourses, updateCourse, deleteCourse } from './services/courseService';
import Home from "./pages/Home.jsx";

function App()
{
    const [courses, setCourses] = useState([]);
    const [editingCourse, setEditingCourse] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    // Fetch all courses from the backend API when the component loads
    useEffect(() => {
        getCourses().then((data) => {setCourses(data);
        })
            .catch((error) => {
                console.log('Error fetching courses', error);
            });
    }, []); // Fetch courses once

    // Receives course information sends to database
    async function handleCourseSubmit(course) {
        try
        {
            // Send the new course to the backend API and get the saved course
            const createdCourse = await createCourse(course);

            // Add the newly created course to the existing course list
            setCourses((currentCourses) => {
                return [...currentCourses, createdCourse];
            });

            navigate('/courses');
        }
        catch (error)
        {
            console.error('Error creating course:', error);
        }
    }

    // Delete course
    async function handleDeleteCourse(id) {
        try
        {
            // Delete the course from the backend
            await deleteCourse(id);

            // Remove the deleted course from the current course list
            setCourses((currentCourses) => {
                return currentCourses.filter((courses) =>{
                    return courses.id !== id;
                });
            });
        }
        catch (error)
        {
            console.error('Error deleting course:', error);
        }
    }

    // Edit course
    function handleEditCourse(course) {
        // Store the selected course so it can be edited in the form
        setEditingCourse(course);

        navigate('/add-course');
    }

    // Update course
    async function handleUpdateCourse(updatedCourse) {
        try{
            // Send the updated course to the backend API
            const updatedCourseFromApi = await updateCourse(editingCourse.id, updatedCourse);

            // Update the course list with the course returned by the backend
            setCourses((currentCourses) => {
                return currentCourses.map((course) => {
                    // Replace the old course with the updated course
                    if (course.id === editingCourse.id)
                    {
                        return updatedCourseFromApi
                    }

                    // Keep all other courses unchanged
                    return course;
                });
            });

            setEditingCourse(null);
            navigate('/courses');
        }
        catch (error)
        {
            console.error('Error updating course:', error);
        }
    }

    // Cancels edit
    function handleCancelEdit() {
        setEditingCourse(null);

        navigate('/courses');
    }

    return (
        <div className="app">

            {location.pathname !== "/" && <Navbar />}

            <Routes>

                <Route
                    path="/"
                    element={
                        <Home
                        />
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        <Dashboard
                            courses={courses}
                        />
                    }
                />

                <Route
                    path="/courses"
                    element={
                        <Courses
                            courses={courses}
                            onDeleteCourse={handleDeleteCourse}
                            onEditCourse={handleEditCourse}
                        />
                    }
                />

                <Route
                    path="/add-course"
                    element={
                        <AddCourse
                            onCourseSubmit={handleCourseSubmit}
                            onCourseUpdate={handleUpdateCourse}
                            onCancelEdit={handleCancelEdit}
                            editingCourse={editingCourse}
                        />
                    }
                />

            </Routes>

        </div>
    );
}

export default App;
