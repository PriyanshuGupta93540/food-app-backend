import Resturant from "../models/resturantModel.js";

// CREATE RESTURANT
const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Please provide title and address",
      });
    }
    const newResturant = new Resturant({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });
    await newResturant.save();
    res.status(201).send({
      success: true,
      message: "Resturant Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create resturant Api",
      error,
    });
  }
};

const getAllResturantController = async (req, res) => {
  try {
    const resturants = await Resturant.find({});
    if (!resturants) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Availible",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: resturants.length,
      resturants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get ALL Resturat API",
      error,
    });
  }
};

// GET RESTURNAT BY ID
const getResturantByIdController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Resturnat ID",
      });
    }
    //find resturant
    const resturant = await Resturant.findById(resturantId);
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "no resturant found",
      });
    }
    res.status(200).send({
      success: true,
      resturant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get Resturarnt by id api",
      error,
    });
  }
};

const deleteResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "No Resturant Found Or provide resturant ID",
      });
    }
    await Resturant.findByIdAndDelete(resturantId);
    res.status(200).send({
      success: true,
      message: "Resturant Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete resturant api",
      error,
    });
  }
};

export {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
};
