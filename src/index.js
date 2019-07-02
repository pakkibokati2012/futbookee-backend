const express = require('express');
require('./db/mongoose.js');
const User = require('./models/user');
const Futsal = require('./models/futsal');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post('/futsals', async (req, res) => {
  const futsal = new Futsal(req.body);
  try {
    await futsal.save();
    res.status(201).send(futsal);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findById({ _id });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/futsals', async (req, res) => {
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

app.get('/futsals/:id', async (req, res) => {
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

app.patch('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.patch('/futsals/:id', async (req, res) => {
  console.log(req.params.id, req.body);
  try {
    const futsal = await Futsal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!futsal) {
      return res.status(404).send();
    }
    res.send(futsal);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
