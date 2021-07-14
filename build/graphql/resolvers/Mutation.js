"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Course_1 = __importDefault(require("../../models/Course"));
const Mutation = {
    newCourse: async (_, { course }) => {
        const alreadyExist = await Course_1.default.find({ title: course.title }).exec();
        console.log("Duplicated course!");
        if (alreadyExist.length !== 0) {
            return {
                id: '-1',
                title: "This course already exists",
                description: "",
                clases: -1,
                time: 0.0,
                level: 'ALL',
                logo: '',
                path: '',
                teacher: '',
                students: [],
                reviews: []
            };
        }
        else {
            console.log("New course saved!", course);
            const newCourse = new Course_1.default(course);
            return await newCourse.save();
        }
    },
    modifyCourse: async (_, { course }) => {
        console.log("Updating: ", course.id);
        let isExistingCourse = await Course_1.default.findById(course.id);
        if (isExistingCourse) {
            const reviews = isExistingCourse.reviews;
            const newReviews = course.reviews;
            const newArrayReviews = reviews.concat(newReviews);
            course.reviews = newArrayReviews;
            await Course_1.default.findByIdAndUpdate(course.id, course);
        }
        else {
            return {
                id: '-1',
                title: "This course does not exist",
                description: "",
                clases: -1,
                time: 0.0,
                level: 'ALL',
                logo: '',
                path: '',
                teacher: '',
                students: [],
                reviews: []
            };
        }
        return course;
    },
    deleteCourse: async (_, { id }) => {
        let isExistingCourse = await Course_1.default.findById(id);
        if (isExistingCourse) {
            await Course_1.default.findByIdAndDelete(id);
            return isExistingCourse;
        }
        else {
            return {
                id: '-1',
                title: "Denied action, cannot remove a course if it does not exist!",
                description: "",
                clases: -1,
                time: 0.0,
                level: 'ALL',
                logo: '',
                path: '',
                teacher: '',
                students: [],
                reviews: []
            };
        }
    }
};
exports.default = Mutation;
