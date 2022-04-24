const express = require('express');
const router = express.Router();
const Student = require('../db_model/Student')
const Registration = require('../db_model/Registration')
const Course = require('../db_model/Course')

router.get('/students', (req, res) => {
    console.log('we get a get request for students')
    Student.find({}, function(err, users) {
        var studentsList = [];
        users.forEach((user) =>{
          studentsList.push(user);
        })
        res.json(studentsList);  
      })
})

router.get('/registrations', (req, res) => {
    console.log('we get a get request for registrations')
    Registration.find({}, function(err, users) {
        var registrationList = [];
        users.forEach((user) =>{
          registrationList.push(user);
        })
        res.json(registrationList);  
      })
})

router.get('/courses', (req, res) => {
    console.log('we get a get request for courses')
    Course.find({}, function(err, users) {
        var courseList = [];
        users.forEach((user) =>{
          courseList.push(user);
        })
        res.json(courseList);  
      })
})

module.exports = router;