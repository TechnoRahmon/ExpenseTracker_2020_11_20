const get_SwaggerOptions = (ENV="development",port, productionUrl)=>{
    const serverUrl = ENV == "development" ? 
    `http://localhost:${port}` : 
    productionUrl;
    
   return {
        definition: {
          openapi: "3.1.0",
          info: {
            title: "Expense Tracker - Express API with Swagger",
            version: "0.1.0",
            description:
              "This is an Expense Tracker API application made with Express and documented with Swagger",
            license: {
              name: "MIT",
              url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
              name: "Techno Expense Tracker",
              url: "https://github.com/TechnoRahmon/ExpenseTracker_2020_11_20",
              email: "techno.r@outlook.com",
            },
          },
          servers: [
            {
              url: serverUrl,
            },
          ],
        },
        apis: ["./routers/*.js"],
      }
};

exports.get_SwaggerOptions = get_SwaggerOptions;
