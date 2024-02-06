express = require('express');
otp = require('./index.js');
mailer = require('./mailer.js')

app = express();

app.use(express.json());

app.post('/send', async(req, res) => {
    mail = req.body.email;
    OTP = genotp();
    await sendEmail(mail, OTP)
    res.send('email sent successfully')
})