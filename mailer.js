nodemailer = require('nodemailer');
otp = require('./index.js');

sendEmail = async(email, otp) =>{




// service provider, credentials, handshaking

    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure:true,
        auth:{
            user: 'smritiranjan65@gmail.com',
            pass: 'duim wiob izee hpba'
        }
    })



//mail object
mail = {
    from: 'smritiranjan65@gmail.com',
    to: 'tkumari930451@gmail.com',
    subject: 'OTP',
    text: `Your otp is` + genotp()
}

//send mail
transporter.sendMail(mail, (err, data) => {
    if (err) {
        console.log(err)
    }else {
        console.log(data)
    }
})
};