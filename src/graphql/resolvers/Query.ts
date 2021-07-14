import { IResolvers } from "graphql-tools";
import Course from "../../models/Course";
import Student from "../../models/Student";
const Query: IResolvers = {
    // Execution of each query
    async students(): Promise<any> {
        return await Student.find()
        // .populate({ path: 'courses', model: Course }).exec();
    },
    async student(__: void, { id }): Promise<any> {
        const result = await Student.findById(id)
        if (result === null) {
            return {
                id: "-1",
                name: `No user found with ID: ${id}`,
                email: "",
                courses: []
            }
        }
        return result

    },
    async courses(): Promise<any> {
        return await Course.find()
    },
    async course(__: void, { id }): Promise<any> {
        const result = await Course.findById(id)
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
            }
        }
        return result

    },
}


export default Query;