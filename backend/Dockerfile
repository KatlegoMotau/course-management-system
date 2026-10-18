# Stage 1: Build the Spring Boot application
FROM maven:3.9-eclipse-temurin-22 AS build

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn -B -DskipTests package

# Stage 2: Run the Spring Boot application
FROM eclipse-temurin:22-jre

WORKDIR /app

COPY --from=build /app/target/courseapi-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "app.jar"]
