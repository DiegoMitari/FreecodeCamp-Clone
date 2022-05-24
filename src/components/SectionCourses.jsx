import React from "react";
import '../style/SectionCourses.css';
import BtnCourse from "./BtnCourse";

function SectionCourses() {
    return (
        <div className="">
            <p>Earn free verified certifications in:</p>
            <div>
                <BtnCourse 
                    nameIcon = 'laptop-outline'
                    nombreCurso = 'Responsive Web Design'
                />
                <BtnCourse 
                    nameIcon = 'logo-javascript'
                    nombreCurso = 'JavaScript Algorithms and Data Structures'
                />
                <BtnCourse 
                    nameIcon = 'logo-react'
                    nombreCurso = 'Front End Development Libraries'
                />
                <BtnCourse 
                    nameIcon = 'bar-chart-outline'
                    nombreCurso = 'Data Visualization'
                />
                <BtnCourse 
                    nameIcon = 'desktop-outline'
                    nombreCurso = 'Back End Development and APIs'
                />
                <BtnCourse 
                    nameIcon = 'flask-outline'
                    nombreCurso = 'Quality Assurance'
                />
                <BtnCourse 
                    nameIcon = 'logo-python'
                    nombreCurso = 'Scientific Computing with Python'
                />
                 <BtnCourse 
                    nameIcon = 'analytics-outline'
                    nombreCurso = 'Data Analysis with Python'
                />
                 <BtnCourse 
                    nameIcon = 'build-outline'
                    nombreCurso = 'Information Security'
                />
                 <BtnCourse 
                    nameIcon = 'calculator-outline'
                    nombreCurso = 'Machine Learning with Python'
                />
                <BtnCourse 
                    nameIcon = 'phone-portrait-outline'
                    nombreCurso = 'Responsive Web Design (Beta)'
                />
                <BtnCourse 
                    nameIcon = 'server-outline'
                    nombreCurso = 'Relational Database (Beta)'
                />
            </div>
        </div>
    );
}

export default SectionCourses;