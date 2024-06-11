import React, { useEffect, useState } from "react";
import './App.css';
import { FaHandPaper, FaHandRock } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa6";
import Winner from "./Winner.jsx";
import Loser from "./Loser.jsx";

function App() {
    const options = [
        {
            name: 'rock',
            icon: <FaHandRock size={50} color={'#F1C27D'}/>,
        },
        {
            name: 'paper',
            icon: <FaHandPaper size={50} color={'#F1C27D'} />,
        },
        {
            name: 'scissors',
            icon: <FaHandScissors size={50} color={'#F1C27D'} />,
        }
    ];

    const randomChoice = () => {
        return options[Math.floor(Math.random() * options.length)];
    };

    const [winner, setWinner] = useState(null);
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [userScore, setUserscore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    useEffect(() => {
        if (userChoice) {
            const choise = randomChoice();
            setComputerChoice(choise);

            if (userChoice === 'rock' && choise.name === 'scissors'
                || userChoice === 'paper' && choise.name === 'rock'
                || userChoice === 'scissors' && choise.name === 'paper') {
                setWinner('You win🥳');
                setUserscore(prevState => prevState + 1)
            } else if (userChoice === 'rock' && choise.name === 'paper'
                || userChoice === 'paper' && choise.name === 'scissors'
                || userChoice === 'scissors' && choise.name === 'rock') {
                setWinner('You lose😔');
                setComputerScore(prevState => prevState + 1)
            } else {
                setWinner('Draw');
            }
        }
    }, [userChoice]);

    return (
        <>
            <h1>Rock, Paper, Scissors</h1>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            {userChoice === null ? (
                <div>
                    <h2>Choose your weapon</h2>
                    <div className="options">
                        {options.map((option, index) => (
                            <p key={index}
                               style={{cursor: 'pointer'}}
                               onClick={() => setUserChoice(option.name)}>
                                {option.icon}
                            </p>
                        ))}
                    </div>
                </div>
                ) : (
                <div>
                    <h2>Your choice</h2>
                    <p style={{}}>{options.find(option => option.name === userChoice).icon}</p>
                </div>
            )}
            {computerChoice && (
                <div>
                    <h2>Computer's choice</h2>
                    <p>{computerChoice.icon}</p>
                </div>
            )}
            </div>
            {winner &&
                <>
                    <h2>{winner}</h2>
                    <div style={{textAlign: 'center'}}>
                        <button style={{textAlign: 'center'}} onClick={() => {
                            setUserChoice(null);
                            setWinner(null);
                            setComputerChoice(null);
                        }}>
                            Play again
                        </button>
                        <button style={{textAlign: 'center', zIndex: 10}} onClick={() => {
                            setUserscore(0)
                            setComputerScore(0)
                        }}>
                            Reset Score
                        </button>
                    </div>
                </>
            }
            <p style={{fontSize: '32px'}}>{userScore} - {computerScore}</p>
            {userScore === 3 && <Winner/>}
            {computerScore === 3 && <Loser/>}
        </>
    );
}
export default App;