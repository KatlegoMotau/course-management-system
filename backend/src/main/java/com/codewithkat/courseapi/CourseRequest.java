package com.codewithkat.courseapi;

import jakarta.validation.constraints.NotBlank;

import java.util.Date;

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

    @NotBlank(message = "Course start date is required")
    private Date startDate;

    @NotBlank(message = "")
    private Date endDate;

    public CourseRequest() {
    }

    public CourseRequest(Integer id, String name, String level, String category, String description, String status, Date startDate, Date endDate) {
        this.id = id;
        this.name = name;
        this.level = level;
        this.category = category;
        this.description = description;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
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

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }
}
