import React, { useState, useEffect } from "react";
//import '../global.css'

export default function App() {

  let backEndData = []; // array of lists - [students, courses, registrations ]
  useEffect(()=>{
    fetch('/api/students', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
      backEndData.push(data)
    })
    fetch('/api/courses', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
      backEndData.push(data)
    })
    fetch('/api/registrations', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
      backEndData.push(data)
    })
  })

// Courses       --->     course_code     course_name            course_description
// Registrations --->     student_id        courser_code        unit_timestamp  
// Student       --->      unit_id     fullname     email      password                                    

  const generateRows =()=>{

    let rows = []

    backEndData[0].forEach(student=>{
      let stuRowDetails = []
      stuRowDetails.push(student.unit_id)
      stuRowDetails.push(student.fullname)
  
      

      // REGISTRATIONS [2]
      let courseCode = backEndData[2].filter(x=>student.unit_id==x.student_id).map(
        registrationStu=>{
          stuRowDetails.push(registrationStu.unit_timestamp)
          return registrationStu.courser_code
        }
      )

      // Courses [1]
      let CourseName = backEndData[1].filter(korse=>korse.course_code==courseCode).map(ix=>{
        return ix.course_name
      })
      stuRowDetails.push(CourseName)
      rows.push(stuRowDetails)
    })
    return (
      rows.map(eachrow=>{

      })
    )
  }

 setTimeout(()=>{
  console.log(generateRows())
 }, 2000)


  console.log('here we have all data ->', backEndData)
  return (
    <div className="Student">
      This is the app component, WoOW!
    </div>
 )   
}