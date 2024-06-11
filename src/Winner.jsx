import React from 'react';
import Confetti from "react-confetti";

const Winner = () => {
    return (
        <>
        <div className="message" style={{backgroundColor: 'rgba(0, 128, 0, 0.9)'}}>
            <Confetti />
            <h1>🎉Congratulations🎉</h1>
            <button onClick={() => window.location.reload()}>Play again</button>
        </div>
        </>
    );
};

export default Winner;