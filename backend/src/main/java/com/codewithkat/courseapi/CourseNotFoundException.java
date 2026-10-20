package com.codewithkat.courseapi;

public class CourseNotFoundException extends  RuntimeException {

    public CourseNotFoundException(String message)
    {
        super(message);
    }
}
