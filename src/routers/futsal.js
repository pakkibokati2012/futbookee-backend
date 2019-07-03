const express = require('express');
const User = require('../models/user');
const Futsal = require('../models/futsal');
const router = new express.Router();

router.post('/futsals', async (req, res) => {
  const futsal = new Futsal(req.body);
  try {
    await futsal.save();
    res.status(201).send(futsal);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/futsals', async (req, res) => {
  try {
    const futsals = await Futsal.find({});
    if (!futsals) {
      return res.status(404).send();
    }
    res.send(futsals);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/futsals/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const futsal = await Futsal.findById(_id);
    if (!futsal) {
      return res.status(404).send();
    }
    res.send(futsal);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/futsals/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'location'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }
  try {
    const futsal = await Futsal.findById(req.params.id);
    updates.forEach(update => (futsal[update] = req.body[update]));
    await futsal.save();

    if (!futsal) {
      return res.status(404).send();
    }
    res.send(futsal);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete('/futsals/:id', async (req, res) => {
  try {
    const futsal = await Futsal.findByIdAndDelete(req.params.id);
    if (!futsal) {
      return res.status(404).send();
    }
    res.send(futsal);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
