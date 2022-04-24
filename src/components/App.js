import React, { useState, useEffect } from "react";
const bagTool = require('./control');
//import '../global.css'

export default function App() {
  const [rows, setRows] = useState([]) 

// Courses       --->     course_code     course_name            course_description
// Registrations --->     student_id        courser_code        unit_timestamp  
// Student       --->      unit_id     fullname     email      password                                    


  useEffect(() => {
    console.log("we changed rows")
  }, [rows]);

 setTimeout(()=>{
   console.log('here in nine seconds')
 }, 2000)

  let x = bagTool.getBackEndData()
  console.log('here we have all data ->', x)
  console.log('And here is all the rows -> ', bagTool.generateRows(x))//

  return (
    <div className="Student">
      <div className="row header"></div>
      <div className="row bodydata">
        hi
      </div>
      This is the app component, WoOW!
    </div>
 )   
}

