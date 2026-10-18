package com.codewithkat.courseapi;

import jakarta.validation.constraints.NotBlank;

public class CourseRequest {

    private Integer id;

    @NotBlank(message = "Course name is required")
    private String name;

    @NotBlank(message = "Course duration is required")
    private String duration;

    @NotBlank(message = "Course level is required")
    private String level;

    public CourseRequest() {
    }

    public CourseRequest(String name, Integer id, String duration, String level) {
        this.name = name;
        this.id = id;
        this.duration = duration;
        this.level = level;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
