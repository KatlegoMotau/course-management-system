package com.codewithkat.courseapi;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    private final CourseRepository courseRepository;

    //Constructor dependency injection
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> findAll() {
        return courseRepository.findAll();
    }

    public Course getCourseById(Integer id) {

        return courseRepository.findById(id).orElseThrow(() -> new CourseNotFoundException("Course with id: " + id + " not found"));
    }

    public Course updateCourse(Integer id, Course course) {

        Course existingCourse = courseRepository.findById(id).orElseThrow(()  -> new CourseNotFoundException("Course with id: " + id + " not found"));

        existingCourse.setName(course.getName());
        existingCourse.setDuration(course.getDuration());
        existingCourse.setLevel(course.getLevel());
        existingCourse.setCategory(course.getCategory());
        existingCourse.setDescription(course.getDescription());
        existingCourse.setStatus(course.getStatus());
        existingCourse.setStartDate(course.getStartDate());
        existingCourse.setEndDate(course.getEndDate());

        return courseRepository.save(existingCourse);
    }

    public void deleteCourse(Integer id) {

        if (!courseRepository.existsById(id))
        {
            throw new CourseNotFoundException("Course with id: " + id + " not found");
        }

        courseRepository.deleteById(id);
    }
}
