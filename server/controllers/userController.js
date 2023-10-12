import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

export const createUser = asyncHandler(async (req, res) => {
  console.log("creating a user");

  let { email } = req.body;
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User registered successfully",
      user: user,
    });
  } else res.status(201).send({ message: "User already registered" });
});

export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const id = req.params.id;

  try {
    const alreadyBooked = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        bookedVisits: true,
      },
    });

    if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
      res.status(400).json({
        message: "This Residency is Already Booked by you",
      });
    } else {
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          bookedVisits: {
            push: { id, date },
          },
        },
      });
      res.send("Your Visit is booked successfully!");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

export const allBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        bookedVisits: true,
      },
    });
    res.status(200).send(bookings);
  } catch (err) {
    throw new Error(err.message);
  }
});

export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        bookedVisits: true,
      },
    });
    const index = user.bookedVisits.findIndex((visit) => visit.id === id);

    if (index === -1) {
      res.status(404).json({
        message: "Booking Not Found",
      });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: {
          email,
        },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });
      res.send("Booking Cancelled Successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

export const toFavourite = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const residencyId = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (user.favResidenciesID.includes(residencyId)) {
      const updatedUser = await prisma.user.update({
        where: {
          email,
        },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== residencyId), // this is to remove from favourites
          },
        },
      });

      res.send({
        message: "Removed from Favourites",
        user: updatedUser,
      });
    } else {
      const updatedUser = await prisma.user.update({
        where: {
          email,
        },
        data: {
          favResidenciesID: {
            push: residencyId,
          },
        },
      });
      res.send({
        message: "Added to Favourites",
        user: updatedUser,
      });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

export const allFavourites = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const favResidencies = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        favResidenciesID: true,
      },
    });
    res.status(200).send(favResidencies);
  } catch (err) {
    throw new Error(err.message);
  }
});
