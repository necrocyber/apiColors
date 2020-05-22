import { model, Schema } from "mongoose";

const colorSchema = new Schema({
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

export default model('color', colorSchema)