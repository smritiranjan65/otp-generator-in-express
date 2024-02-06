express = require('express');
otp = require('./index.js');
mailer = require('./mailer.js')

app = express();

app.use(express.json());
app.use(express.urlenoded({ extended : true}))

app.get('/verify', (req, res) => {
    res.sendFile('index.html')
})

app.post('/send', async(req, res) => {
    mail = 'smritiranjan65@gmail.com';
    OTP = genotp();
    await sendEmail(mail, OTP)
    res.send('email sent successfully')

})



app.post('/verify',async(req, res) =>
 {
     userOTP = req.body.otp;
     if (userOTP == OTP){
        res.send('verified')
     }
     else{
        res.send('please enter password again')
     }

     //res.send('welcome')
})
