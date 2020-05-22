"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

const colorSchema = new (0, _mongoose.Schema)({
    name: {
        type: String,
        unique: true,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    pantone_value: {
        type: String,
        required: true
    }
});

exports. default = _mongoose.model.call(void 0, 'color', colorSchema)