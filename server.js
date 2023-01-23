import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
//We must import the built ServerApp.jsx because we can not use it directly (we should build it and then run the server) 
import renderApp from "./dist/server/ServerApp.js";

//This __dirname is now whatever directory we’re in
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//The port where we will listen
const PORT = process.env.PORT || 3001;

//Our project is going to built out an HTML file. We need this to get the proper paths for all things (css, javascript) 
const html = fs.readFileSync(path.resolve(__dirname, "./dist/client/index.html")).toString();

//We will render the html into two parts. The head to load the CSS and JavaScript and the second part is the node where we render our React Application
const parts = html.split("Not rendered");

const app = express();

//Serve all the static assets that we need.
app.use(
	"/assets",
	express.static(path.resolve(__dirname, "./dist/client/assets"))
);

//All that are not a static assets will be handled by React.
app.use((req, res) => {
	//We will write the head part.
	res.write(parts[0]);

	//This is the app that we got from the dist folder (ServerApp.jsx)
	const stream = renderApp(req.url, {
		onShellReady() {
			//If is the crawler, no nothing else
			stream.pipe(res);
		},
		//We can log it out in our error service to track all the possible errors
		onShellError() {
			//Do error handling here
		},
		/* 
		This is when everything has happened, so we are done.
		Everything is read now so React is going to give it incrementally. We are good to go
		res.end: Close the request.
		*/
		onAllReady() {
			//If is the crawler. We give everything the crawles when everything is loaded at once.
			// stream.pipe(res)

			//last thing to write
			res.write(parts[1]);
			res.end();
		},
		onError(err) {
			console.error(err);
		}
	});
});

console.log(`Listening on http://localhost:${PORT}`);
app.listen(PORT);