import { useState, useEffect } from 'react'
import {Course } from '../Course/Course'
import PropTypes from "prop-types";
export const Courses = ({handleSelectBtn}) => {
 const [courseJson, setCourseJson] = useState([]);

 useEffect(()=>{
    fetch('course.json')
    .then(res => res.json())
    .then(data => setCourseJson(data))
 },[])

  return (
    <div className="md:w-2/3 grid grid-cols-3 gap-4">
        {
            courseJson.map(course => <Course 
                key={course.id}
                 course={course}
                 handleSelectBtn={handleSelectBtn}
                 ></Course>)
        }
     </div>
  )
}

Courses.propTypes ={
    handleSelectBtn: PropTypes.func.isRequired
}