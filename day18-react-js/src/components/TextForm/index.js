import './TextForm.css'
import {useState} from "react";

const TextForm = (props) => {


    const whenTyped = (event) => {
        props.whenChanged(event.target.value);
    }

    return (
        <div className="text-form">
            <label>{props.label}</label>
            <input value={props.value} onChange={whenTyped} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextForm;