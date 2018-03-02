const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../models/user');


// router.get('/', (req, res) => {
//   res.render('index')
// });

router.route('/signup')
.post((req,res) => {
  console.log('this is params: ', req.params);
  let user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.save((err, user) => {
    if (err) {
      console.log('There was an error: ', err);
      res.send(err);
    }
    console.log('Successfully created new user: ', user);
    res.send('User successfully added!');
  });
})

router.route('/update')
.post((req, res) => {
  const doc = {
    username: req.body.username,
    passeword: req.body.password,
  };
  console.log(doc);
  user.update({_id: req.body._id}, doc, (err, result) => {
    if (err) {
      res.send(err);
      res.send('User successfully updated!');
    }
  });
});

router.get('/delete', function(req, res){
  const id = req.query.id;
  user.find({_id: id}).remove().exec((err, user) => {
    if(err) {
      res.send(err)
      res.send('User successfully deleted!');
    }
  })
});

module.exports = router;

// router.get('/getAll',function(req, res) {
//     var usernameRec = req.query.username;
//     var passwordRec = req.query.password;
//     if(usernameRec && usernameRec != 'All'){
//         user.find({$and: [ {username: usernameRec}, {password: passwordRec}]}, function(err, users) {
//             if (err)
//                 res.send(err);
//                 res.json(users);
//         });
//     } else {
//         user.find({user: userRec}, function(err, expenses) {
//             if (err)
//             res.send(err);
//             res.json(users);
//         });
//     }
// });