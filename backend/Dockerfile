# Etapa de construcción
FROM openjdk:21 AS build

COPY . /app
WORKDIR /app

RUN chmod +x mvnw
RUN ./mvnw package -DskipTests
RUN mv -f target/*.jar app.jar

# Etapa de construcción de MySQL
FROM mysql:latest AS mysql_build

# Etapa de ejecución
FROM openjdk:21

ARG PORT=8080
ENV PORT=${PORT}

COPY --from=build /app/app.jar .

RUN useradd runtime
USER runtime

ENTRYPOINT ["java", "-Dserver.port=${PORT}", "-jar", "app.jar"]