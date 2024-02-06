express = require('express');
otp = require('./index.js');
mailer = require('./mailer.js')

app = express();

app.use(express.json());

app.post('/send', async(req, res) => {
    mail = 'smritiranjan65@gmail.com';
    OTP = genotp();
    await sendEmail(mail, OTP)
    res.send('email sent successfully')

})


app.send('/verify',async(req, res) =>
 {
     userOTP = req.user.otp;
     if (userOTP == OTP){
        res.send('verified')
     }
     else{
        res.send('please enter password again')
     }
})
