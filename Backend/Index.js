const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://lovekeshthakur33:CKvq2bLmlzNrb5VB@black.mycowep.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const DataSchema = new mongoose.Schema({/* your schema definition */});
const Data = mongoose.model('Data', DataSchema);

app.get('/api/data', async (req, res) => {
    const { year, topic, sector, region, pest, source, swot, country, city } = req.query;
    const filter = {};
    if (year) filter.year = year;
    if (topic) filter.topic = topic;
    if (sector) filter.sector = sector;
    if (region) filter.region = region;
    if (pest) filter.pest = pest;
    if (source) filter.source = source;
    if (swot) filter.swot = swot;
    if (country) filter.country = country;
    if (city) filter.city = city;
    
    const data = await Data.find(filter);
    res.json(data);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
