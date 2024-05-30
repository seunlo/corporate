import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import cors from "cors";
import mysql from "mysql2";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3557;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
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
});

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

app.post("/register", (req, res) => {
  // Fields coming from the registrattion form
  const { firstname, lastname, email, pnumber, gender } = req.body;
  if (!firstname || !lastname || !email || !pnumber || !gender) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  const query =
    "INSERT INTO users (fname, lname, email, phone, gender) VALUES(?, ?, ?, ?, ?)"; // data field should change to the form fields and arranged in the same order for insertion
  db.execute(
    query,
    [firstname, lastname, email, pnumber, gender],
    (err, result) => {
      if (err) {
        console.error("Error inserting into data:", err);
        return res
          .status(500)
          .json({ success: false, message: "Database error: " + err.message });
      }
      console.log("Successfully registered:", result);
      res
        .status(200)
        .json({ success: true, message: "Successfully registered" });
    }
  );
});

app.get("/fetchUsers", (req, res) => {
  //const sql = "SELECT * FROM users";
  const sql = "SELECT * FROM users ORDER BY created_at DESC";
  db.execute(sql, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
});
