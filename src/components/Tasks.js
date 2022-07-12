import React from 'react';
import Task from './Task';

// const tasks = [
//         {
//             "id" : 1,
//             "text" : "Doctors Appointment",
//             "day" : "Feb 5th at 14:30",
//             "reminder" : true
//         }, 
//         {
//             "id" : 1,
//             "text" : "Meeting at school",
//             "day" : "Feb 6th at 15:30",
//             "reminder" : true
//         },
//         {
//             "id" : 1,
//             "text" : "Take a test",
//             "day" : "Feb 7th at 10:30",
//             "reminder" : false
//         }
//     ];

const Tasks = ({tasks, onDelete}) => {
    return (
        <div>
            <ul>
                {tasks.map((task) => {
                    return (
                        <Task key={task.id} task={task} onDelete={onDelete}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default Tasks