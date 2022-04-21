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


  const generateRows =()=>{

    return (
      <div>
        here we have the list
      </div>
    )

  }


  console.log('here we have all data ->', backEndData)
  return (
    <div className="Student">
      This is the app component, WoOW!
    </div>
 )   
}