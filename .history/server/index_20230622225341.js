import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import "../"

const PORT = process.env.PORT || 9000;
const app = express();

// ...

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);

  const html = `
        <html lang="en">
        <head>
        <link rel="stylesheet" href="./build.css">
            
        </head>
        <body>
            <div id="root">${app}</div>
            <script src="./client.js" async defer></script>

        </body>
        </html>
    `;

  res.send(html);
});

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
