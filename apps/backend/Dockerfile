# Start with a base image containing Java runtime
FROM amazoncorretto:17-alpine-jdk

# Create a directory
WORKDIR /app

# Copy all the files from the current directory to the image
COPY . .

# build the project avoiding tests
RUN ./gradlew clean build -x test

# Expose port 8080
EXPOSE 8080

# Run the jar file
CMD ["java", "-jar", "build/libs/urlshortener-0.0.1-SNAPSHOT.jar"]

# docker build . -t urlshortener
# docker run -d -p 8080:8080 -it urlshortener


# push docker hub

# docker tag urlshortener:latest joelnicolass/url-shortener-api:latest

# docker push joelnicolass/url-shortener-api:latest

# docker buildx build --platform linux/amd64,linux/arm64 -t joelnicolass/url-shortener-api:latest --push .