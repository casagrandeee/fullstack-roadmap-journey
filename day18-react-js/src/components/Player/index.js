import './Player.css'

const Player = (props) => {
    return (
        <div className='player'>
            <div className='header'>
                <img
                    src={props.photo}
                    alt={props.name}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/100';
                    }}
                />
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    )
}

export default Player;