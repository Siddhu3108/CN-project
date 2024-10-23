import express from "express";
import { dirname } from "path";
const app = express();
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Redirect users visiting "/" to an external link
app.get('/',(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
})
app.get('/game', (req, res) => {
    res.redirect('https://siddhu3108.github.io/SimonGame/');
});

// Define the port
const PORT = 3000;
app.get('/about',(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
