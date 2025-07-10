import './Teams.css'
import Player from "../Player";

const Teams = (props) => {
    return (
        (props.players.length > 0) ? <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='players'>
            { props.players.map( player => <Player backgroundColor={props.primaryColor} key={player.name} name={player.name} position={player.position} photo={player.image} /> )}
            </div>
        </section>
        : ''
    )
}

export default Teams;