package com.codewithkat.courseapi;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService courseService;

    //Constructor dependency injection
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    //Creating the course
    @PostMapping
    public ResponseEntity<Course> createCourse(@RequestBody @Valid CourseRequest courseRequest) {

        Course course = new Course();

        course.setName(courseRequest.getName());
        course.setLevel(courseRequest.getLevel());
        course.setCategory(courseRequest.getCategory());
        course.setDescription(courseRequest.getDescription());

        Course savedCourse = courseService.createCourse(course);

        return ResponseEntity.status(201).body(savedCourse);
    }

    //Getting all the courses
    @GetMapping
    public List<Course> findAll() {
        return courseService.findAll();
    }

    //Getting course by id
    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable Integer id) {

        Course course = courseService.getCourseById(id);

        return ResponseEntity.ok(course);
    }

    //Updating a course
    @PutMapping("/{id}")
    public ResponseEntity<Course> updateCourse(@PathVariable Integer id, @RequestBody @Valid CourseRequest courseRequest) {

        Course course = new Course();

        course.setName(courseRequest.getName());
        course.setLevel(courseRequest.getLevel());
        course.setCategory(courseRequest.getCategory());
        course.setDescription(courseRequest.getDescription());
        course.setStatus(courseRequest.getStatus());
        course.setStartDate(courseRequest.getStartDate());
        course.setEndDate(courseRequest.getEndDate());

        Course updatedCourse = courseService.updateCourse(id, course);

        return ResponseEntity.ok(updatedCourse);
    }

    //Deleting a course
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Integer id) {

        courseService.deleteCourse(id);

        return ResponseEntity.noContent().build();
    }
}
