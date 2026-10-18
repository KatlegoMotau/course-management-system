package com.codewithkat.courseapi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class CourseNotFoundException extends  RuntimeException {

    public CourseNotFoundException(String message)
    {
        super(message);
    }
}
