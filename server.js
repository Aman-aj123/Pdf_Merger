import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

import multer from 'multer'
const upload = multer({ dest: 'uploads/' })
import { mergePDFS } from "./merger.js";

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, "/templates/index.html"));
});



app.post('/merge', upload.array('pdfs', 2), async function (req, res, next) {

     await mergePDFS(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1]));
     // res.redirect(`https://localhost:3000/static/merged.pdf`); 
});






// Starting the server.. 
app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
});




