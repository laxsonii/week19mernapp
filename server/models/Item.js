const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true // takes off extra characters
    },
    image: {
      type: String,
    },
    cost: {
      type: Number,
    },
    calories: {
        type: Number,
    }
  }
);

const Item = model('Item', itemSchema);

module.exports = Item;
