const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// الاتصال بقاعدة البيانات
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB Academy Database"))
    .catch(err => console.log(err));

// مسار افتراضي للتأكد من عمل السيرفر
app.get('/', (req, res) => res.send("سيرفر أكاديمية ثمرة المستقبل يعمل بنجاح! ✅"));

// تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
