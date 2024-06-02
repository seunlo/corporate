const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "elaohoey_db",
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Could not connect to database:", err);
  } else {
    console.log("Connected to MySQL Database");
    // Release the connection when you're done with it
    connection.release();
  }
});

app.get("/", (req, res) => {
  res.send("all things are working");
});

app.post("/register", (req, res) => {
  const {
    form_fullname,
    form_email,
    form_pnumber,
    form_gender,
    form_s_media,
    form_h_address,
    form_edu_back,
    form_work_exp,
    form_prob,
    form_sol,
    form_industry,
    form_stage,
    form_investor,
    form_challeng,
    form_expect,
  } = req.body;
  if (
    !form_fullname ||
    !form_email ||
    !form_pnumber ||
    !form_gender ||
    !form_s_media ||
    !form_h_address ||
    !form_edu_back ||
    !form_work_exp ||
    !form_prob ||
    !form_sol ||
    !form_industry ||
    !form_stage ||
    !form_investor ||
    !form_challeng ||
    !form_expect
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  const query =
    "INSERT INTO users (db_fullname, db_email, db_phone, db_gender, db_social_med, db_home_add, db_edu, db_experi, db_prob, db_sol, db_industry, db_stage, db_investor, db_challenge, db_expect) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.execute(
    query,
    [
      form_fullname,
      form_email,
      form_pnumber,
      form_gender,
      form_s_media,
      form_h_address,
      form_edu_back,
      form_work_exp,
      form_prob,
      form_sol,
      form_industry,
      form_stage,
      form_investor,
      form_challeng,
      form_expect,
    ],
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
  const sql = "SELECT * FROM users ORDER BY created_at DESC";
  db.execute(sql, (err, results) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res
        .status(500)
        .json({ success: false, message: "Database error: " + err.message });
    }
    res.json(results);
  });
});

app.post("/send-mail", (req, res) => {
  const { fname, email, pnumber, message } = req.body;

  const contactMail = nodemailer.createTransport({
    host: "elaloeyfoundry.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@elaloeyfoundry.com",
      pass: "I6hfVT+u]i$[",
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
    debug: true,
    logger: true,
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
      return res
        .status(500)
        .json({ success: false, message: error.toString() });
    }
    console.log("Email sent:", info.response);
    res
      .status(200)
      .json({ success: true, message: "Email is sent: " + info.response });
  });
});
