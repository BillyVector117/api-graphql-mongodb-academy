// mongoose section
import { Schema, model } from 'mongoose';
import Level from './Level';
import Review from './Review';
import Student from './Student';
// Model Schema for Messages
const CourseSchema: any = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    clases: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum:
            [
                "ALL",
                "BEGINNER",
                "MEDIUM",
                "EXPERT"
            ],
        required: true,
        autopopulate: true,
    },
    path: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    students: {
        type: Object, // Reference to Student model
        autopopulate: true,
    },
    reviews: {
        // type: [{ type: Schema.Types.ObjectId, ref: Review }], // Reference to review model
        type: Object,
        autopopulate: true,
    },


})
export default model('Course', CourseSchema)
