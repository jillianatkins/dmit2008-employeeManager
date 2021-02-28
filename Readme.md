# Employee Manager

### App Description
This app allows a user to register, log in, and view an employee dashboard.
- Built with Express.JS, EJS, and Node
- Does not currently access a database, user information is in a JSON document
- Data validation included to prevent duplicate users from registering with the same email
- Unique user IDs are generated (and stored) via UUID after the registration processes is completed
- Employee Dashboard is protected (using cookie sessions) and a user must be logged in to access it

### How to Install/Use
- Download the project from GitHub and open in Visual Studio Code
- Install node modules with the npm install command
- Use the npm run server command to start a local server using port 5000 (this can be modified in the index.js file within the server folder)
- The app will launch to the "home page". From there, the user can register as a new user, or login with an existing account.
- To register, as the user you must enter in their full name, email, and a password. The email must not already exist within the system.
- If the email already exists in the system, an error message will be displayed.
- After completing the registration process, you will be re-directed to the login page where you can use your credentials to login.
- If the email and/or password does not match those currently in the system, appropriate error messages will be displayed.
- After successfully logging in, you will be redirected to the employee dashboard.

### Functionality in progress
- Users page (to display list of current users and their relevant information)
- Employee Dashboard


 


 
  