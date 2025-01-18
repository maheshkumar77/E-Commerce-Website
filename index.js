const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Razorpay = require("razorpay");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());  // Correct method call
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Test route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Route to create Razorpay order
app.post("/orders", async (req, res) => {
    const razorpay = new Razorpay({
        key_id: "rzp_test_GcZZFDPP0jHtC4",
        key_secret: "6JdtQv2u7oUwEWziYeyoewJ"
    });

    const options = {
        amount: req.body.amount,  // Amount should be in smallest unit (e.g., cents)
        currency: req.body.currency,
        receipt: "receipt#1",  // Modify this to generate unique receipts if needed
        payment_capture: 1      // Auto-capture payment
    };

    try {
        const response = await razorpay.orders.create(options);
        res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Failed to create order" });
    }
});

// Route to fetch payment status
app.get("/payment/:paymentId", async (req, res) => {
    const { paymentId } = req.params;

    const razorpay = new Razorpay({
        key_id: "rzp_test_GcZZFDPP0jHtC4",
        key_secret: "6JdtQv2u7oUwEWziYeyoewJ"
    });

    try {
        const payment = await razorpay.payments.fetch(paymentId);  // Correct method: fetch
        if (!payment) {
            return res.status(500).json({ error: "Error loading payment from Razorpay" });
        }

        res.json({
            status: payment.status,
            method: payment.method,  // Fixed spelling of 'method'
            amount: payment.amount,
            currency: payment.currency
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch payment" });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
