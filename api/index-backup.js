import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";
import mysql from "mysql2";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
db.connect((err) => {
  if (err) {
    console.log("Could not connect to database");
  }

  console.log("Connected to Mysql Database");
});

app.post("/send-mail", (req, res) => {
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
    subject: `Contact Mail from ${fname} and phone number is ${pnumber} `,
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
});

app.post("/register", (req, res) => {
  const { fname, email, pnumber, gender } = req.body;
  const query =
    "INSERT into users (full_name, email, phone, gender) VALUES(?, ?, ?, ?)";
  db.execute(query, [fname, email, pnumber, gender], (err, result) => {
    if (err) {
      console.error("Error inserting into data:", err);
      return res.status(500).json({ success: false, message: err.toString() });
    }

    console.log("Successfully registerd:", result);
    res
      .status(200)
      .json({ success: true, message: "Successfully registered: " });
  });
});
const port = process.env.PORT || 3557;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
