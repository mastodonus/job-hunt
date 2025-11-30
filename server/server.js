require('dotenv').config();

const express = require('express');
const app = express();
const applicationsRouter = require('./routes/applications')

app.use('/api/applications', applicationsRouter)

app.listen(5333, () => {console.log('Server started on port 5333')})