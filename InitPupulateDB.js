// importing the MODELS
const Student = require('./db_model/Student')
const Registration = require('./db_model/Registration')
const Course = require('./db_model/Course')

module.exports =()=> {

    console.log(" --- started populating on some Database -----")
    let initStudentId = 100001
    let initCourseCode = 700001
// STUDENT OBJECTS!
    const a = [initStudentId++, "Meron Habtemichael", "meronmkl@gmail.com", "passOne"]
    const b = [initStudentId++, "John Lingeswod", "john@gmail.com", "passTwo"]
    const c = [initStudentId++, "Mike Lopez", "lopez@gmail.com", "passThree"]
    const d = [initStudentId++, "Bryon James", "james@gmail.com", "passFour"]
    const e = [initStudentId++, "Jenifer Lopez", "jenifer@gmail.com", "passFive"]
// COURSES OBJECTS
    const c1 = [ initCourseCode++, "Economics",   " About economics"]
    const c2 = [ initCourseCode++, "Finance",     " About finance"]
    const c3 = [ initCourseCode++, "History",     " About history"]
    const c4 = [ initCourseCode++, "Geography",   " About geography"]
    const c5 = [ initCourseCode++, "Physics",     " About physics"]
// Registration Objects
    const r1 = [a[0], c1[0], new Date(5,2019)]
    const r2 = [b[0], c2[0], new Date(9,2020)]
    const r3 = [c[0], c3[0], new Date(0,2020)]
    const r4 = [d[0], c4[0], new Date(7,2021)]
    const r5 = [e[0], c5[0], new Date(2,2022)]

    // Creation Loops
    const allStudents = [a, b, c, d, e]
    const allCourses = [c1, c2, c3, c4, c5]
    const allRegistrations = [r1, r2, r3, r4, r5]

    allStudents.forEach(async (details)=>{
        // only if user Email doesn't exist
        const emailExist = await Student.findOne({ email: details[2] });
        if (!emailExist){
            const hashed_password = details[3]
            const student = new Student({
                unit_id: details[0],
                fullname: details[1],   // this could be hashedPn in the future
                email: details[2],
                password: hashed_password
            })
            const savedStu = await student.save();
            console.log('One user saved ---> ', savedStu)
        } else {console.log('User email already exist!')}
    })
    allCourses.forEach(async (courseDetails)=>{
             const course = new Course({
                 course_code: courseDetails[0],
                 course_name: courseDetails[1],   // this could be hashedPn in the future
                 course_description: courseDetails[2]
             })
             const savedCourse = await course.save();
             console.log('One course saved ---> ', savedCourse)
    })
    allRegistrations.forEach(async (registerDetails)=>{
        const register = new Registration({
            student_id: registerDetails[0],
            courser_code: registerDetails[1],   // this could be hashedPn in the future
            unit_timestamp: registerDetails[2]
        })
        const savedReg = await register.save();
        console.log('One Registration saved ---> ', savedReg)
})
}