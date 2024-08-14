const express = require('express');
const crypto = require('crypto');
const app = express();
app.use(express.json());

const MERCHANT_SECRET = 'MTA2ODM5OTI4MTc1NDY0MTY2ODM2NzAxODE2NTAyMDY3NTA0MTg5M'; // Remove extra space at the en


d

app.post('/api/payment-details', (req, res) => {
    const paymentDetails = req.body;

    // Construct the hash string
    const hashString = `sandbox=${paymentDetails.sandbox}&merchant_id=${paymentDetails.merchant_id}&return_url=${paymentDetails.return_url}&cancel_url=${paymentDetails.cancel_url}&notify_url=${paymentDetails.notify_url}&order_id=${paymentDetails.order_id}&items=${paymentDetails.items}&amount=${paymentDetails.amount}&currency=${paymentDetails.currency}&first_name=${paymentDetails.first_name}&last_name=${paymentDetails.last_name}&email=${paymentDetails.email}&phone=${paymentDetails.phone}&address=${paymentDetails.address}&city=${paymentDetails.city}&country=${paymentDetails.country}&delivery_address=${paymentDetails.delivery_address}&delivery_city=${paymentDetails.delivery_city}&delivery_country=${paymentDetails.delivery_country}&custom_1=${paymentDetails.custom_1}&custom_2=${paymentDetails.custom_2}`;

    console.log('Hash String:', hashString);

    const hash = crypto.createHmac('sha256', MERCHANT_SECRET).update(hashString).digest('hex');

    console.log('Generated Hash:', hash);

    // Include the generated hash in the payment details
    paymentDetails.hash = hash;

    res.json(paymentDetails);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});