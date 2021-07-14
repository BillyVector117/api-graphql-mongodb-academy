"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CourseSchema = new mongoose_1.Schema({
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
        enum: [
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
        type: Object,
        autopopulate: true,
    },
    reviews: {
        type: Object,
        autopopulate: true,
    },
});
exports.default = mongoose_1.model('Course', CourseSchema);
