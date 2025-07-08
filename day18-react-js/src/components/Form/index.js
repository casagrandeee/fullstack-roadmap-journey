import './Form.css'
import TextForm from "../TextForm";
import DropdownList from "../DropdownList";
import Buttom from "../Buttom";
import {useState} from "react";

const Form = () => {

    const teams = [
        'Bayern Munich',
        'Borussia Dortmund',
        'RB Leipzig',
        'VfL Wolfsburg',
        'Eintracht Frankfurt',
        'Bayer Leverkusen',
        'Borussia Mönchengladbach',
        'SC Freiburg',
        'TSG Hoffenheim',
        'Hertha BSC',
        'VfB Stuttgart',
        'FC Schalke 04',
        '1. FC Köln',
        'Mainz 05',
        'Union Berlin',
        'Arminia Bielefeld',
        'FC Augsburg',
        'VfL Bochum',
        'Greuther Fürth',
        'Hannover 96',
        '1. FC Nürnberg',
        'FC St. Pauli',
        'Karlsruher SC',
        'Dynamo Dresden',
        'Eintracht Braunschweig'
    ]

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [photo, setPhoto] = useState('')
    const [team, setTeam] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitting ==> ", name, position, photo, team);
    }

    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Fill the form to create your team!</h2>
                <TextForm required={true} label="Name" placeholder="Enter your name" value={name} whenChanged={value => setName(value)} />
                <TextForm required={true} label="Position" placeholder="Enter your position" value={position} whenChanged={value => setPosition(value)} />
                <TextForm label="Photo" placeholder="Enter your photo" value={photo} whenChanged={value => setPhoto(value)} />
                <DropdownList required={true} label="Team" itens={teams} value={team} whenChanged={value => setTeam(value)} />
                <Buttom>
                    Create Card
                </Buttom>
            </form>
        </section>
    )
}

export default Form