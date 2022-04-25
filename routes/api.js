
const express = require('express');
const router = express.Router();
const Student = require('../db_model/Student')
const Registration = require('../db_model/Registration')
const Course = require('../db_model/Course');



router.get('/students', (req, res) => {
    console.log('we get a get request for students')
    
    try {
          Student.find({}, function(err, users) {
            var studentsObj = {"students" : []};
            users.forEach((user) =>{
              studentsObj.students.push(user);
            })
            console.log(studentsObj)
            res.send(studentsObj);  
          })
    } catch (error) {
      console.log('Here we have errrors on GET students')
    }
})

router.get('/rows', async (req, res) => {
  const students = await Student.find({})
  const course = await Course.find({})
  const registration = await Registration.find({})

  let allRows = []
  
  students.map(student=>{
      let stuRowDetails = []
      stuRowDetails.push(student.unit_id)
      stuRowDetails.push(student.fullname)

      // REGISTRATIONS [2]
      let courseCode = registration.filter(x=>student.unit_id==x.student_id).map(
        registrationStu=>{
          // play and format date before sending
          let d = registrationStu.unit_timestamp  // fist get the orginal date
          let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
          let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
          let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
          stuRowDetails.push(`${ye}-${mo}-${da}`)
          return registrationStu.courser_code
        }
      )

  
      // Courses [1]
      let CourseName = course.filter(korse=>korse.course_code==courseCode).map(ix=>{
        return ix.course_name
      })

      stuRowDetails.push(CourseName.toString())
      allRows.push(stuRowDetails)
    })
  res.send({message : "Here is all your rows!" , allrows: allRows})
})

router.get('/registrations', (req, res) => {
    console.log('we get a get request for registrations')
    try {
      Registration.find({}, function(err, users) {
        var registrationList = [];
        users.forEach((user) =>{
          registrationList.push(user);
        })
        res.send(registrationList);  
      })
    } catch (error) {
      console.log('we got an error on GET registers')
    }
})

router.get('/courses', (req, res) => {
    console.log('we get a get request for courses')
    try {
      Course.find({}, function(err, users) {
        var courseList = [];
        users.forEach((user) =>{
          courseList.push(user);
        })
        res.send(courseList);  
      })
    } catch (error) {
      console.log('Here we have some errors during GET courses')
    }
})

module.exports = router;