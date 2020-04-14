import React from "react";
import Courses from "./courses";

const Student = (props) => {

    var output = [];
    for (let i = 0; i < props.enrolled; i++) {
        output.push(<Courses number={i} />);
    }
    return (<>
            <p>Student <b>{props.name}</b> with student number <b>{props.number}</b>
            </p>
            {output}
        </>
    );
};

export default Student;
