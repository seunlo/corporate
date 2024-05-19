import nodemailer from "nodemailer";

export const sendMail = (req, res) => {
  const { fname, email, pnumber, message } = req.body;

  // Create Nodemailer transport with debug enabled
  const contactMail = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // Set to true if using SSL/TLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: true, // Ensure this is correct
      minVersion: "TLSv1.2",
    },
    debug: true, // Enable debug output
    logger: true, // Enable logger
  });

  const mailOptions = {
    from: email,
    to: "info@elaloeyfoundry.com",
    subject: `Mail from ${fname} - ${pnumber} `,
    text: message,
  };

  contactMail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      // Sending JSON response with success: false and error message
      return res
        .status(500)
        .json({ success: false, message: error.toString() });
    }
    console.log("Email sent:", info.response);
    // Sending JSON response with success: true and success message
    res
      .status(200)
      .json({ success: true, message: "Email is sent: " + info.response });
  });
};
