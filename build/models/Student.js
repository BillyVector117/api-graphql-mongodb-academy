"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const StudentSchema = new mongoose_1.Schema({
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
        type: Array,
        autopopulate: true,
    }
});
exports.default = mongoose_1.model('Student', StudentSchema);
