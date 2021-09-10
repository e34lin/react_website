const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api', (req, res, next) => {
    res.send('API Status: Running')
});

app.post('/api/email', (req, res, next) => {

    sendGrid.setApiKey('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');
    const msg = {
        to: 'e34lin@uwaterloo.ca',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });
        })

        .catch(err => {
            
            console.log('error: ', err);
            res.status(401).json({
                success: false
            }); 
        });


});

app.listen(3030, '0.0.0.0');

