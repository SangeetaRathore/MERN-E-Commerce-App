const dotenv = require('dotenv');
dotenv.config();
connectDB();

const express = require('express');
const cors = require('cors');

const app  = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("my shonest backend is working properly");

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sangeeta Server is running on port ${PORT}`);
}); 

