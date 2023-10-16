var user_model = require('../model/usermodel');
var nodemailer = require('nodemailer');
const storage = require('node-persist');

exports.sendmail = async (req, res) => {

    var data = await user_model.create(req.body);

    if (data) {

        var send_email = data.email;

        var OTP = (Math.floor(100000 + Math.random() * 900000));

        await storage.init( /* options ... */);
        await storage.setItem('OTP',OTP)

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'welcome80808@gmail.com',
                pass: 'fqqjzlhraysbnyrz'
            }
        });

        var mailOptions = {
            from: 'languagepdf@gmail.com',
            to: send_email,
            subject: 'Sending Email using Node.js',
            text: 'loda lasan taro OTP lay le: ' + OTP
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    }

    res.status(200).json({
        status: 'success',
        data
    });
}

exports.check_OTP = async (req,res)=>{

    await storage.init( /* options ... */ );
    var old_otp =  await storage.getItem('OTP');
    var new_otp = req.body.otp;

    if(old_otp==new_otp){
        res.status(200).json({
            status:"Account Verfiy"
        })
    }else{
        res.status(200).json({
            status:"Check Your OTP"
        })
    }

}