import React, { useState, useEffect } from "react";
//import '../global.css'

export default function App() {
  const [rows, setRows] = useState([]) 


  useEffect(() => {
    //console.log("we changed rows")
    fetch('/api/rows', {
      method: 'GET',
    }).then(result => result.json()).then(data => {
      setRows(data.allrows)
      console.log("here is rows response ", data.allrows)
    })
  }, []);

  useEffect(() => {
    console.log('her we have changed rows')
    return () => {
    };
  }, [rows]);


  const sortBy_stuId = ()=>{
    console.log('sortBy_stuId is clicked')
    let mylist = rows
    mylist.sort(function(a,b){return a[0].localeCompare(b[0]);})
    console.log('mylist', mylist)
    setRows(mylist)
  } 

  const sortBy_stuName = ()=>{
    console.log('sortBy_stuName is clicked')
    let mylist = rows
    mylist.sort(function(a,b){return a[1].localeCompare(b[1]);})
    console.log('mylist', mylist)
  }

  const sortBy_courseName = ()=>{
    let mylist = rows
    mylist.sort(function(a,b){return a[3].localeCompare(b[3]);})
    console.log('mylist', mylist)
  }

  const sortBy_regDate = ()=>{
    console.log('sortBy_regDate is clicked')
    let mylist = rows
    mylist.sort(function(a,b){return a[2].localeCompare(b[2]);})
    console.log('mylist', mylist)
  }  

  console.log('rowsss',rows)

  return (
    <div>
          <table>
            <tr className="headerrow">
              <th className="cell" onClick={sortBy_stuId}>Stu-ID</th>
              <th className="cell" onClick={sortBy_stuName}>Student Name</th>
              <th className="cell" onClick={sortBy_courseName}>Course Name</th>
              <th className="cell" onClick={sortBy_regDate}>Registration Date</th>
            </tr>
            {
              rows.map((cell)=>{
                return <tr key={cell[0]} className="row bodyrow">
                  <td className="cell"> {cell[0]} </td>
                  <td className="cell"> {cell[1]} </td>
                  <td className="cell"> {cell[3]} </td>
                  <td className="cell"> {cell[2]} </td>
                  </tr>
                 })
            }
          </table>
    </div>
 )   
}


