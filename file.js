// const fs = require("fs");

// fs.writeFileSync("./hello.txt", 'console.log("Hello This is async file")');

// fs.writeFile("./test.txt", "Hello this is synchronas file", () => {});

// const result = fs.readFileSync("./hello.txt", "utf-8");

// console.log(result);

// fs.readFile("./hello.js", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Result:", result);
//   }
// });

// fs.appendFileSync("./hello.txt", "My name is hazrat ali\n");

// fs.unlinkSync("./test.txt");

// fs.writeFileSync("text.txt", "Hello This file make for delete");

// fs.unlinkSync("text.txt");

// const http = require("http");
// const fs = require("fs");

// http
//   .createServer(function (req, res) {
//     fs.readFile("hello.txt", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8080);

// const fs = require("fs");

// fs.readFile("hello.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log("Err: ", err);
//     return;
//   } else {
//     console.log("Data: ", data);
//   }
// });

// const fs = require("fs");

// const data = "এই ডেটা ফাইলে লেখা হবে।";

// fs.writeFile("hello.txt", data, "utf8", (err) => {
//   if (err) {
//     console.error("Error:", err);
//     return;
//   }
//   console.log("ডেটা সফলভাবে ফাইলে লেখা হয়েছে।");
// });

// const fs = require("fs");

// const newData = "New Data add there... \n";

// fs.appendFile("hello.txt", newData, "utf8", (err) => {
//   if (err) {
//     console.error("Added data to the file.");
//     return;
//   }
//   console.log("Finily data added the file");
// });

// const fs = require("fs");

// fs.unlink("test.txt", (err) => {
//   if (err) {
//     console.error("Error:", err);
//     return;
//   }
//   console.log("Delete file done.");
// });

// const fs = require("fs");

// fs.rename("example.txt", "Myfile.txt", (err) => {
//   if (err) {
//     console.error("Error", err);
//     return;
//   }

//   console.log("File rename done.");
// });

// const fs = require("fs");

// if (fs.existsSync("Myfile.txt")) {
//   console.log("File Exits.");
// } else {
//   console.log("Not found!");
// }

// const http = require("http");

// const MyServer = http.createServer((req, res) => {
//   console.log("New Req Rec.");
//   res.end("Hello From Server.");
// });

// MyServer.listen(7000, () => console.log("Server Started!"));

const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  const log = `Date: ${Date.now()} : "Path: " ${req.url} : New Req Recived.\n`;

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Home Page");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`Hi ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("Here are your result for" + search);
        break;
      case "/contact":
        res.end("This is contact");
        break;
      default:
        res.end("404 Not found!");
    }
  });
});

myServer.listen(3000, () => console.log("Server Started port: 3000"));
