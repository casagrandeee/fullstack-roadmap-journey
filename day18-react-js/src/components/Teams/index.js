import './Teams.css'
import Player from "../Player";

const Teams = (props) => {
    return (
        <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            { props.players.map( player => <Player /> )}
        </section>
    )
}

export default Teams;