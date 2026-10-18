import axios from 'axios';

const API_URL = 'http://localhost:8081/api/courses';

// Create a new course
export async function createCourse(course) {
    try
    {
        const response = await axios.post(API_URL, course);

        return response.data;
    }
    catch(err)
    {
        console.log(err);
    }
}

// Get all courses
export async function getCourses() {
    try
    {
        const response = await axios.get(API_URL);

        return response.data;
    }
    catch(err)
    {
        console.log(err);
    }
}

// Update existing course
export async function updateCourse(id, course) {
    try
    {
        const response = await axios.put(`${API_URL}/${id}`, course);
        return response.data;
    }
    catch(err)
    {
        console.log(err);
    }
}

// Delete course
export async function deleteCourse(id) {
    try
    {
        const response = await axios.delete(`${API_URL}/${id}`);

        return response.data;
    }
    catch(err)
    {
        console.log(err);
    }
}