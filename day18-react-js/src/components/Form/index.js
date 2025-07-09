import './Form.css'
import TextForm from "../TextForm";
import DropdownList from "../DropdownList";
import Buttom from "../Buttom";
import {useState} from "react";

const Form = (props) => {


    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [photo, setPhoto] = useState('')
    const [team, setTeam] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        props.playerRegistered({
            name,
            position,
            photo,
            team
        })
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Fill the form to create your team!</h2>
                <TextForm required={true} label="Name" placeholder="Enter your name" value={name} whenChanged={value => setName(value)} />
                <TextForm required={true} label="Position" placeholder="Enter your position" value={position} whenChanged={value => setPosition(value)} />
                <TextForm label="Photo" placeholder="Enter your photo" value={photo} whenChanged={value => setPhoto(value)} />
                <DropdownList required={true} label="Team" itens={props.teams} value={team} whenChanged={value => setTeam(value)} />
                <Buttom>
                    Create Card
                </Buttom>
            </form>
        </section>
    )
}

export default Form