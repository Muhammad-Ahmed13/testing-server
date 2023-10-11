const express = require("express");
const { GET_ALL_SLIDERS, ADD_SLIDER } = require("../const");
const Slider = require("../models/Slider");
const homeRouter = express.Router();

homeRouter.get(GET_ALL_SLIDERS, async (req, res) => {
  try {
    const allSlider = await Slider.find();
    res.json(allSlider);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});

homeRouter.post(ADD_SLIDER, async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) {
      return res.status(400).send({ error: "url is required" });
    }
    const newSlider = new Slider({ url });
    newSlider.save();
    res.json(newSlider);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
});



homeRouter.get("todayDeal", (req, res) => {
  // Todo 
});

module.exports = homeRouter;
