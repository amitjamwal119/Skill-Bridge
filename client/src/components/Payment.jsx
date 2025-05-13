import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/Payment.css';

const Payment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const course = location.state?.course;
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            navigate('/success', { state: { course } });
        }, 1500);
    };

    return (
        <div className="payment-container">
            <div className="payment-card">
                <h2>Demo Payment</h2>
                {course && (
                    <div className="course-details">
                        <h3>{course.title}</h3>
                        <p className="price">₹999</p>
                    </div>
                )}
                
                <div className="payment-message">
                    <p>This is a demo payment page.</p>
                    <p>No real payment will be processed.</p>
                </div>

                <button 
                    className="pay-button"
                    onClick={handlePayment}
                    disabled={isProcessing}
                >
                    {isProcessing ? 'Processing...' : 'Complete Demo Payment'}
                </button>
            </div>
        </div>
    );
};

export default Payment; 