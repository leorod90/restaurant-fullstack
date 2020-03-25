const express = require("express");
const app = express();
const port = 5000;

//Post/Put Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Joh", lastName: "Doe" },
    { id: 2, firstName: "Marry", lastName: "Sue" },
    { id: 3, firstName: "Steve", lastName: "Smith" },
    { id: 4, firstName: "Leo", lastName: "Rod" },
    { id: 5, firstName: "Sharma", lastName: "Ema" }
  ];

  res.json(customers);
});

app.listen(port, () =>
  console.log(`Example app listening on port http://localhost:${port}`)
);
