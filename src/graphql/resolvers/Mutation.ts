import { IResolvers } from "graphql-tools";
import Course from "../../models/Course";


const Mutation: IResolvers = {

    // Execution of each Mutation
    newCourse: async (_: void, { course }: any) => {
        /*       const data = [{
          "id": "1",
          "title": "Compodoc: Crea documentación en proyectos Angular/Ionic/TS",
          "description": "Crear documentación de calidad y MUY fácil de mantener con Compodoc para proyectos de Angular 2+ / Ionic 2+ / Typescript",
          "clases": 73,
          "time": 3.5,
          "level": "MEDIUM",
          "logo": "https://i.udemycdn.com/course/240x135/1777518_b681_6.jpg",
          "path": "/compodoc-crea-documentacion-en-angular-ionic",
          "teacher": "Anartz Mugika Ledo",
      
      },
      {
          "id": "2",
          "title": "NPM: Desarrollo y publicación de librerias en JS, TS, Angular",
          "description": "¡Aprende desde 0 las nociones de NPM y a crear librerías Node en Javascript Typescript Angular con ejemplos prácticos!",
          "clases": 276,
          "time": 17.5,
          "level": "ALL",
          "logo": "https://i.udemycdn.com/course/240x135/1992318_a8ef_3.jpg",
          "path": "/npm-librerias-node-con-js-typescript-angular-y-otras-herramientas",
          "teacher": "Anartz Mugika Ledo",
      
      },
      {
          "id": "3",
          "title": "Angular: De cero a experto (Angular 8+)",
          "description": "Todo lo que necesitas saber de angular utilizando TypeScript y buenas prácticas ofrecidas por el equipo de angular.",
          "clases": 326,
          "time": 28.5,
          "level": "ALL",
          "logo": "https://i.udemycdn.com/course/240x135/1075334_8b5f_4.jpg",
          "path": "/angular-2-fernando-herrera",
          "teacher": "Fernando Herrera",
      
      },
      {
          "id": "4",
          "title": "Flutter: Tu guía completa de desarrollo para IOS y Android ",
          "description": "Push, Cámara, Mapas, REST API, SQLite, CRUD, Tokens, Storage, Preferencias de usuario, PlayStore, AppStore, Bloc y más!",
          "clases": 264,
          "time": 28.5,
          "level": "ALL",
          "logo": "https://i.udemycdn.com/course/240x135/2306140_8181.jpg",
          "path": "/flutter-ios-android-fernando-herrera",
          "teacher": "Fernando Herrera",
      
      }] */
        const alreadyExist = await Course.find({ title: course.title }).exec()
        console.log("Duplicated course!")
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
            }

        } else {
            console.log("New course saved!", course)
            const newCourse = new Course(course)
            // const newCourse = new Course(...course, course.reviews = null, course.students = null)
            return await newCourse.save()
        }

    },

    modifyCourse: async (_: void, { course }: any) => {
        console.log("Updating: ", course.id)
        let isExistingCourse: any = await Course.findById(course.id)

        if (isExistingCourse) {
            const reviews = isExistingCourse.reviews // Get database reviews
            // console.log(reviews) // Array
            // console.log(typeof reviews, reviews.length)
            const newReviews = course.reviews // Get New Review (1)
            // console.log(typeof newReviews, newReviews.length)
            const newArrayReviews = reviews.concat(newReviews)
            // console.log(typeof newArrayReviews, newArrayReviews.length)
            course.reviews = newArrayReviews
            // console.log(course)
            /* course = isExistingCourse */
            await Course.findByIdAndUpdate(course.id, course)
        } else {
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
            }
        }
        return course
    },

    deleteCourse: async (_: void, { id }: any) => {
        let isExistingCourse: any = await Course.findById(id)
        if (isExistingCourse) {

            await Course.findByIdAndDelete(id)
            return isExistingCourse
        } else {
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
            }
        }
    }
}


export default Mutation;
