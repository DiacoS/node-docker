// controllers/itemController.js
const Item = require('../models/item');

// Henter alle items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.render('index', { items });
    } catch (error) {
        res.status(500).send("Fejl ved hentning af items");
    }
};

// Tilføjer et nyt item
exports.createItem = async (req, res) => {
    const { name, description } = req.body;
    try {
        const item = new Item({ name, description });
        await item.save();
        res.redirect('/');
    } catch (error) {
        res.status(500).send("Fejl ved oprettelse af item");
    }
};
