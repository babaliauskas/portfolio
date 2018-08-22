const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = 4005;

const nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'))

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });



app.post('/api/send', (req, res) => {
    console.log('tesssss: ')
   let {name, email, message} = req.body;
   const output = `
    Job
    Contact Details
    
        Name: ${name}
        email: ${email}
    
    Message
    ${message}
    `;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PSW
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'Message from babaliauskasprojects.com',
        text: output
    };
 
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.sendStatus(200);
        }
    });

})


app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))




