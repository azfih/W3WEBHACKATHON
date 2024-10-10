const nodemailer = require('nodemailer');

const sendVerificationEmail = async (email, verificationUrl) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'hifzarafiq19@gmail.com', // Use your email
      pass: 'vvyk spqw qcpr xtai' // Use your app password or email password
    }
  });

  const mailOptions = {
    from: 'hifzarafiq19@gmail.com',
    to: email,
    subject: 'Email Verification',
    html: `<p>Click <a href="${verificationUrl}">here</a> to verify your email.</p>`
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendVerificationEmail;
