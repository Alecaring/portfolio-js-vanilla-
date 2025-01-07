const nodemailer = require("nodemailer");
const config = require("../config/mail.config");


const sendEmail = async (email, subject, htmlContent) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: config.PERSONAL_EMAIL,
            pass: config.PERSONAL_PASSWORD_EMAIL
        }
    });

    const mailOptions = {
        from: config.PERSONAL_EMAIL,
        to: config.PERSONAL_EMAIL,
        subject: subject,
        html: htmlContent,
        replyTo: email,
    };

    try {

        const info = await transporter.sendMail(mailOptions);
        console.log("email inviata:", info.response);

        return info;

    } catch (error) {

        console.error("errore durante l'invio della mail!", error.message);
    
    }
};

module.exports = sendEmail;