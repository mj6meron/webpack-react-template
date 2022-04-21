
/**
 
import React from "react";
//import '../global.css'


export default class GetData {

    static getStudents=()=>{
        fetch('/api/students', {
            method: 'GET',
        }).then(result => result.json()).then(data => {
            return data
            }
        )
    }


    static getCourses=()=>{
            fetch('/api/courses', {
                method: 'GET',
            }).then(result => result.json()).then(data => {
                    return data
                }
            )
    }

    static getRestrations=()=>{
        fetch('/api/registrations', {
            method: 'GET',
        }).then(result => result.json()).then(data => {
                return data
            }
        )
    }
    



}
 */