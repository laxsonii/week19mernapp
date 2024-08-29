const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
    },
    cost: {
      type: Number,
    },
    calories: {
      type: Number
    }
  }
);

const item = model('Item', itemSchema);

module.exports = Item;
