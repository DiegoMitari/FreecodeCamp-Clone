import React from "react";
import '../style/SectionCourses.css';

function BtnCourse(props) {
    return (
        <div className="btn-course">
            <div>
            <ion-icon name={props.nameIcon} className="icon"></ion-icon>
            <p className="text-icon">{props.nombreCurso}</p>
            <ion-icon name="chevron-forward-outline" className="arrow-icon"></ion-icon>
            </div>
        </div>
    );
}

export default BtnCourse;