import Banner from "./components/Banner/Banner.js";
import Form from "./components/Form";
import {useState} from "react";
import Teams from "./components/Teams";

function App() {

    const teams = [
        {
            name: 'Bayern Munich',
            primaryColor: '#DC052D',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'Borussia Dortmund',
            primaryColor: '#FDE100',
            secondaryColor: '#000000'
        },
        {
            name: 'RB Leipzig',
            primaryColor: '#F5F5F5',
            secondaryColor: '#D50032'
        },
        {
            name: 'VfL Wolfsburg',
            primaryColor: '#48A547',
            secondaryColor: '#F0F0F0'
        },
        {
            name: 'Eintracht Frankfurt',
            primaryColor: '#111111',
            secondaryColor: '#FFFFFF'
        },
        {
            name: 'Bayer Leverkusen',
            primaryColor: '#E32219',
            secondaryColor: '#222222'
        },
        {
            name: 'Borussia Mönchengladbach',
            primaryColor: '#F8F8F8',
            secondaryColor: '#111111'
        },
        {
            name: 'SC Freiburg',
            primaryColor: '#111111',
            secondaryColor: '#F5F5F5'
        },
        {
            name: 'TSG Hoffenheim',
            primaryColor: '#1C63A9',
            secondaryColor: '#E6E6E6'
        },
        {
            name: 'Hertha BSC',
            primaryColor: '#005CA9',
            secondaryColor: '#F5F5F5'
        },
        {
            name: 'VfB Stuttgart',
            primaryColor: '#F5F5F5',
            secondaryColor: '#C30613'
        },
        {
            name: 'FC Schalke 04',
            primaryColor: '#004D9D',
            secondaryColor: '#E6E6E6'
        },
        {
            name: '1. FC Köln',
            primaryColor: '#F5F5F5',
            secondaryColor: '#C30613'
        },
        {
            name: 'Mainz 05',
            primaryColor: '#C30613',
            secondaryColor: '#F5F5F5'
        },
        {
            name: 'Union Berlin',
            primaryColor: '#C30613',
            secondaryColor: '#F5F5F5'
        },
        {
            name: 'Arminia Bielefeld',
            secondaryColor: '#F5F5F5',
            primaryColor: '#111111'
        },
        {
            name: 'FC Augsburg',
            primaryColor: '#A6192E',
            secondaryColor: '#F5F5F5'
        },
        {
            name: 'VfL Bochum',
            primaryColor: '#1C63A9',
            secondaryColor: '#E6E6E6'
        },
        {
            name: 'Greuther Fürth',
            primaryColor: '#008B5A',
            secondaryColor: '#F5F5F5'
        },
        {
            name: 'Hannover 96',
            primaryColor: '#007A33',
            secondaryColor: '#222222'
        }
    ]

    const [players, setPlayers] = useState([]);

    const newPlayerRegistered = (player) => {
        console.log(player);
        setPlayers([...players, player]);
    }

  return (
    <div className="App">
      <Banner />
      <Form  teams={teams.map(team => team.name)} playerRegistered={player => newPlayerRegistered(player)}/>

      {teams.map(team => <Teams key={team.name} name={team.name} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} players={players}/>)}


    </div>
  );
}

export default App;
