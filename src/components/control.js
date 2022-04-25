 // This module is totally unUSED -
 
 
 exports.getRows =()=>{
  let backEndData = {}; // array of lists - [students, courses, registrations ]
  fetch('/api/rows', {
    method: 'GET',
  }).then(result => result.json()).then(data => {
    console.log("here is rows response ", data)
  })
return backEndData
}

exports.getStudents =()=>{
    let backEndData = {}; // array of lists - [students, courses, registrations ]
    fetch('/api/students', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
      backEndData.students = data.students
      console.log(' here is data -<> ' , data.students)
    })
  return backEndData
  }

exports.getCourses =()=>{
    fetch('/api/courses', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
        return data
    })}

exports.getRegistrations =()=>{
    fetch('/api/registrations', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
        return data
    })}

exports.users =(req, res)=>{
    res.json({ message: 'Now you are looking for users' });
  }