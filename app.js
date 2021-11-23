const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const { mongoDbUrl, PORT } = require('./services/config')


const app = express();

mongoose.connect(mongoDbUrl, { useNewUrlParser: true })
    .then(response => {
        console.log("MongoDB Connected Successfully.");
    }).catch(err => {
        console.log("Database connection failed.", err);
    });


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/* Routes */
const docRoutes = require('./routes/docRoutes')
const modelRoutes = require('./routes/modelRoutes')

app.use('/docs', docRoutes)
app.use('/model', modelRoutes)

/* Start The Server */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});