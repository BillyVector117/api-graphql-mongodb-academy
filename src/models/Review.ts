// mongoose section
import { Schema, model } from 'mongoose';
// Model Schema for Messages
const ReviewSchema: any = new Schema({
    name: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },

})
export default model('Review', ReviewSchema)