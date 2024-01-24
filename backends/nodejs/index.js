// app.js
const express = require('express')

const app = express();
const port = 3000;

// Main service function
function mainService() {
    return {
        code:200,
        status: true,
        message: 'hello world!'
    };
}

// Health service function
function healthCheckService() {
    return {
        code:200,
        status: true,
        message: 'service is healthy'
    };
}

// Export function module
module.export={mainService,healthCheckService}

// Main controller
app.get('/', (req, res) => {
    const response = mainService();
    res.json(response);
});

// Health check controller
app.get('/health-check', (req, res) => {
    const response = healthCheckService();
    res.json(response);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
