// const { add, sub } = require("./math");
//const {add, sub} = require('./math');

// console.log("Hi mr.hazrat ali");
// console.log("The add value is:", math.AddFn(5, 8));
// console.log("The subtract value is: ", math.SubFn(8, 2));
// console.log("Add value:", add(5, 3));
// console.log("Subtract value:", sub(9, 4));

// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const myServer = http.createServer((req, res) => {
//   //if(req.url === '/favicon.io') return res.end();

//   const myUrl = url.parse(req.url, true);
//   console.log(myUrl);

//   const date = new Date();
//   const log = `Date = ${date.toLocaleDateString()}. Path = ${
//     req.url
//   }. New Request Recived. \n`;

//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (myUrl.pathname) {
//       case "/":
//         res.end("Home Page.");
//         break;
//       case "/about":
//         const username = myUrl.query.myname;
//         res.end(`Hi ${username}.`);
//         break;
//       case "/search":
//         const search = myUrl.query.search_query;
//         res.end("Here are result for" + search);
//         break;
//       case "/contact":
//         res.end("Contact Page.");
//         break;
//       default:
//         res.end("404 Not Found!");
//     }
//   });
// });

// myServer.listen(8000, () => console.log("Server Started port: 8000"));

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello Hazrat Ali");
// });

// server.listen(3000, () => {
//   console.log("Server running at port 3000");
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.statusCode = 300;
//   res.setHeader("Text-Type", "text/html");
//   res.end("<h1>Hello World!</h1>");
// });

// server.listen(3000, () => {
//   console.log("Server running at port 3000");
// });

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Context-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact Page.");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Fout");
  }
});

server.listen(3000, () => {
  console.log("Server runnig at port 3000");
});
