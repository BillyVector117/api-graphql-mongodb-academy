"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Course_1 = __importDefault(require("../../models/Course"));
const Student_1 = __importDefault(require("../../models/Student"));
const Query = {
    async students() {
        return await Student_1.default.find();
    },
    async student(__, { id }) {
        const result = await Student_1.default.findById(id);
        if (result === null) {
            return {
                id: "-1",
                name: `No user found with ID: ${id}`,
                email: "",
                courses: []
            };
        }
        return result;
    },
    async courses() {
        return await Course_1.default.find();
    },
    async course(__, { id }) {
        const result = await Course_1.default.findById(id);
        if (result === null) {
            return {
                id: "-1",
                title: `No course found with ID: ${id}`,
                description: "",
                clases: -1,
                time: 0.0,
                logo: "",
                level: "ALL",
                path: "",
                teacher: "",
                reviews: "",
            };
        }
        return result;
    },
};
exports.default = Query;
