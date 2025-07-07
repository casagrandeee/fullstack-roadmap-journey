import './TextForm.css'

const TextForm = (props) => {

    return (
        <div className="text-form">
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default TextForm;