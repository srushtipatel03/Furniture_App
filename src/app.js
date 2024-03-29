require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
const morgan = require('morgan');
const path = require('path');

app.use(express.json());
app.use(morgan('dev'));

// Path For Set Product Images
let imagePath = path.join(__dirname, 'public','images')
app.use('/public/images', express.static(imagePath));

// Database connection
async function main(){
    await mongoose.connect(process.env.MONGO_DB_URL);
}
main()
.then(() => console.log('DB is Connected...👍'))
.catch(err => console.log(err.message));

// Admin Routes
const adminsRoutes = require('./routes/admin/index.routes');
app.use('/api/admin', adminsRoutes);

// User Routes
const usersRoutes = require('./routes/user/index.routes');
app.use('/api/user', usersRoutes);

app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});
