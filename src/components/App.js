import React from "react";
import GetData from "./GetData";
//import '../global.css'

export default function App() {
  GetData.getStudents()
  GetData.getCourses()
  GetData.getRestrations()
  console.log('hii there')
  return (
    <div className="Student">
      This is the app component, WoOW!
    </div>
  )
}
