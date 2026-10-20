package com.codewithkat.courseapi;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public class CourseRequest {

    private Integer id;

    @NotBlank(message = "Course name is required")
    private String name;

    @NotBlank(message = "Course level is required")
    private String level;

    @NotBlank(message = "Course category is required")
    private String category;

    @NotBlank(message = "Course description is required")
    private String description;

    @NotBlank(message = "Course status is required")
    private String status;

    @NotNull(message = "Course start date is required")
    private LocalDate startDate;

    @NotNull(message = "Course end date is required")
    private LocalDate endDate;

    public CourseRequest() {
    }

    public CourseRequest(Integer id, String level, String name, String category, String description, String status, LocalDate startDate, LocalDate endDate) {
        this.id = id;
        this.level = level;
        this.name = name;
        this.category = category;
        this.description = description;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
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

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
}
