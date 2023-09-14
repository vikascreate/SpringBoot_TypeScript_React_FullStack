# SpringBoot_TypeScript_React_FullStack
# Spring Boot Application with TypeScript and React Frontend

This repository contains a Spring Boot application with a TypeScript and React frontend. This README file provides instructions on how to set up and run the application on your local machine.

## Prerequisites

Before you begin, make sure you have the following software installed on your machine:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html) - You'll need Java to run the Spring Boot application. Make sure you have at least JDK 8 installed.
- [Node.js](https://nodejs.org/) - Required for building and running the React frontend.
- [npm](https://www.npmjs.com/) - npm is the package manager for JavaScript and is included with Node.js.

## Getting Started

Follow these steps to set up and run the Spring Boot application with TypeScript and React:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. Navigate to the `frontend` directory:

   ```bash
   cd ChatRoom
   ```

3. Install the frontend dependencies:

   ```bash
   npm install
   ```

4. Build the React frontend:

   ```bash
   npm run build
   ```

5. Go back to the project root directory:

   ```bash
   cd ..
   ```

6. Build the Spring Boot application:

   ```bash
   ./mvnw clean package
   ```

## Running the Application

Once you've completed the setup steps, you can run the application:

1. Start the Spring Boot backend:

   ```bash
   java -jar target/your-app-name.jar
   ```

   Replace `your-app-name.jar` with the actual name of your Spring Boot JAR file.

2. The Spring Boot application should now be running at `http://localhost:8080`.

3. Access the frontend by opening a web browser and navigating to `http://localhost:8080`.

## Development

If you want to work on the frontend and make changes, you can run the development server:

1. Navigate to the `frontend` directory:

   ```bash
   cd ChatRoom
   ```

2. Start the development server:

   ```bash
   npm start
   ```

   This will start a development server with hot-reloading at `http://localhost:3000`. You can make changes to the frontend code, and the application will automatically update in the browser.

## Contributing

If you'd like to contribute to this project, please fork the repository and create a pull request. We welcome contributions!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

If you have any questions or issues, feel free to contact us at [your.email@example.com](mailto:your.email@example.com).

Happy coding!
