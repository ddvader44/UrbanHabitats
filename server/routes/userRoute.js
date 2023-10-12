import express from 'express';
import { createUser, bookVisit, allBookings, cancelBooking, toFavourite, allFavourites } from '../controllers/userController.js';
import jwtCheck from '../config/auth0Config.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/bookVisit/:id', bookVisit);
router.post('/getAllBookings', allBookings);
router.post('/cancelBooking/:id', cancelBooking)
router.post('/addToFavourite/:id', toFavourite);
router.post('/allFavourites', allFavourites)

export { router as userRoute }