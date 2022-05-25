 // This module is totally unUSED -
 
 
 export function  getRows(){
  let backEndData = {}; // array of lists - [students, courses, registrations ]
  fetch('/api/rows', {
    method: 'GET',
  }).then(result => result.json()).then(data => {
    console.log("here is rows response ", data)
  })
return backEndData
}

export function getStudents(){
    let backEndData = {}; // array of lists - [students, courses, registrations ]
    fetch('/api/students', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
      backEndData.students = data.students
      console.log(' here is data -<> ' , data.students)
    })
  return backEndData
  }

export function getCourses(){
    fetch('/api/courses', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
        return data
    })}

export function getRegistrations(){
    fetch('/api/registrations', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
        return data
    })}

export function users(req, res){
    res.json({ message: 'Now you are looking for users' });
  }