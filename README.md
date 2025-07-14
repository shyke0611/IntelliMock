 <!-- PROJECT SHIELDS -->
[![WIKI](https://img.shields.io/badge/Project_Lifecycle-brightgreen.svg?style=for-the-badge)](https://github.com/shyke0611/IntelliMock/wiki)


<br />
<div align="center">
 <h2 align="center">IntelliMock</h2>
</h3>

 <p align="center">
 <strong>AI-powered mock interview platform</strong>
 <br />
 <br />
 <a href="https://intellimock.netlify.app" target="_blank"> Visit Intellimock</a>


 <br />
</p>
<a href="https://github.com/shyke0611/IntelliMock/issues/new?labels=bug&template=bug_report.md">Report Bug</a>
·
<a href="https://github.com/shyke0611/IntelliMock/issues/new?labels=enhancement&template=feature_request.md">Request Feature</a>
·
<a href="https://github.com/shyke0611/IntelliMock/issues/new?labels=documentation&template=documentation.md">Documention</a>


</div>
<br />


<!-- TABLE OF CONTENTS -->
<details>
 <summary>Table of Contents</summary>
 <ol>
   <li><a href="#quick-demo-overview">Quick Demo Overview</a>
   <li><a href="#about-the-project">About The Project</a>
     <ul>
       <li><a href="#what-does-this-project-do">What does this project do?</a></li>
       <li><a href="#tech-stack-used">Tech Stack Used</a></li>
       <li><a href="#deployment">Deployment</a></li>
     </ul>
   </li>
   <li><a href="#getting-started">Getting Started</a>
     <ul>
       <li><a href="#prerequisites">Prerequisites</a></li>
       <li><a href="#installation">Installation</a></li>
     </ul>
   </li>
   <li><a href="#running-tests">Running Tests</a></li>
   <li><a href="#license">License</a></li>
   <li><a href="#acknowledgments">Acknowledgments</a></li>
 </ol>
</details>


## Quick Demo Overview

https://github.com/user-attachments/assets/bd025656-6f97-416a-80d5-ddf73abbfe16

<br />

**NOTE:** Avatar was not feasible in production (due to free service limitations) so replaced with static image in real application

<br />

<table style="width: 100%;">
  <tr>
    <td style="width: 50%;"><img src="https://github.com/user-attachments/assets/33690e02-5491-45d4-808a-4562616669df" style="width: 100%; height: auto;" /></td>
    <td style="width: 50%;"><img src="https://github.com/user-attachments/assets/ea12a171-d3b8-41b9-9bc2-0fe6c1f170c3" style="width: 100%; height: auto;" /></td>
  </tr>
</table>

<!-- ABOUT THE PROJECT -->
## About The Project




### What does this project do?
**IntelliMock** is an AI-powered mock interview platform designed to help job seekers, especially students and recent graduates, prepare for interviews in a realistic, personalised, and accessible way. It simulates real-world interviews using an intelligent virtual interviewer that adapts dynamically to user input, CVs, job descriptions, and uploaded documents.


The core features of IntelliMock include:


- **AI Interview Simulator** 
 Generates real-time, context-aware interview questions by analysing user-uploaded job-related data such as CVs or job descriptions. The AI adapts dynamically to responses, creating a natural and personalised interview flow.


- **Personalised Feedback System** 
 After each interview session, the AI evaluates user responses based on job-specific context and industry standards, providing tailored scores, strengths, weaknesses, and improvement tips.


- **Exportable Scoring Criteria** 
 Feedback is broken down into transparent scoring components, allowing users to understand their performance clearly. Users can export this evaluation as a downloadable or shareable summary.


- **Job Data Upload** 
 Users can upload CVs, job descriptions, PDFs. This input is parsed to personalise the interview experience and guide the AI in tailoring its questions.


- **Voice Input** 
 Users can speak their responses using built-in speech-to-text functionality, allowing for more realistic practice and helping improve spoken delivery.


 <br />


### Tech Stack Used


![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)
![Spring Boot](https://img.shields.io/badge/SpringBoot-6DB33F?logo=springboot&logoColor=white&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)


### Deployment


![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white&style=for-the-badge)
![Render](https://img.shields.io/badge/Render-000000?logo=render&logoColor=white&style=for-the-badge)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-4DB33D?logo=mongodb&logoColor=white&style=for-the-badge)

**To view the full deployed Intellimock web app: [IntelliMock](https://intellimock.netlify.app)**
> **NOTE:**  
> The frontend and backend are fully deployed and require no additional configuration. You can visit the site at any time. However, please be aware of the following:
>
> - The **backend** is hosted on a free Render instance, which may spin down after periods of inactivity. As a result, the first request after being idle can take **up to 50 seconds or more** to respond so please wait even if you see red error messages on API calls initially.
> - The **frontend** may also take **couple of minutes** to fully render when loading for the first time. During this time, you may briefly see a **"Loading..."** message in the top left corner of the screen.
>
> Subsequent visits will be significantly faster once both services are warmed up.

 **[For more information on IntelliMock's Deployment](https://github.com/shyke0611/IntelliMockwiki/Deployment-Information)**

 <br />
 
 **Mock CV's and Job Descriptions**
> We have generated some mock CV's and Job Descriptions you can use during the use of IntelliMock if needed

**Mock CVs**  
- [CV1_Jane_Park.pdf](https://github.com/user-attachments/files/20219696/CV1_Jane_Park.pdf) 
- [CV_David_Chen.pdf](https://github.com/user-attachments/files/20219693/CV_David_Chen.pdf)
- [CV_Ayesha_Patel.pdf](https://github.com/user-attachments/files/20219692/CV_Ayesha_Patel.pdf)

**Mock Job Descriptions**  
- [JD_Frontend_Developer.pdf](https://github.com/user-attachments/files/20219688/JD_Frontend_Developer.pdf)  
- [JD_UX_Designer.pdf](https://github.com/user-attachments/files/20219668/JD_UX_Designer.pdf)  

 <br />


## Getting Started


### Prerequisites


- **Java 17+**
   - Required to run the Spring Boot backend
   - [Download Java 17](https://adoptopenjdk.net/)


- **Node.js 18+**
   - Required to run the React frontend
   - [Download Node.js](https://nodejs.org/)


- **MongoDB (Community Edition)** 
  - Required as the database for the backend  
  - [Download MongoDB](https://www.mongodb.com/try/download/community)


 <br />


### Installation


1. **Clone the repo using Terminal/Command Prompt**:


    ```sh
   git clone https://github.com/shyke0611/IntelliMock.git
    ```


2. **Navigate to the project directory**:
    ```sh
   cd IntelliMock
    ```
### Frontend


3. **Navigate to the frontend package**:
    ```sh
   cd frontend
    ```
4. **Ensure you copy the .env file**
  > A `.env` file is required to run the frontend. 

5. **Install frontend dependencies**:


   ```sh
   npm install
   ```
  > If you run into errors here, make sure you have Node.js and npm installed. You can check by running node -v and npm -v in your terminal.
  If they’re not installed or if the versions are outdated check [Prerequisites](#2-prerequisites) to download the latest LTS version.


6. **Start the frontend development server**:


   ```sh
   npm run dev
   ```
> The frontend will run on [http://localhost:5173](http://localhost:5173)


### Backend


6. **Navigate to the backend project**:


   ```sh
   cd ../backend  # or just cd backend if you're not nesting
   ```


7. **Ensure that MongoDB is running locally and accessible at mongodb://localhost:27017.**
   > You can verify the connection using a tool like MongoDB Compass, or by ensuring your Mongo service is running on your machine.


8. **Ensure you copy the .env file**
  > A `.env` file is required to run the backend. 

9. **Run the Spring Boot backend**:


  ```sh
  ./mvnw spring-boot:run         # Mac/Linux
  mvnw.cmd spring-boot:run     # Windows
  ```
  > If you run into errors here, make sure you have Java 17 or later installed on your system.
You can check by running java -version in your terminal.
If it's not installed or the version is outdated, check [Prerequisites](#2-prerequisites) to download the latest version.
> The backend will run on [http://localhost:8080](http://localhost:8080)


 <br />


## Running Tests

 ### Frontend
 The frontend uses [Vitest](https://vitest.dev/) with [React Testing Library](https://testing-library.com/) for unit and integration tests.


  To run all frontend tests:

  1. **Navigate to the frontend package**:
     ```sh
     cd frontend
     ```

  2. **Running All Tests**:
     ```sh
     npx vitest run
     ```
     > This will launch the Vitest test runner in watch mode. All unit and integration tests will be executed, including API services, pages, hooks, UI components, etc.


   3. **Running a Specific Test File**:
      ```sh
      npx vitest run path/to/your/test-file.test.tsx
      ```
      > Replace `path/to/your/test-file.test.tsx` with the correct relative path (e.g. `src/dialog/__tests__/dialog.test.tsx`).
    
   4. **To Check Coverage**:

      ```sh
      npm run test -- --coverage
      ```

  ### Backend
   The backend uses **Junit** with **Mockito** to test our Java Spring Boot backend.

   To run all backend tests:

  1. **Navigate to the backend package**:
     ```sh
     cd backend
     ```
  2. **Running the tests**:
     ```sh
     ./mvnw verify       # Mac/Linux
      mvnw.cmd verify    # Windows
     ```
   3. **To Check Coverage**:

      ```sh
      open target/site/jacoco/index.html    # Mac
      xdg-open target/site/jacoco/index.html # Linux
      start target\site\jacoco\index.html   # Windows
      ```

### [find More information on how IntelliMock is tested](https://github.com/UOA-CS732-S1-2025/group-project-peach-peacocks/wiki/testing)

 <br />


<!-- LICENSE -->
## License


Distributed under the MIT License. Read more at [MIT License](./LICENSE) for more information.

<!-- ACKNOWLEDGMENTS -->


## Acknowledgments
- [README Template](https://github.com/othneildrew/Best-README-Template?tab=readme-ov-file)
- [Image Shields](https://shields.io)
