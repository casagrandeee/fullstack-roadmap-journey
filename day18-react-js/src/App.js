import Banner from "./components/Banner/Banner.js";
import Form from "./components/Form";
import {useState} from "react";
import Teams from "./components/Teams";
import Footer from "./components/Footer";

function App() {

    const teams = [
        {
            name: 'Bayern Munich',
            primaryColor: '#FADBD8',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'Borussia Dortmund',
            primaryColor: '#FFF9C4',
            secondaryColor: '#333333'
        },
        {
            name: 'RB Leipzig',
            primaryColor: '#E8EAF6',
            secondaryColor: '#D50032'
        },
        {
            name: 'VfL Wolfsburg',
            primaryColor: '#D5F5E3',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'Eintracht Frankfurt',
            primaryColor: '#B3B3B3',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'Bayer Leverkusen',
            primaryColor: '#F5B7B1',
            secondaryColor: '#333333'
        },
        {
            name: 'Borussia Mönchengladbach',
            primaryColor: '#E6E6E6',
            secondaryColor: '#333333'
        },
        {
            name: 'SC Freiburg',
            primaryColor: '#B3B3B3',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'TSG Hoffenheim',
            primaryColor: '#D6EAF8',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'Hertha BSC',
            primaryColor: '#D1E8FF',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'VfB Stuttgart',
            primaryColor: '#FDEDEC',
            secondaryColor: '#E30613'
        },
        {
            name: 'FC Schalke 04',
            primaryColor: '#D6EAF8',
            secondaryColor: '#FFFFFF'
        },
        {
            name: '1. FC Köln',
            primaryColor: '#FDEDEC',
            secondaryColor: '#E30613'
        },
        {
            name: 'Mainz 05',
            primaryColor: '#FADBD8',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'Union Berlin',
            primaryColor: '#FADBD8',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'Arminia Bielefeld',
            primaryColor: '#B3B3B3',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'FC Augsburg',
            primaryColor: '#F5B7B1',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'VfL Bochum',
            primaryColor: '#D6EAF8',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'Greuther Fürth',
            primaryColor: '#D5F5E3',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'Hannover 96',
            primaryColor: '#D1E8FF',
            secondaryColor: '#333333'
        }
    ];

    const [players, setPlayers] = useState([]);

    const newPlayerRegistered = (player) => {
        setPlayers([...players, player]);
    }

  return (
    <div className="App">
      <Banner />
      <Form  teams={teams.map(team => team.name)} playerRegistered={player => newPlayerRegistered(player)}/>
      {teams.map(team => <Teams
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          players={players.filter(player => player.team === team.name)} />)}

      <Footer />
    </div>
  );
}

export default App;
