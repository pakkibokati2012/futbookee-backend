const express = require('express');
require('./db/mongoose.js');
const User = require('./models/user');
const Futsal = require('./models/futsal');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

app.post('/futsals', (req, res) => {
  const futsal = new Futsal(req.body);
  futsal
    .save()
    .then(() => {
      res.status(201).send(futsal);
    })
    .catch(error => {
      res.status(400).send(error);
    });
});

app.get('/users', (req, res) => {
  User.find({})
    .then(users => res.send(users))
    .catch(error => {
      res.status(500).send(error);
    });
});

app.get('/users/:id', (req, res) => {
  const _id = req.params.id;
  User.findById(_id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.get('/futsals', (req, res) => {
  Futsal.find({})
    .then(futsals => {
      if (!futsals) {
        return res.status(404).send();
      }
      res.send(futsals);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.get('/futsals/:id', (req, res) => {
  const _id = req.params.id;
  Futsal.findById(_id)
    .then(futsal => {
      if (!futsal) {
        return res.status(404).send();
      }
      res.send(futsal);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
