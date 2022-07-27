const { readFileSync } = require("fs");
const http = require("http");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(" ");
  console.log("Request => ");
  console.log("```````````");
  console.log("--------------------------");
  console.log("Method => \t" + req.method);
  console.log("Path => \t" + req.url);
  console.log("--------------------------");

  res.setHeader("Content-Type", "text/html");

  if (req.method == "GET") {
    if (req.url == "/") {
      res.statusCode = 200;
      res.end(readFileSync("./pages/index.html"));
    }

    if (req.url == "/about") {
      res.statusCode = 200;
      res.end(readFileSync("./pages/about.html"));
    }

    if (req.url == "/contact") {
      res.statusCode = 200;
      res.end(readFileSync("./pages/contact.html"));
    }

    if (req.url) {
      res.statusCode = 404;
      res.end("<h1>Page Not Found</h1>");
    }
  } else {
    res.statusCode = 500;
    res.end("Wrong Method");
  }
});

server.listen(port, () => {
  console.log(`Server runnimg at port ${port} => http://localhost:${port}`);
});
