var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');
var jwt = require('jsonwebtoken');
var secret = 'ABCDEFG123456';

router.post('/authenticate', authenticate);
router.put('/laboratorios/:id', saveLab);
//router.use(checkToken);
router.get('/people', getPeople);
router.get('/person/:id', getPerson);

router.get('/laboratorios/:labId/instrumentales/:id', getInstrumentalById);
router.get('/laboratorios/:labId/instrumentales', getInstrumentalesByLab);

router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getPeople(req, res, next) {
  res.status(200).send(data.people);
}

function getPerson(req, res, next) {
  var id = +req.params.id;
  var person = data.people.filter(function (p) {
    return p.id === id;
  })[0];

  if (person) {
    res.status(200).send(person);
  } else {
    four0four.send404(req, res, 'person ' + id + ' not found');
  }
}

function authenticate(req, res, next) {
  if (req.body.name !== 'admin' && req.body.password !== 'admin') {
    res.json({
      success: false,
      message: 'Authentication failed. User not found.'
    });
  } else {
    const payload = {
      roles: ['Laboratorio-Editor', 'Pericia-Editor']
    };

    var token = jwt.sign(payload, secret, {
      expiresIn: 1440 // expires in 24 hours
    });

    // return the information including token as JSON
    res.json({
      success: true,
      message: 'Enjoy your token!',
      token: token
    });
  }
}

function checkToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.headers.authorization;

  // decode token
  if (token) {
    token = token.replace('Bearer ', '');
    // verifies secret and checks exp
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
}

function saveLab(req, res, next) {
  console.log(req.params.id, req.body.laboratorio);
  res.status(200).send({
    success: true,
    message: 'Laboratorio actualizado'
  });
}

function getInstrumentalesByLab(req, res, next) {
  var labId = +req.params.labId;
  var instrumentales = data.instrumentales.filter(function (i) {
    return i.Instrumental.laboratorio_id === labId.toString();
  });

  if (instrumentales.length > 0) {
    res.status(200).send({results : instrumentales});
  } else {
    four0four.send404(req, res, 'la relacion con el laboratorio ' + labId + ' no existe');
  }
}

function getInstrumentalById(req, res, next) {
  var id = +req.params.id;
  var instrumental = data.instrumentales.filter(function (i) {
    return i.id === id;
  })[0];

  if (instrumental) {
    res.status(200).send({results: instrumental});
  } else {
    four0four.send404(req, res, 'El instrumental ' + id + ' no existe');
  }
}
