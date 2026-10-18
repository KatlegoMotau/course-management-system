package com.codewithkat.courseapi;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException expection)
    {
        String field = expection.getBindingResult().getFieldError().getField();
        String message = expection.getBindingResult().getFieldError().getDefaultMessage();

        Map<String, String> errors = Map.of("field", field, "message", message);

        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(CourseNotFoundException.class)
    public ResponseEntity<String> handleCourseNotFoundException(CourseNotFoundException exception)
    {
        return ResponseEntity.status(404).body(exception.getMessage());
    }
}
