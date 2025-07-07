import './Form.css'
import TextForm from "../TextForm";

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Fill the form to create your team!</h2>
                <TextForm label="Name" placeholder="Enter your name"/>
                <TextForm label="Position" placeholder="Enter your position"/>
                <TextForm label="Photo" placeholder="Enter your photo"/>
            </form>
        </section>
    )
}

export default Form