const express = require('express');
const ItemHelper = require('../utils/item_helper');
const router = express.Router();

module.exports = router;

router.get('/items', (req, res) => {
    const search = req.query.q;
    if (!!search) {
      ItemHelper.getItems(search, res);
    } else {
      res.status(400).send({
        error: 'No search criteria has been entered'
      });
    }
});

router.get('/items/:id', (req, res) => {
    const itemId = req.params.id;
    if (!!itemId) {
        ItemHelper.getItem(itemId, res);
    } else {
      res.status(400).send({
        error: 'No item identifier entered'
      });
    }
});
