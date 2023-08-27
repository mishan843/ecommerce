const asyncHandler = require("express-async-handler");
var nodemailer = require("nodemailer");

const sendEmail = asyncHandler(async (data, req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_ID, // generated ethereal user
      pass: process.env.MP // generated ethereal password
    }
  });
  // create reusable transporter object using the default SMTP transport

  // send mail with defined transport object
  var info1= {
    from: 'Mishan &lt;' + process.env.EMAIL_ID + '&gt;', // sender address
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html:data.html
  };

  transporter.sendMail(info1, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  // console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

module.exports = sendEmail;
