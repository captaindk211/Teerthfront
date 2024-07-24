import express from "express";
import {
  getTourCount,
  getFeaturedTours,
  getTourBySearch,
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
} from "./../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post("/",verifyAdmin,createTour);
//update tour
router.put("/:id",verifyAdmin, updateTour);

//delete tour
router.delete("/:id",verifyAdmin, deleteTour);

//get Single tour
router.get("/:id", getSingleTour);

//get all tours
router.get("/", getAllTour);

//get tours by search
router.get("/search/getTourBySearch", getTourBySearch);

//get featured tours
router.get("/search/getFeaturedTours", getFeaturedTours);

//tours count
router.get("/search/getTourCount", getTourCount);
export default router;
