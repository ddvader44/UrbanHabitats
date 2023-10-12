import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/user', userRoute);
app.use('/api/residency', residencyRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// in order to import all the Residency.json data to DB, use MongoDB command line tools and copy the file to there
// once that is done, use the following commands
// ./mongoimport --uri {database_url - last part till DB name} --collection Residency --type json --jsonArray --file Residency.json