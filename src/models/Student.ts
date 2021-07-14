// mongoose section
import { Schema, model } from 'mongoose';
import Course from './Course';
// Model Schema for Messages
const StudentSchema: any = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String

    },
    courses: {
        // [{ type: Schema.Types.ObjectId, ref: Course }]
        type: Array, // Reference to Course model
        //required: true,
        autopopulate: true,
    }

})
export default model('Student', StudentSchema)