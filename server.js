const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use('/vendor', express.static(path.join(__dirname, 'vendor')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'single-product.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
