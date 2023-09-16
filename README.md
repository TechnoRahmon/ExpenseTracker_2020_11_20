# ExpenseTracker_2020_11_20

Expense Tracker is a powerful financial management tool designed to help you efficiently manage your monthly budget by tracking your expenses and incomes. Whether you're looking to improve your financial habits, save money, or plan for the future, Expense Tracker is here to assist you.

## Live Demo

You can explore our project's   with a live demo by visiting the following link: [Demo](https://your-swagger-demo-link)
and Swagger documentation [Swagger Demo](https://your-swagger-demo-link)

Here is the content you provided, formatted in Markdown:


## Key Features
- **Expense Tracking**: Easily record and categorize your daily expenses.
- **Income Management**: Keep track of your various income sources.
- **Budget Planning**: Set monthly budget goals and monitor your progress.
- **Expense Categories**: Organize your expenses into custom categories.
- **Data Visualization**: Gain insights into your spending habits with visual charts and graphs.
- **User-Friendly Interface**: Navigate the app with ease, making budget management a breeze.

## Technologies Used
Expense Tracker is built with cutting-edge technologies:
- **React.js**: The front-end of the application is developed using React.js, providing a dynamic and interactive user interface.
- **Redux Store**: Redux is used to manage the state of the application, ensuring data consistency and real-time updates.
- **Express.js**: The back-end server is powered by Express.js, enabling seamless communication between the front end and the database.
- **MongoDB**: MongoDB serves as the database system, storing and retrieving financial data securely.

## Getting Started
To start using Expense Tracker, follow these steps:
1. Clone the repository to your local machine.
2. Set up the back end by running the Express.js server.
3. Connect the application to your MongoDB database.
4. Launch the front end using React.js.

With Expense Tracker, you can easily add, remove, and categorize your incomes and expenses, gain insights into your spending patterns, and work towards achieving your financial goals.


## How to run it locally

We are using local Mongo database, so you need to install the mongodb server in your system and make sure that it's running at port 27017

- After you clone the project, you should run in the terminal in you main folder:

  ### `npm install`

- After that go to `cd server/client/` and run there again :

  ### `npm install`

- After that go to `cd server/` and run there again :

  ### `npm install`

- After that go again to main folder and run there :

  ### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


Here is the content you provided, rewritten in Markdown:

## Expense Tracker Configuration File

create a file contains the configuration for the Expense Tracker application.
```bash
/config/config.env
```

### Environment Variables

- `NODE_ENV`: Defines the Node.js environment. Possible values include "development" and "production."
- `ENV`: Specifies the deployment environment. This can be "local," "staging," or "production."
- `PORT`: Sets the port on which the Express.js server will run.
- `MONGO_URI`: Provides the MongoDB connection URI. This should include the hostname (e.g., mongo-server) and port (e.g., 27017).
- `PROD_URL`: (Optional) If your application has a production URL, specify it here.

## Docker Deployment

Follow these steps to build and run your Docker image:

1. **Build the Docker Image**: Use the following command to build a Docker image named "expense-tracker-image" with the tag "latest":
    ```bash
    docker build -t expense-tracker-image:latest .
    ```
2. **Run the Docker Container**: Start a Docker container with the built image, using your configuration file for environment variables:
    ```bash
    docker run -p 5000:5000 --env-file ./config/config.env --name expense-tracker expense-tracker
    ```
    In this command:
    - `-p 5000:5000` maps port 5000 from your host machine to port 5000 in the Docker container.
    - `--env-file ./config/config.env` specifies the path to your environment file.
    - `--name expense-tracker-container` assigns a name to your Docker container.

Your Expense Tracker application should now be running in a Docker container and accessible on port 5000 of your host machine.

**We can use the `Express js` server to serve the `React` project js bundle.**
### DESING PATTREN

**we are using: MVC Architect**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
**Email:** techno.r@outlook.com

***Thank you for using my project :)!***
