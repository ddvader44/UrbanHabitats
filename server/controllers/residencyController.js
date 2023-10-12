import asyncHandler from 'express-async-handler';
import {prisma} from '../config/prismaConfig.js';

export const createResidency = asyncHandler(async (req, res) => {
    const { title, description, price, address, country, city, state, facilities, image, useremail } = req.body.data;
    console.log(req.body.data);
    try{
        const Residency = await prisma.residency.create({
            data : {
                title, 
                description, 
                price, 
                address, 
                country, 
                city, 
                state, 
                facilities, 
                image, 
                owner : {
                    connect: {
                        email: useremail
                    }
                }
            }
        })
        res.send({
            message: "Residency Created Successfully",
            Residency
        })
    } catch(err){
        if(err.code === 'P2002') throw new Error('A residency with address already there'); // this is a code that is returned when condition of a unique address is violated. 
        throw new Error(err.message);
    }
});

export const getAllResidencies = asyncHandler(async (req, res) => {
    try {
      const residencies = await prisma.residency.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      res.send(residencies);
    } catch (err) {
      console.log("Error fetching residencies:", err);
      res.status(500).send({ message: "Something went wrong. Please try again later." });
    }
  });

export const getResidency = asyncHandler(async(req, res) => {
    const {id} = req.params;
    try{
        const residency = await prisma.residency.findUnique({
            where: {id}
        })
        res.send(residency);
    } catch(err) {
        throw new Error(err.message);
    }
})