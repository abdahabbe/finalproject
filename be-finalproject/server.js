const express = require("express");
const pool = require("./db");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(express.json());

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Create user
app.post("/api/addUser", async (req, res) => {
  const { name, username, email, password, role } = req.body;
  const createDate = new Date();
  try {
    const checkDup = await pool.query(
      "SELECT * FROM users WHERE email = $1 OR username = $2",
      [email, username]
    );

    if (checkDup.rows.length > 0) {
      console.log("Username or Email already exists");
      return res
        .status(400)
        .json({ message: "Username or Email already exists" });
    } else {
      const query =
        "INSERT INTO users (username, email, password, created_at, role, name) VALUES ($1, $2, $3, $4,$5, $6) RETURNING *";
      const result = await pool.query(query, [
        username,
        email,
        password,
        createDate,
        role,
        name,
      ]);
      res.status(200).json(result.rows[0]);
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// User Login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Query to check if user exists
    const query = "SELECT * FROM users WHERE username = $1";
    const result = await pool.query(query, [username]);
    // Check if user exists
    if (result.rows.length === 1) {
      const user = result.rows[0];
      // Compare password hash
      const passwordMatch = password === user.password;
      if (passwordMatch) {
        res.status(200).json({ message: "Login successful" });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all item data
app.get("/api/inventory", async (req, res) => {
  try {
    const query = "SELECT * FROM products";
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Add item
app.post("/api/inventory/add", async (req, res) => {
  const { name, price, stock } = req.body;
  const createDate = new Date();
  try {
    const query =
      "INSERT INTO products (name, price, create_at, quantity) VALUES ($1, $2, $3, $4) RETURNING *";
    const result = await pool.query(query, [name, price, createDate, stock]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete item
app.delete("/api/inventory/:id", async (req, res) => {
  const itemId = req.params.id;
  const query = "DELETE FROM products WHERE product_id = $1";
  try {
    await pool.query(query, [itemId]);
    res
      .status(200)
      .json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Edit item
app.put("/api/inventory/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, stock } = req.body;
  const query =
    "UPDATE products SET name = $1, price = $2, quantity = $3 WHERE product_id = $4 RETURNING *";
  try {
    const result = await pool.query(query, [name, price, stock, id]);

    if (result.rows.length > 0) {
      res.status(200).json({
        success: true,
        message: "Item updated successfully",
        item: result.rows[0],
      });
    } else {
      res.status(404).json({ success: false, message: "Item not found" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
