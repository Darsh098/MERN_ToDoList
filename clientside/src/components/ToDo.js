import React from 'react'

import { FaPencilAlt } from 'react-icons/fa';
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({text, updateMode, deleteToDo}) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                <FaPencilAlt className="icon-edit" onClick={updateMode} />
                <AiFillDelete className="icon-delete" onClick={deleteToDo} />
            </div>
        </div>
    )
}

 export default ToDo