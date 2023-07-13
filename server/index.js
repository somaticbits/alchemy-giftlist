const express = require('express');
const cors = require("cors");
const verifyProof = require('../utils/verifyProof');

const port = 1225;

const app = express();
app.use(cors());
app.use(express.json());

const MERKLE_ROOT = 'ddd59a2ffccddd60ff47993312821cd57cf30f7f14fb82937ebe2c4dc78375aa';

app.post('/allow', (req, res) => {
  // grab the parameters from the front-end here
  const { proof, name } = req.body;

  const isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  console.log(isInTheList);
  res.send({ allowed: isInTheList });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
