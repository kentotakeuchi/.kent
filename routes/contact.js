var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const password = require('../secret');

/* GET users listing. */
router.post('/', function(req, res, next) {

    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.field;
    var content = `name: ${name} \n email: ${email} \n message: ${message} `;
  // console.log('hello');
  //   res.setHeader('Content-Type', 'text/plain')
  //   res.write('you posted:\n')
  //   res.end(JSON.stringify(req.body, null, 2))
  // res.send('respond with a resource');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'xxxxxxxxxxxxxxx@mail',
            pass: password
        }
    });
    // const message = res.body.name;  Is this a cause?
    const mailOptions = {
        from: email, // sender address
        to: 'xxxxxxxxxxxxxx@mail', // list of receivers
        subject: 'New Message from Contact Form', // Subject line
        text: content// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err);
        else
            console.log(info);
    });

    res.redirect("/index.html");
});

module.exports = router;

