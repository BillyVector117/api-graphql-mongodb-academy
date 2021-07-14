// mongoose section
import { Schema, model } from 'mongoose';
// Model Schema for Messages
const LevelSchema: any = new Schema({
    ALL: {
        type: String,
        default: "ALL",
        required: true
    },
    BEGINNER: {
        type: Number,
        default: "BEGINNER",
        required: true
    },
    MEDIUM: {
        type: String,
        default: "MEDIUM",
        required: true
    },
    EXPERT: {
        type: String,
        default: "EXPERT",
        required: true
    },

})
export default model('Level', LevelSchema)