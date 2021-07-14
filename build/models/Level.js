"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LevelSchema = new mongoose_1.Schema({
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
});
exports.default = mongoose_1.model('Level', LevelSchema);
