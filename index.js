otpgen = require('otp-generator');
express = require('express');
port = 3000;
app = express();

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

genotp = () => {
    OTP = otpgen.generate(6);
    //console.log(OTP)
    return OTP;
}
// You can limit the no. of charaters of otp
//OTP = otpgen.generate(6);

genotp()
 //sending otps on browser(frontend)
//app.get('/', (req,res) => {
  //  res.send('<h2>Your otp is:</h2> ' + genotp())})

  app.get('/verify', (req, res) => {
    res.sendfile('index.html')
})


app.post('/verify',async(req, res) =>
 {
     userOTP = req.body.otp;
     console.log(userOTP)
     if (userOTP == OTP){
        res.send('verified')
     }
     else{
        res.send('please enter password again')
     }

     //res.send('welcome')
})




