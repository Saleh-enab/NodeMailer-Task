import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();




export const sendMail = async (recipient: string, OTP: string, name: string) => {

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            font-size: 16px;
            color: #555;
        }
        .otp {
            font-size: 24px;
            font-weight: bold;
            color: #007BFF;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Email Verification</h1>
        <p>Hello,${name}</p>
        <p>Thank you for registering with us. Please use the following OTP to verify your email address:</p>
        <p class="otp">${OTP}</p>
        <p>This OTP is valid for the next 10 minutes.</p>
        <p>If you did not request this, please ignore this email.</p>
        <div class="footer">
            <p>Best regards,</p>
            <p>Your Company Name</p>
        </div>
    </div>
</body>
</html>
`
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 578,
        secure: false,
        auth: {
            user: process.env.APP_USER,
            pass: process.env.APP_PASS,
        },
    })

    const mailOptions = {
        from: {
            name: "Saleh Enab",
            address: "salehenab850@gmail.com"
        },
        bcc: recipient,
        subject: "Email Verification",
        html,
    }
    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.error(err)
        }
        console.log("Email sent: " + info.response)
    })
}