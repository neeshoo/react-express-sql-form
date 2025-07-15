const express = require('express');
const cors = require('cors');
const formRoutes = require('./routes/form');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/form', formRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
