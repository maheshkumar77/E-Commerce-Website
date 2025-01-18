import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Shopcontext } from '../../context/Shopcontext';
import './style.css';

const Payment = () => {
    const { getTotalCartAmount } = useContext(Shopcontext);
    const [responseState, setResponseState] = useState([]);
    const [responseId, setResponseId] = useState("");  // Now used
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Load script for Razorpay
    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    // Create Razorpay order
    const createRazorpayOrder = (amount) => {
        const data = JSON.stringify({
            amount: amount * 100, // Convert to smallest unit (e.g. cents)
            currency: "USD",
        });

        const config = {
            method: "post",
            url: "http://localhost:5000/orders",
            headers: {
                'Content-Type': 'application/json',
            },
            data: data,
        };

        setLoading(true);
        axios.request(config)
            .then((response) => {
                handleRazorpayScreen(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Error creating order. Please try again later.");
                setLoading(false);
            });
    };

    // Handle Razorpay payment screen
    const handleRazorpayScreen = async (orderData) => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Error loading Razorpay script");
            return;
        }

        const options = {
            key: 'rzp_test_Ld8VJKgd9spxQ', // Razorpay API key
            amount: orderData.amount, // Amount in smallest unit
            currency: 'USD',
            name: "Shop you and me",
            description: "Payment for Shop you and me",
            order_id: orderData.id, // Razorpay order ID
            handler: function (response) {
                setResponseId(response.razorpay_payment_id); // Now using responseId
                alert("Payment Successful!");
            },
            prefill: {
                name: "Shop you and me",
                email: "shopyouandme@gmail.com",
            },
            theme: {
                color: "#F4C430",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    // Fetch payment status
    const paymentFetch = (e) => {
        e.preventDefault();
        const paymentId = e.target.paymentId.value;

        axios.get(`http://localhost:5000/payment/${paymentId}`)
            .then((response) => {
                setResponseState(response.data);
            })
            .catch((error) => {
                setError("Error fetching payment status.");
            });
    };

    return (
        <div className="payment-container">
            <div className="payment-card">
                <h2 className="payment-title">Payment</h2>

                {error && <div className="error-message">{error}</div>}

                {/* Payment Button */}
                <button
                    className="payment-button"
                    onClick={() => createRazorpayOrder(getTotalCartAmount())}
                    disabled={loading}
                >
                    {loading ? "Loading..." : `Pay $${getTotalCartAmount()}`}
                </button>

                {/* Payment status form */}
                <form onSubmit={paymentFetch}>
                    <input
                        className="payment-input"
                        type="text"
                        name="paymentId"
                        placeholder="Enter Payment ID"
                        required
                    />
                    <button
                        className="submit-button"
                        type="submit"
                    >
                        Check Payment Status
                    </button>
                </form>

                {/* Display payment response */}
                {responseState && (
                    <div className="payment-status">
                        <h4>Payment Status</h4>
                        <pre>{JSON.stringify(responseState, null, 2)}</pre>
                    </div>
                )}

                {/* Display payment ID */}
                {responseId && <p>Payment ID: {responseId}</p>}
            </div>
        </div>
    );
};

export default Payment;
