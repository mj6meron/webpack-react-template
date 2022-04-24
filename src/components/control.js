exports.generateRowss = (ourData) => {
 // Courses       --->     course_code     course_name            course_description
 // Registrations --->     student_id        courser_code        unit_timestamp  
 // Student       --->      unit_id     fullname     email      password                                    
    let NewRows = []
    console.log(' here is x -> ', ourData)
    ourData[0].map(student=>{
      let stuRowDetails = []
      stuRowDetails.push(student.unit_id)
      stuRowDetails.push(student.fullname)
      // REGISTRATIONS [2]
      let courseCode = ourData[2].filter(x=>student.unit_id==x.student_id).map(
        registrationStu=>{
          stuRowDetails.push(registrationStu.unit_timestamp)
          return registrationStu.courser_code
        }
      )

      // Courses [1]
      let CourseName = ourData[1].filter(korse=>korse.course_code==courseCode).map(ix=>{
        return ix.course_name
      })
      stuRowDetails.push(CourseName)
      NewRows.push(stuRowDetails)
    })
    return NewRows
  };


  exports.generateRows = (ourData) => {
    console.log(ourData.toString())
      console.log('everything --> ', ourData)
      console.log('here is Courses       -->', ourData.courses)
      console.log('here is Registrations -->', ourData)
      console.log('here is Students      -->', ourData)
  }
  

exports.getBackEndData =()=>{
    let backEndData = {}; // array of lists - [students, courses, registrations ]
    fetch('/api/students', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
      backEndData.students = data
    })

    fetch('/api/courses', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
        backEndData.courses = data
    })
    fetch('/api/registrations', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
        backEndData.registrations = data
    })
    return backEndData
  }
exports.users =(req, res)=>{
    res.json({ message: 'Now you are looking for users' });
  }